# Using this fork

`kool277/angular` is a fork of [angular/angular](https://github.com/angular/angular), the source code of the Angular framework. It has no changes of its own: apart from this guide, its `main` branch follows upstream's `main`. Use it to build Angular from source, experiment with changes, and send pull requests to Angular.

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

| Tool    | Version | Where it's set                                                                                                  |
| ------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| Node.js | 24.22.2 | `.nvmrc`, which `nvm install` and `nvm use` read                                                                |
| pnpm    | 12.16.1 | `packageManager` in `package.json`; npm and Yarn refuse to install                                              |
| Bazel   | 8.8.2   | `.bazelversion`. You don't install it yourself: `pnpm install` provides bazelisk, which you run as `pnpm bazel` |

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

## Coding agents

[AGENTS.md](AGENTS.md) has the repository's instructions for coding agents: use `pnpm`, run tests with `pnpm bazel test`, and write tests that are standalone, `OnPush` and zoneless.

## Further reading

- [Building and Testing Angular](contributing-docs/building-and-testing-angular.md)
- [Building with Bazel](contributing-docs/building-with-bazel.md)
- [Coding standards](contributing-docs/coding-standards.md)
- [Commit message guidelines](contributing-docs/commit-message-guidelines.md)
- [Debugging tips](contributing-docs/debugging-tips.md)
- [Branches and versioning](contributing-docs/branches-and-versioning.md)
