#!/usr/bin/env node
// Turns the packages built by `pnpm build` into npm tarballs.
//
//   node fork-tools/pack.mjs [--out <folder>] [--zone]
//
// Reads `dist/packages-dist/*` and writes one `.tgz` per package, plus `manifest.json`, to
// `dist/fork-tarballs/` (or `--out`). zone.js (`dist/zone.js-dist/`) is packed only when the
// branch changes `packages/zone.js` compared to its release tag, or with `--zone`.

import fs from 'node:fs';
import path from 'node:path';
import {capture, defaultTarballDir, fail, readJson, repoRoot} from './lib.mjs';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const outDir = path.resolve(outIndex === -1 ? defaultTarballDir : args[outIndex + 1]);
const forceZone = args.includes('--zone');

const distDir = path.join(repoRoot, 'dist', 'packages-dist');
if (!fs.existsSync(distDir)) fail('dist/packages-dist does not exist. Run `pnpm build` first.');

const packageDirs = fs
  .readdirSync(distDir, {withFileTypes: true})
  .filter((e) => e.isDirectory() && fs.existsSync(path.join(distDir, e.name, 'package.json')))
  .map((e) => path.join(distDir, e.name));

const baseTag = capture(
  'git',
  ['describe', '--tags', '--abbrev=0', '--match', 'v[0-9]*'],
  repoRoot,
);
let zoneChanged = false;
try {
  capture('git', ['diff', '--quiet', baseTag, 'HEAD', '--', 'packages/zone.js'], repoRoot);
} catch {
  zoneChanged = true;
}
if (forceZone || zoneChanged) {
  const zoneDist = path.join(repoRoot, 'dist', 'zone.js-dist');
  const zoneDir = [path.join(zoneDist, 'zone.js'), zoneDist].find((d) =>
    fs.existsSync(path.join(d, 'package.json')),
  );
  if (!zoneDir) fail('zone.js changed, but dist/zone.js-dist has no package. Run `pnpm build`.');
  packageDirs.push(zoneDir);
}

const packages = packageDirs.map((dir) => ({dir, ...readJson(path.join(dir, 'package.json'))}));
const angular = packages.filter((p) => p.name.startsWith('@angular/'));
const versions = new Set(angular.map((p) => p.version));
if (versions.size !== 1) fail(`the built packages have different versions: ${[...versions]}`);
const version = [...versions][0];
if (/with-local-changes/.test(version)) {
  console.warn(
    `Warning: ${version} was built from a working tree with uncommitted changes.\n` +
      'Commit first and run `pnpm build` again so the version names an exact commit.',
  );
}

fs.mkdirSync(outDir, {recursive: true});
for (const old of fs.readdirSync(outDir)) {
  if (old.endsWith('.tgz') || old === 'manifest.json') fs.rmSync(path.join(outDir, old));
}

const manifest = {
  version,
  baseTag,
  commit: capture('git', ['rev-parse', 'HEAD'], repoRoot),
  createdAt: new Date().toISOString(),
  packages: {},
};
for (const pkg of packages) {
  const output = capture(
    'npm',
    ['pack', pkg.dir, '--pack-destination', outDir, '--json'],
    repoRoot,
  );
  const [{filename}] = JSON.parse(output.slice(output.indexOf('[')));
  manifest.packages[pkg.name] = path.basename(filename);
  console.log(`${pkg.name.padEnd(36)} ${path.basename(filename)}`);
}
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `\n${packages.length} tarballs of ${version} in ${path.relative(process.cwd(), outDir)}`,
);
