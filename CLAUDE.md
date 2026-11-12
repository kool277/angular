# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## This fork

`kool277/angular` is a fork of `angular/angular`. Its `main` has no code changes of its own; branches named `fix/...` are an Angular release tag plus fixes listed in [FIXES.md](FIXES.md), with tools in `fork-tools/` and a beginner guide in `easy-docs/`. [FORK.md](FORK.md) explains how to build it, put an app on it, keep it in sync and send changes upstream. In short:

- Start changes meant for Angular from `upstream/main` (run `git fetch upstream` first; this clone hasn't fetched it), and keep fork-only files such as `FORK.md` and this file out of them.
- Keep fork-only work in new files (`FORK.md`, `CLAUDE.md`, `FIXES.md`, `fork-tools/`, `easy-docs/`); never edit `adev/`, `.github/` or `CHANGELOG.md` for it. A fix commit holds only framework code and its test, and no issue references (they go in FIXES.md).
- `public-api:check` and `symbol-extractor:check` need a terminal: without one, run them as `script -qec "pnpm public-api:check" /dev/null`. `pnpm ng-dev format changed` also checks untracked files; use `pnpm ng-dev format files --check <files>` for a commit's files.
- In a fork, `gh pr create` targets `angular/angular` by default. Pass `--repo kool277/angular` for a pull request inside the fork, and only open one on `angular/angular` when asked to.

## Commands

| Task                                                  | Command                                                                |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Install dependencies (pnpm only; npm and Yarn refuse) | `pnpm install`                                                         |
| Build all packages into `dist/packages-dist`          | `pnpm build`                                                           |
| Build one package                                     | `pnpm bazel build packages/core`                                       |
| Test one package, or one suite                        | `pnpm test //packages/core/...`, `pnpm test //packages/core/test:test` |
| Test in a browser (Karma)                             | `pnpm test packages/core/test:test_web`                                |
| Debug a test                                          | `pnpm bazel test packages/core/test:test --config=debug`               |
| Lint and check formatting                             | `pnpm lint`                                                            |
| Format the files you changed                          | `pnpm ng-dev format changed`                                           |
| Check, or accept, public API changes                  | `pnpm public-api:check`, `pnpm public-api:update`                      |
| Check, or accept, changes to bundled runtime symbols  | `pnpm symbol-extractor:check`, `pnpm symbol-extractor:update`          |
| Check for circular imports                            | `pnpm ts-circular-deps:check`                                          |
| Try changes in an app                                 | `pnpm dev` (the `dev-app/` project)                                    |

Node.js comes from `.nvmrc`, pnpm from `packageManager` in `package.json`, and Bazel from `.bazelversion` through bazelisk.

Commit messages use `<type>(<scope>): <summary>`, where the scope is a package or area such as `core`, `compiler` or `router`. See `contributing-docs/commit-message-guidelines.md`.

## Architecture

- **Compiler, `packages/compiler/`.** It parses templates (`src/ml_parser`, `src/expression_parser`, `src/template`) and generates the code that components run (`src/render3`). It has no TypeScript dependency, so it serves both ahead-of-time and just-in-time compilation.
- **Compiler CLI, `packages/compiler-cli/`.** `ngc` and `ngtsc`, the Angular compiler built on the TypeScript compiler. `src/ngtsc` holds decorator analysis (`annotations`), template type-checking (`typecheck`), incremental compilation (`incremental`) and the transforms that emit code (`transform`).
- **Runtime, `packages/core/`.** `src/render3` is the runtime that compiled templates call: `instructions/`, its data structures in `interfaces/`, and JIT compilation in `jit/`. `src/render3/CODE_GEN_API.md` describes the contract between the compiler's output and the runtime. `primitives/` holds building blocks with no Angular dependencies, such as `signals`, `di` and `event-dispatch`.
- **Other packages.** `common`, `forms`, `router`, `platform-browser`, `platform-server`, `ssr` and the others build on `core`. Each package has its tests under `test/`, and `packages/core/test/acceptance` holds the runtime's acceptance tests.
- **Bazel.** Every package and test suite is a Bazel target declared in a `BUILD.bazel` file, using macros from `tools/defaults.bzl` such as `ng_project` and `ng_package`.
- **Goldens.** `goldens/public-api` records each package's public API, and an `api_golden_test` target fails when it changes. The apps in `packages/core/test/bundling` record which runtime symbols survive tree-shaking, so a change to `core` can fail them too. Only run `pnpm public-api:update` or `pnpm symbol-extractor:update` for an intended change.
- **Outside `packages/`.** `adev/` is the angular.dev site, `devtools/` the browser extension, `vscode-ng-language-service/` the VS Code extension, and `integration/` end-to-end tests that each build a complete app.

## Upstream agent guides

`.agent/` holds Angular's own guides for coding agents, which Claude Code doesn't load by itself. Read the matching one before starting:

- `packages/core`: `.agent/skills/reference-core/SKILL.md`
- `packages/compiler-cli`: `.agent/skills/reference-compiler-cli/SKILL.md`
- `packages/forms/signals`: `.agent/skills/reference-signal-forms/SKILL.md`
- Docs in `adev/`: `.agent/skills/adev-writing-guide/SKILL.md`
- Reviewing a pull request: `.agent/skills/pr_review/SKILL.md`
- Fixing flaky tests: `.agent/workflows/fix-flaky-tests.md`
