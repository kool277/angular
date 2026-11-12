# fork-tools

Small scripts for this fork. Plain Node.js (20 or newer), no dependencies. Run them from the
repository root.

| Script           | What it does                                                |
| ---------------- | ----------------------------------------------------------- |
| `pack.mjs`       | Turns the packages that `pnpm build` made into npm tarballs |
| `use.mjs`        | Puts one of your Angular apps on those tarballs             |
| `restore.mjs`    | Puts the app back on stock Angular from npm                 |
| `check-docs.mjs` | Checks the guide in [`easy-docs/`](../easy-docs/README.md)  |

## Put an app on the fork

```shell
pnpm install                                   # once, in this repository
pnpm build                                     # builds dist/packages-dist from the current commit
node fork-tools/pack.mjs                       # writes dist/fork-tarballs/*.tgz and manifest.json
node fork-tools/use.mjs ../path/to/your-app    # switches the app and installs
```

Build from a commit with no uncommitted changes. The version of the built packages then names that
commit, for example `22.2.6+sha-1a2b3c4`, and `ng version` in the app shows it.

`use.mjs`:

1. Stops when the app's Angular CLI or `@angular/core` is on another version line than the fork
   (for example the app is on 21.2 and the fork on 22.2). It prints the `ng update` command that
   moves the app to the fork's line on stock Angular first.
2. Copies the tarballs the app needs to `<app>/vendor/angular-fork/`.
3. Points every `@angular/*` package that this repository builds, and that the app declares or has
   installed, at its tarball through a relative `file:` path. It uses the app's own package
   manager:
   - npm: `overrides` in `package.json`;
   - pnpm 10 or newer: `overrides` in `pnpm-workspace.yaml` (lines marked `# angular-fork`); older
     pnpm: `pnpm.overrides` in `package.json`;
   - Yarn: `resolutions` in `package.json`.

   Direct dependencies get the same `file:` path, so `package.json` shows what is installed.
   Packages built in other repositories (`@angular/cli`, `@angular/build`, `@angular/ssr`,
   `@angular/cdk`, `@angular/material`, `@angular/aria`) stay on npm.

4. Clears `.angular/cache`, installs, and checks that exactly one copy of each replaced package is
   installed. It never uses `--force` or `--legacy-peer-deps`.

It saves what it changed, and the original lockfile, in `<app>/vendor/angular-fork/state.json`.
Running `use.mjs` again on the same app replaces the tarballs with the newest ones.

Options: `--tarballs <folder>` (default `dist/fork-tarballs`), `--no-install`.

## Go back to stock Angular

```shell
node fork-tools/restore.mjs ../path/to/your-app
```

It puts back the original version ranges, overrides and lockfile, removes `vendor/angular-fork/`,
installs, and checks that no fork package is left. Option: `--no-install`.

## Tested

On 2026-11-12, with apps made by `ng new` from Angular CLI 22.2.7 and the build of this branch:

- npm 11, pnpm 11 and Yarn 1.22: `use.mjs`, then `ng version` (shows the fork's SHA), `ng build`
  and `ng test` pass, with exactly one copy of each replaced package; `restore.mjs` brings back
  `package.json`, the lockfile (and for pnpm `pnpm-workspace.yaml`) byte for byte.
- Yarn 2 or newer was not tested.

Yarn Plug'n'Play (no `node_modules`) gets the same `resolutions`, but the copy check is skipped.

## Pack zone.js too

`pack.mjs` adds `dist/zone.js-dist` only when the branch changes `packages/zone.js` compared to its
release tag. Pass `--zone` to add it anyway.
