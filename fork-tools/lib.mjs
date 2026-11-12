// Shared helpers for the fork tools. Plain Node.js (20 or newer), no dependencies.

import {execFileSync, spawnSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const defaultTarballDir = path.join(repoRoot, 'dist', 'fork-tarballs');
export const VENDOR_DIR = path.join('vendor', 'angular-fork');
export const STATE_FILE = 'state.json';
export const YAML_MARK = '# angular-fork';

export function fail(message) {
  console.error(`\nError: ${message}`);
  process.exit(1);
}

export function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/** Writes JSON with the indentation the file already uses (2 spaces when new). */
export function writeJson(file, value) {
  let indent = 2;
  let newline = '\n';
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const match = text.match(/^\{\r?\n([ \t]+)"/);
    if (match) indent = match[1];
    if (!text.endsWith('\n')) newline = '';
  }
  fs.writeFileSync(file, JSON.stringify(value, null, indent) + newline);
}

export const LOCKFILES = [
  'package-lock.json',
  'npm-shrinkwrap.json',
  'pnpm-lock.yaml',
  'yarn.lock',
];

/** The lockfile of the app, or null. */
export function findLockfile(appDir) {
  return LOCKFILES.find((name) => fs.existsSync(path.join(appDir, name))) ?? null;
}

/** `22.2.6+sha-abc1234` -> `22.2`. */
export function versionLine(version) {
  const match = String(version).match(/(\d+)\.(\d+)/);
  return match ? `${match[1]}.${match[2]}` : null;
}

/** Runs a command and shows its output. Returns the exit status. */
export function run(command, args, cwd) {
  console.log(`\n$ ${[command, ...args].join(' ')}   (in ${cwd})`);
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.error) fail(`could not run ${command}: ${result.error.message}`);
  return result.status ?? 1;
}

export function capture(command, args, cwd) {
  return execFileSync(command, args, {
    cwd,
    encoding: 'utf8',
    shell: process.platform === 'win32',
  }).trim();
}

/** Finds out which package manager an app uses: npm, pnpm or yarn. */
export function detectPackageManager(appDir) {
  const pkg = readJson(path.join(appDir, 'package.json'));
  const declared = String(pkg.packageManager ?? '').split('@')[0];
  if (['npm', 'pnpm', 'yarn'].includes(declared)) return declared;
  if (fs.existsSync(path.join(appDir, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(appDir, 'yarn.lock'))) return 'yarn';
  return 'npm';
}

/**
 * Lists every installed copy of a package that the app can reach: the copy in the app's own
 * `node_modules` and every copy some installed package resolves to. It follows symbolic links the
 * way Node.js resolution does, so it works for npm, Yarn (node_modules linker) and pnpm, and it
 * ignores orphaned folders that pnpm leaves in `node_modules/.pnpm`.
 * Returns one entry per real folder: {dir, version}.
 */
export function installedCopies(appDir, name) {
  const found = new Map();
  const queued = new Set();
  const queue = [];
  const enqueue = (dir) => {
    if (!fs.existsSync(dir)) return;
    const real = fs.realpathSync(dir);
    if (!queued.has(real)) {
      queued.add(real);
      queue.push(real);
    }
  };
  // A package folder `.../node_modules/(@scope/)pkg` resolves its dependencies from the
  // node_modules folder it sits in, and from its own nested node_modules.
  const visitPackage = (packageDir) => {
    const real = fs.realpathSync(packageDir);
    enqueue(path.join(real, 'node_modules'));
    let parent = path.dirname(real);
    if (path.basename(parent).startsWith('@')) parent = path.dirname(parent);
    if (path.basename(parent) === 'node_modules') enqueue(parent);
  };
  enqueue(path.join(appDir, 'node_modules'));
  while (queue.length) {
    const nodeModules = queue.shift();
    const candidate = path.join(nodeModules, ...name.split('/'), 'package.json');
    if (fs.existsSync(candidate)) {
      const dir = fs.realpathSync(path.dirname(candidate));
      if (!found.has(dir)) found.set(dir, readJson(candidate).version);
    }
    for (const entry of fs.readdirSync(nodeModules, {withFileTypes: true})) {
      if (entry.name.startsWith('.')) continue; // .bin, .pnpm, .package-lock.json ...
      const full = path.join(nodeModules, entry.name);
      if (!fs.existsSync(full) || !fs.statSync(full).isDirectory()) continue;
      if (entry.name.startsWith('@')) {
        for (const scoped of fs.readdirSync(full)) {
          const scopedDir = path.join(full, scoped);
          if (fs.existsSync(path.join(scopedDir, 'package.json'))) visitPackage(scopedDir);
        }
      } else if (fs.existsSync(path.join(full, 'package.json'))) {
        visitPackage(full);
      }
    }
  }
  return [...found].map(([dir, version]) => ({dir, version}));
}

/** The version of the package manager that runs in `appDir` (respects `packageManager`). */
export function packageManagerMajor(pm, appDir) {
  try {
    return Number(capture(pm, ['--version'], appDir).split('.')[0]);
  } catch {
    return NaN;
  }
}

export function installArgs(pm) {
  // Plain installs. Never --force or --legacy-peer-deps: peer conflicts must show up.
  if (pm === 'pnpm') return ['install', '--no-frozen-lockfile'];
  return ['install'];
}

export function clearAngularCache(appDir) {
  const cache = path.join(appDir, '.angular', 'cache');
  if (fs.existsSync(cache)) {
    fs.rmSync(cache, {recursive: true, force: true});
    console.log(
      'Cleared .angular/cache so the CLI does not reuse output built with other packages.',
    );
  }
}
