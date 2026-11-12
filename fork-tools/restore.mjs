#!/usr/bin/env node
// Puts an app that `use.mjs` switched to the fork back on stock Angular from npm.
//
//   node fork-tools/restore.mjs <app-folder> [--no-install]
//
// Undoes exactly what use.mjs recorded in `<app>/vendor/angular-fork/state.json`: the original
// version ranges and overrides come back, entries use.mjs added are removed, the original lockfile
// comes back, the tarballs are deleted, and the app is installed again.

import fs from 'node:fs';
import path from 'node:path';
import {
  STATE_FILE,
  VENDOR_DIR,
  YAML_MARK,
  clearAngularCache,
  fail,
  findLockfile,
  installArgs,
  installedCopies,
  readJson,
  run,
  writeJson,
} from './lib.mjs';

const args = process.argv.slice(2);
const appArg = args.find((a) => !a.startsWith('--'));
if (!appArg) fail('usage: node fork-tools/restore.mjs <app-folder> [--no-install]');
const appDir = path.resolve(appArg);
const vendorDir = path.join(appDir, VENDOR_DIR);
const stateFile = path.join(vendorDir, STATE_FILE);
if (!fs.existsSync(stateFile))
  fail(`${appArg} is not on the fork (no ${VENDOR_DIR}/${STATE_FILE}).`);
const state = readJson(stateFile);

const pkgFile = path.join(appDir, 'package.json');
const pkg = readJson(pkgFile);
for (const {section, name, original} of state.packageJson) {
  const holder = section === 'pnpm.overrides' ? pkg.pnpm?.overrides : pkg[section];
  if (!holder) continue;
  if (original === null) delete holder[name];
  else holder[name] = original;
}
for (const section of ['overrides', 'resolutions']) {
  if (pkg[section] && !Object.keys(pkg[section]).length) delete pkg[section];
}
if (pkg.pnpm?.overrides && !Object.keys(pkg.pnpm.overrides).length) delete pkg.pnpm.overrides;
if (pkg.pnpm && !Object.keys(pkg.pnpm).length) delete pkg.pnpm;
writeJson(pkgFile, pkg);

if (state.workspaceYaml) {
  const file = path.join(appDir, 'pnpm-workspace.yaml');
  if (fs.existsSync(file)) {
    const lines = fs
      .readFileSync(file, 'utf8')
      .split('\n')
      .filter((l) => !l.endsWith(YAML_MARK));
    const rest = lines.join('\n').trim();
    if (state.workspaceYaml.created && rest === '') fs.rmSync(file);
    else fs.writeFileSync(file, lines.join('\n'));
  }
}

if (state.lockfile) {
  const saved = path.join(vendorDir, `original-${state.lockfile}`);
  if (fs.existsSync(saved)) fs.copyFileSync(saved, path.join(appDir, state.lockfile));
} else {
  // The app had no lockfile before the switch; drop the one the install created.
  const created = findLockfile(appDir);
  if (created) fs.rmSync(path.join(appDir, created));
}
fs.rmSync(vendorDir, {recursive: true, force: true});
const parent = path.dirname(vendorDir);
if (fs.existsSync(parent) && fs.readdirSync(parent).length === 0) fs.rmdirSync(parent);
console.log(`Restored the package.json entries of ${appArg} and removed ${VENDOR_DIR}.`);

if (args.includes('--no-install')) {
  console.log(`Skipped the install. Run \`${state.packageManager} install\` in ${appArg}.`);
  process.exit(0);
}
clearAngularCache(appDir);
if (run(state.packageManager, installArgs(state.packageManager), appDir) !== 0) {
  fail(`${state.packageManager} install failed (see above).`);
}

if (fs.existsSync(path.join(appDir, 'node_modules'))) {
  let leftovers = 0;
  console.log('\nInstalled copies:');
  for (const name of state.packages) {
    const copies = installedCopies(appDir, name);
    const fork = copies.filter((c) => c.version === state.fork.version);
    leftovers += fork.length;
    console.log(
      `  ${fork.length ? 'BAD' : 'ok '} ${name.padEnd(36)} ${copies.map((c) => c.version).join(', ') || 'none'}`,
    );
  }
  if (leftovers) fail(`${leftovers} copies of the fork build are still installed.`);
}
console.log(`\n${appArg} is back on stock Angular from npm.`);
