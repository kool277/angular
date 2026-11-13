# Easy Angular

A guide to Angular for people who know some HTML, CSS and JavaScript, and have never used Angular
or TypeScript. It explains one idea at a time, in short sentences, and every idea has a small
example that you can run and a test that proves it works.

This guide is about **Angular 22.2**. It was written from the official documentation of exactly
that version (the `adev/` folder of this repository at tag `v22.2.6`). Where it says less than the
official documentation, each chapter links to the right page on [angular.dev](https://angular.dev).

## Start here

1. Read the chapters in order. Each chapter only uses ideas from the chapters before it.
2. Do the "Try it yourself" exercise at the end of each chapter before you open the solution.
3. When you meet a word you don't know, look in the [glossary](glossary.md).
4. When you see an error message, look in [errors](errors.md).
5. Once you know the basics, the [cheat sheet](cheat-sheet.md) helps you remember the syntax.

## The learning path

**Part 1. The basics**

1. [What Angular is](01-what-is-angular.md)
2. [Install Angular and make your first app](02-install-and-first-app.md)
3. [The TypeScript you need](03-typescript-you-need.md)
4. [Components](04-components.md)
5. [Templates and binding](05-templates-and-binding.md)
6. [Control flow: @if, @for, @switch](06-control-flow.md)
7. [Signals](07-signals.md)
8. [Inputs, outputs and model](08-inputs-outputs-model.md)

**Part 2. Building real pages**

9. [Styling components](09-styling.md)
10. [Pipes](10-pipes.md)
11. [Directives](11-directives.md)
12. [Content projection and queries](12-content-projection-and-queries.md)
13. [Lifecycle](13-lifecycle.md)
14. [Services and dependency injection](14-services-and-dependency-injection.md)

**Part 3. A complete app**

15. [Routing](15-routing.md)
16. [Forms](16-forms.md)
17. [HTTP and async data](17-http-and-async-data.md)
18. [RxJS interop](18-rxjs-interop.md)
19. [Testing](19-testing.md)

**Part 4. Going further**

20. [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md)
21. [Server rendering and hydration](21-server-rendering-and-hydration.md)
22. [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md)
23. [Animations](23-animations.md)
24. [Internationalization (i18n)](24-i18n.md)
25. [Security](25-security.md)
26. [Build, configure, deploy and update](26-build-configure-deploy-update.md)
27. [Smaller topics](27-smaller-topics.md)

[COVERAGE.md](COVERAGE.md) shows which official page each chapter explains.

## How every chapter works

Every chapter has the same ten parts:

1. **Before this chapter**: what you should already know.
2. **In one sentence**: what the chapter is about.
3. **Why you need it**: the problem it solves.
4. **Smallest example**: a complete example, with every line explained.
5. **How it works**: step by step, often with a diagram.
6. **A realistic example**: the idea in a small real feature.
7. **Common mistakes**: wrong code, the exact error message, and the fix.
8. **Try it yourself**: an exercise and its solution.
9. **Remember**: the most important points.
10. **Read more**: links to the official documentation.

Every piece of correct code in the guide is part of a small app in the [`examples/`](examples/)
folder next to this page, and that app's tests prove that the code works. If you open a chapter's
`.md` file in a text editor, you see a line like `<!-- example: src/app/07-signals/counter/counter.ts -->`
above each code block: it names the file in `examples/` that the code comes from. Code marked as
wrong in part 7 has no file, because it does not work.

## Run the examples

The examples are a normal Angular app, made with the Angular CLI 22.2, in the `examples/` folder
next to this page. You need Node.js (a version from [chapter 2](02-install-and-first-app.md)) and
npm. In a terminal, go to the folder of this page, then:

```shell
cd examples
npm install
npx ng test --watch=false     # runs the tests of every example
npx ng serve                  # opens the demo app on http://localhost:4200
```

To run the tests of one chapter only:

```shell
npx ng test --watch=false --include='src/app/07-signals/**/*.spec.ts'
```

Each chapter's examples are in `src/app/<chapter>/`, for example `src/app/07-signals/`. The demo
app has a page that links to the demos of every chapter (routing has no demo page: its examples
set up their own routes, so run its tests instead).

(You can skip this until [chapter 19](19-testing.md).) The examples set `"isolate": true` for
`ng test` in their `angular.json`. Some tests change things that all tests share, such as the clock
or the window size. With this setting each test file runs on its own, so one file cannot disturb
another.

## For the authors of this guide

This section is for people who change the guide, not for readers. The guide lives in the
`easy-docs/` folder of a fork of the Angular repository. From the root of that repository:

```shell
node fork-tools/check-docs.mjs
```

It fails when a code block differs from its example file, when a relative link is broken, or when a
chapter lacks one of the ten parts. The tests in `examples/` prove what the chapters say. They pass
on stock Angular 22.2.6 and on the fork's own build of Angular (see `FORK.md` in the root of the
repository).
