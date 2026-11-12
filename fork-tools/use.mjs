#!/usr/bin/env node
// Puts an Angular app on the packages of this fork.
//
//   node fork-tools/use.mjs <app-folder> [--tarballs <folder>] [--no-install]
//
// 1. Checks that the app's Angular CLI and @angular/core are on the fork's version line.
// 2. Copies the tarballs made by `pack.mjs` to `<app>/vendor/angular-fork/`.
// 3. Points every @angular/* package that this repository builds, and that the app declares or
//    has installed, at its tarball through a relative `file:` path, with the app's own package manager:
//    npm `overrides`, pnpm `overrides` (pnpm-workspace.yaml, or package.json for pnpm < 10) or
//    Yarn `resolutions`. Direct dependencies get the same `file:` path.
// 4. Installs, then checks that exactly one copy of each replaced package is installed.
//
// What it changed is saved in `<app>/vendor/angular-fork/state.json`; `restore.mjs` undoes it.
// Packages built elsewhere (@angular/cli, @angular/build, @angular/cdk, @angular/material,
// @angular/ssr, ...) stay on npm.

import fs from 'node:fs';
import path from 'node:path';
import {
  STATE_FILE,
  VENDOR_DIR,
  YAML_MARK,
  clearAngularCache,
  defaultTarballDir,
  detectPackageManager,
  findLockfile,
  fail,
  installArgs,
  installedCopies,
  packageManagerMajor,
  readJson,
  run,
  versionLine,
  writeJson,
} from './lib.mjs';

const args = process.argv.slice(2);
const appArg = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--tarballs');
if (!appArg)
  fail('usage: node fork-tools/use.mjs <app-folder> [--tarballs <folder>] [--no-install]');
const appDir = path.resolve(appArg);
const tarIndex = args.indexOf('--tarballs');
const tarballDir = path.resolve(tarIndex === -1 ? defaultTarballDir : args[tarIndex + 1]);
const skipInstall = args.includes('--no-install');

const pkgFile = path.join(appDir, 'package.json');
if (!fs.existsSync(pkgFile)) fail(`${appDir} has no package.json.`);
const manifestFile = path.join(tarballDir, 'manifest.json');
if (!fs.existsSync(manifestFile)) {
  fail(`no tarballs in ${tarballDir}. Run \`pnpm build\` and \`node fork-tools/pack.mjs\` first.`);
}
const manifest = readJson(manifestFile);
const forkLine = versionLine(manifest.version);

// --- 1. Version line check -------------------------------------------------------------------
const pkg = readJson(pkgFile);
const declared = (name) =>
  pkg.dependencies?.[name] ?? pkg.devDependencies?.[name] ?? pkg.peerDependencies?.[name];
const installedVersion = (name) => {
  const file = path.join(appDir, 'node_modules', ...name.split('/'), 'package.json');
  return fs.existsSync(file) ? readJson(file).version : null;
};
const vendorDir = path.join(appDir, VENDOR_DIR);
const stateFile = path.join(vendorDir, STATE_FILE);
const previous = fs.existsSync(stateFile) ? readJson(stateFile) : null;

function lineOf(name) {
  // While the app is already on the fork, its package.json holds file: paths; use the saved specs.
  const saved = previous?.packageJson.find((c) => c.name === name && c.original)?.original;
  const spec = saved ?? declared(name);
  return versionLine(spec && !spec.startsWith('file:') ? spec : installedVersion(name));
}
const cliLine = lineOf('@angular/cli');
const coreLine = lineOf('@angular/core');
if (!coreLine) fail('the app does not depend on @angular/core.');
for (const [name, line] of [
  ['@angular/cli', cliLine],
  ['@angular/core', coreLine],
]) {
  if (line && line !== forkLine) {
    fail(
      `the app uses ${name} ${line}, but the fork is ${manifest.version} (line ${forkLine}).\n` +
        `Move the app to ${forkLine} first, on stock Angular, then run this tool again:\n\n` +
        `    cd ${appArg}\n` +
        `    npx ng update @angular/cli@${forkLine} @angular/core@${forkLine}\n\n` +
        'See https://angular.dev/update-guide for the steps between your version and the target.',
    );
  }
}

// --- 2. Which packages, copy tarballs --------------------------------------------------------
const pm = detectPackageManager(appDir);
// A package counts as used when package.json names it or a copy of it is installed (for example a
// peer dependency such as @angular/compiler). Optional peers that are not installed stay out.
const usedNames = Object.keys(manifest.packages).filter(
  (name) =>
    declared(name) || previous?.packages.includes(name) || installedCopies(appDir, name).length > 0,
);
if (!usedNames.length) fail('the app uses none of the packages built by this repository.');

fs.mkdirSync(vendorDir, {recursive: true});
for (const old of fs.readdirSync(vendorDir)) {
  if (old.endsWith('.tgz')) fs.rmSync(path.join(vendorDir, old));
}
const specFor = {};
for (const name of usedNames) {
  const file = manifest.packages[name];
  fs.copyFileSync(path.join(tarballDir, file), path.join(vendorDir, file));
  specFor[name] = `file:${VENDOR_DIR.split(path.sep).join('/')}/${file}`;
}

