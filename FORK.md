# Using this fork

`kool277/angular` is a fork of [angular/angular](https://github.com/angular/angular), the source code of the Angular framework. Use it to build Angular from source, experiment with changes, run your apps on fixes before Angular releases them, and send pull requests to Angular.

- `main` follows upstream's `main` and has no changes of its own.
- `fix/bugs-and-easy-docs-22.2-2026-11-12` is Angular **v22.2.6** plus a few fixes ([FIXES.md](FIXES.md)), tools that put your apps on that build ([fork-tools/](fork-tools/README.md)), and a beginner guide to Angular ([easy-docs/](easy-docs/README.md)). Everything that exists only in this fork lives in new files (`FORK.md`, `CLAUDE.md`, `FIXES.md`, `fork-tools/`, `easy-docs/`), so updating from upstream never conflicts.

This guide is about working on the framework itself. To build applications with Angular, see [angular.dev](https://angular.dev).

## What's in the repository

| Directory                     | Contents                                                                                                                                                                                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/`                   | The `@angular/*` packages: `core`, `common`, `compiler`, `compiler-cli`, `forms`, `router`, `platform-browser`, `platform-server`, `ssr`, `animations`, `elements`, `localize`, `service-worker`, `upgrade`, `language-service`, `zone.js` and others |
| `adev/`                       | The source of the [angular.dev](https://angular.dev) documentation site                                                                                                                                                                               |
| `dev-app/`                    | A small app for trying out changes to the framework                                                                                                                                                                                                   |
| `devtools/`                   | Angular DevTools, the browser extension                                                                                                                                                                                                               |
| `vscode-ng-language-service/` | The Angular Language Service extension for VS Code                                                                                                                                                                                                    |
| `integration/`                | End-to-end tests, each a self-contained application that uses the packages as an app would                                                                                                                                                            |
| `modules/`                    | Benchmarks and playground apps                                                                                                                                                                                                                        |
| `goldens/`                    | The recorded public API of each package, which `pnpm public-api:check` compares against                                                                                                                                                               |
| `tools/`, `scripts/`          | Build and release tooling                                                                                                                                                                                                                             |
| `contributing-docs/`          | The project's developer documentation                                                                                                                                                                                                                 |
| `skills/dev-skills/`          | Angular skills for coding agents that build Angular apps                                                                                                                                                                                              |

## Requirements

Each branch pins its own versions, so read them from the files of the branch you are on:

| Tool    | Where it's set                                                                                                  | `main` (2026-11) | `fix/...-22.2-...` (v22.2.6) |
| ------- | --------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| Node.js | `.nvmrc`, which `nvm install` and `nvm use` read                                                                | 24.22.2          | 24.21.0                      |
| pnpm    | `packageManager` in `package.json`; npm and Yarn refuse to install                                              | 12.16.1          | 11.28.11                     |
| Bazel   | `.bazelversion`. You don't install it yourself: `pnpm install` provides bazelisk, which you run as `pnpm bazel` | 8.8.2            | 8.8.2                        |

Instead of installing these yourself, you can work in a Docker container with VS Code. [.devcontainer/README.md](.devcontainer/README.md) explains how: copy its `recommended-Dockerfile` and `recommended-devcontainer.json` to `Dockerfile` and `devcontainer.json`, then reopen the folder in the container.

## First setup

```bash
git clone https://github.com/kool277/angular.git
cd angular
git remote add upstream https://github.com/angular/angular.git
pnpm install
```

## Everyday commands

| Task                                                | Command                                                  |
| --------------------------------------------------- | -------------------------------------------------------- |
| Build all packages into `dist/packages-dist`        | `pnpm build`                                             |
| Build one package                                   | `pnpm bazel build packages/core`                         |
| Run all tests of one package                        | `pnpm test //packages/core/...`                          |
| Run one test suite                                  | `pnpm test //packages/core/test:test`                    |
| Run every package's tests, as before a pull request | `pnpm test //packages/...`                               |
| Debug a test                                        | `pnpm bazel test packages/core/test:test --config=debug` |
| Check lint and formatting                           | `pnpm lint`                                              |
| Format the files you changed                        | `pnpm ng-dev format changed`                             |
| Check, or accept, changes to the public API         | `pnpm public-api:check`, `pnpm public-api:update`        |
| Try your changes in the dev-app                     | `pnpm dev`                                               |
| Serve angular.dev locally                           | `pnpm adev`                                              |
| Serve Angular DevTools                              | `pnpm devtools:devserver`                                |

`package.json` lists the other scripts. [Building and Testing Angular](contributing-docs/building-and-testing-angular.md) and [Building with Bazel](contributing-docs/building-with-bazel.md) explain them in detail.

## Using your build in your own app

To try a framework change in one of your own projects, build the packages and link them into the project:

```bash
pnpm ng-dev misc build-and-link <path-to-your-project>
```

The linked packages are symbolic links, so start the Angular CLI with Node's `--preserve-symlinks` flags, from your project:

```bash
node --preserve-symlinks --preserve-symlinks-main node_modules/@angular/cli/lib/init.js serve
```

## Put an app on the fork

On the `fix/...` branch, from a commit with no uncommitted changes:

```bash
pnpm install
pnpm build                                   # dist/packages-dist, version 22.2.6+sha-<commit>
node fork-tools/pack.mjs                     # dist/fork-tarballs/*.tgz
node fork-tools/use.mjs ../path/to/your-app  # switch the app, install, check
```

`use.mjs` copies the tarballs to `vendor/angular-fork/` in the app and points the app's `@angular/*` packages that this repository builds at them, with npm `overrides`, pnpm `overrides` or Yarn `resolutions`. The Angular CLI, `@angular/build`, CDK and Material stay on npm. The app must already be on Angular 22.2; otherwise `use.mjs` stops and names the `ng update` command to run first. Afterwards `ng version` in the app shows `22.2.6+sha-<commit>`. [fork-tools/README.md](fork-tools/README.md) has the details, and [fork-tools/fix-demos/](fork-tools/fix-demos/README.md) has one test per fix that you can copy into an app to see the difference.

## Go back to stock Angular

```bash
node fork-tools/restore.mjs ../path/to/your-app
```

It restores the app's original version ranges, overrides and lockfile, removes `vendor/angular-fork/` and installs again.

## Move the fixes to a newer Angular release

The `fix/...` branch is a release tag plus the fork's commits, so moving it means rebasing those commits onto the next tag. Do it on a new branch, so the old one keeps working:

```bash
git fetch upstream tag v22.2.7 --no-tags      # the next release of the same line
git switch -c fix/bugs-and-easy-docs-22.2-<date> fix/bugs-and-easy-docs-22.2-2026-11-12
git rebase --onto v22.2.7 v22.2.6
```

- If a fix is already in the new release, the rebase stops on it or leaves the commit empty: drop it (`git rebase --skip`) and remove its row from FIXES.md.
- Use the Node.js, pnpm and Bazel versions that the new tag pins, run `pnpm install`, and run the gate in FIXES.md again: `pnpm test //packages/...`, `pnpm public-api:check`, `pnpm build`, then `use.mjs` on your apps.
- For a new minor or major line (for example 22.3), the same works with that line's first release tag, but expect conflicts and move your apps with `ng update` first.
- Don't name a branch `main` or like `22.2.x`: those names start Angular's CI and release workflows.

## Share the build with CI or other machines

`use.mjs` only changes the machine it runs on, unless you share the tarballs. Two ways, neither of which this fork sets up for you:

1. **Commit `vendor/angular-fork/` in the app.** The app's `package.json` and lockfile already point at those files through relative `file:` paths, so a clone of the app installs the same build anywhere, CI included. The tarballs add about 15 MB to the app's repository, and every update of the fork adds that again.
2. **Publish snapshot repositories.** Upstream's `scripts/ci/publish-snapshot-build-artifacts.sh` pushes each built package to a GitHub repository such as `<you>/core-builds` (see [Building and Testing Angular](contributing-docs/building-and-testing-angular.md#publishing-snapshot-builds)). Apps then depend on `github:<you>/core-builds#<branch>`. It needs a GitHub token and creates one repository per package, so only do it on purpose.

## Keeping the fork up to date

The fork doesn't update itself. To bring its `main` up to upstream's:

```bash
gh repo sync kool277/angular
```

Or, from your clone:

```bash
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
```

Keep fork-only work, like this guide, off `main` where possible. Then `main` can always fast-forward to upstream's, and syncing never needs a merge or a force-push.

## Making a change and sending it to Angular

1. Read [CONTRIBUTING.md](CONTRIBUTING.md). Angular only accepts code from people who have signed its Contributor License Agreement, and your commits must use the email address you signed it with.
2. For a new feature, discuss it in an issue first. Angular only takes pull requests for feature requests labelled "help wanted".
3. Start each change from upstream's latest `main`:

   ```bash
   git fetch upstream
   git switch -c fix/my-change upstream/main
   ```

4. Write commit messages as `<type>(<scope>): <summary>`, for example `fix(router): handle empty query params`. The type is one of `build`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor` or `test`, and the scope is the package or area, such as `core`, `forms` or `router`. See the [commit message guidelines](contributing-docs/commit-message-guidelines.md).
5. Run the affected tests, `pnpm lint`, and `pnpm ng-dev format changed`.
6. Push the branch to the fork, then open the pull request against Angular:

   ```bash
   git push -u origin fix/my-change
   gh pr create --repo angular/angular --base main --head kool277:fix/my-change
   ```

In a fork, `gh pr create` targets the parent repository by default. To open a pull request inside the fork instead, pass `--repo kool277/angular`.

## GitHub Actions on this fork

The fork inherits Angular's workflows in `.github/workflows/`. On a new fork GitHub doesn't run them until you enable Actions in the fork's **Actions** tab. As of 2026-11-08, they have never run here.

If you enable them, keep in mind:

- `ci.yml`, `release.yml`, `perf.yml` and `cross-repo-adev-docs.yml` run on pushes to `main` and to version branches named like `<major>.<minor>.x`. Branches with other names don't trigger them.
- `release.yml`, `ci.yml`, `dev-infra.yml`, `benchmark-compare.yml` and `adev-preview-deploy.yml` use Angular's secrets, such as `WOMBOT_TOKEN` and `ANGULAR_ROBOT_PRIVATE_KEY`, which a fork doesn't have, so the jobs that need them fail. `release.yml` runs Angular's release tooling, so disable it in the Actions tab rather than let it run.
- `assistant-to-the-branch-manager.yml` and `cross-repo-adev-docs.yml` check whether they run in Angular's own repository, and skip their jobs on a fork.

## The easy guide

[easy-docs/](easy-docs/README.md) is a beginner guide to Angular 22.2, written from this branch's official docs, with a tested example for every idea. `node fork-tools/check-docs.mjs` checks that its code matches the examples.

## Coding agents

[AGENTS.md](AGENTS.md) has the repository's instructions for coding agents: use `pnpm`, run tests with `pnpm bazel test`, and write tests that are standalone, `OnPush` and zoneless.

## Further reading

- [Building and Testing Angular](contributing-docs/building-and-testing-angular.md)
- [Building with Bazel](contributing-docs/building-with-bazel.md)
- [Coding standards](contributing-docs/coding-standards.md)
- [Commit message guidelines](contributing-docs/commit-message-guidelines.md)
- [Debugging tips](contributing-docs/debugging-tips.md)
- [Branches and versioning](contributing-docs/branches-and-versioning.md)