// --- 3. Point the packages at the tarballs ---------------------------------------------------
// Keep the specs from the first switch, so that restore.mjs always returns to stock Angular.
const state = previous ?? {
  packageManager: pm,
  packageJson: [], // {section, name, original}  original === null means "was absent"
  workspaceYaml: null, // {created: boolean}
  packages: [],
};
state.fork = {version: manifest.version, commit: manifest.commit, baseTag: manifest.baseTag};
state.packages = usedNames;

function setField(section, name, value) {
  pkg[section] ??= {};
  if (!state.packageJson.some((c) => c.section === section && c.name === name)) {
    state.packageJson.push({section, name, original: pkg[section][name] ?? null});
  }
  pkg[section][name] = value;
}

for (const name of usedNames) {
  for (const section of ['dependencies', 'devDependencies']) {
    if (pkg[section]?.[name] !== undefined) setField(section, name, specFor[name]);
  }
}

if (pm === 'npm') {
  for (const name of usedNames) setField('overrides', name, specFor[name]);
} else if (pm === 'yarn') {
  for (const name of usedNames) setField('resolutions', name, specFor[name]);
} else {
  const major = packageManagerMajor('pnpm', appDir);
  if (major >= 10) {
    writePnpmWorkspaceOverrides();
  } else {
    pkg.pnpm ??= {};
    pkg.pnpm.overrides ??= {};
    for (const name of usedNames) {
      if (!state.packageJson.some((c) => c.section === 'pnpm.overrides' && c.name === name)) {
        state.packageJson.push({
          section: 'pnpm.overrides',
          name,
          original: pkg.pnpm.overrides[name] ?? null,
        });
      }
      pkg.pnpm.overrides[name] = specFor[name];
    }
  }
}

function writePnpmWorkspaceOverrides() {
  const file = path.join(appDir, 'pnpm-workspace.yaml');
  const created = !fs.existsSync(file);
  state.workspaceYaml ??= {created};
  let lines = created ? [] : fs.readFileSync(file, 'utf8').split('\n');
  lines = lines.filter((l) => !l.endsWith(YAML_MARK)); // drop entries of an earlier switch
  const entries = usedNames.map((n) => `'${n}': ${specFor[n]}`);
  const overridesAt = lines.findIndex((l) => /^overrides:\s*$/.test(l));
  if (overridesAt === -1) {
    while (lines.length && lines[lines.length - 1] === '') lines.pop();
    lines.push(`overrides: ${YAML_MARK}`, ...entries.map((e) => `  ${e} ${YAML_MARK}`), '');
  } else {
    const next = lines[overridesAt + 1] ?? '';
    const indent = next.match(/^(\s+)\S/)?.[1] ?? '  ';
    for (const n of usedNames) {
      const clash = lines.find(
        (l, i) => i > overridesAt && new RegExp(`^\\s+['"]?${n}['"]?:`).test(l),
      );
      if (clash)
        fail(`pnpm-workspace.yaml already overrides ${n}: "${clash.trim()}". Remove it first.`);
    }
    lines.splice(overridesAt + 1, 0, ...entries.map((e) => `${indent}${e} ${YAML_MARK}`));
  }
  fs.writeFileSync(file, lines.join('\n'));
}

// The lockfile pins exact versions. `^22.2.0` also matches `22.2.6+sha-...` (build metadata does
// not count in semver), so restore.mjs needs the original lockfile to really go back to npm.
if (!previous) {
  const lockfile = findLockfile(appDir);
  state.lockfile = lockfile;
  if (lockfile)
    fs.copyFileSync(path.join(appDir, lockfile), path.join(vendorDir, `original-${lockfile}`));
}
writeJson(pkgFile, pkg);
fs.writeFileSync(stateFile, JSON.stringify(state, null, 2) + '\n');
console.log(`Pointed ${usedNames.length} packages of ${appArg} at ${manifest.version} (${pm}):`);
for (const name of usedNames) console.log(`  ${name.padEnd(36)} ${specFor[name]}`);

// --- 4. Install and verify -------------------------------------------------------------------
if (skipInstall) {
  console.log(`\nSkipped the install. Run \`${pm} install\` in ${appArg}.`);
  process.exit(0);
}
clearAngularCache(appDir);
if (run(pm, installArgs(pm), appDir) !== 0) {
  fail(
    `${pm} install failed (see above). The app's package.json now points at the fork.\n` +
      `To go back: node fork-tools/restore.mjs ${appArg}`,
  );
}

if (!fs.existsSync(path.join(appDir, 'node_modules'))) {
  console.log("\nNo node_modules folder (Yarn Plug'n'Play?), so the copy check was skipped.");
  process.exit(0);
}
let problems = 0;
console.log('\nInstalled copies:');
for (const name of usedNames) {
  const copies = installedCopies(appDir, name);
  const ok = copies.length === 1 && copies[0].version === manifest.version;
  if (!ok) problems++;
  console.log(
    `  ${ok ? 'ok ' : 'BAD'} ${name.padEnd(36)} ${copies.map((c) => c.version).join(', ') || 'none'}`,
  );
}
if (problems) fail(`${problems} package(s) are not exactly one copy of ${manifest.version}.`);
console.log(`\n${appArg} now runs on Angular ${manifest.version}. Go back with:`);
console.log(`  node fork-tools/restore.mjs ${appArg}`);
