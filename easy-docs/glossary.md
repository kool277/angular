# Glossary

Every new word of the guide, in alphabetical order. Each entry links to the chapter that
explains it first. Symbols such as `@` and `$` are ignored in the order.

[A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [J](#j) · [K](#k) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [Q](#q) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v) · [W](#w) · [X](#x) · [Z](#z)

## A

- **`AbortSignal`**: A browser object that says "this work is not needed anymore". A resource gives one to its loader so old work can stop. See [HTTP and async data](17-http-and-async-data.md#resource-any-async-work-as-signals).
- **abstract class**: A class written with `abstract class Name {}`. You cannot create it with `new`; other classes can only extend it. Unlike an interface, it still exists when the app runs, so it can be a DI token. See [Services and dependency injection](14-services-and-dependency-injection.md#lightweight-injection-tokens).
- **`Accept-Language` header**: The list of languages that the browser sends with each request, so a server can choose the language of the answer. See [Internationalization (i18n)](24-i18n.md#deploying-several-languages).
- **accessibility (a11y)**: Making an app usable for everybody, also people who use a keyboard only, a screen reader or a screen magnifier. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#2-in-one-sentence).
- **accessible name**: The text a screen reader says for an element, from its content, its `<label>`, `aria-label` or `aria-labelledby`. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#4-smallest-example).
- **accordion**: A list of sections whose content opens and closes, each with a trigger button. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#accordion).
- **Act, Wait, Assert**: The shape of a zoneless test: change something, `await fixture.whenStable()`, then check the result. See [Testing](19-testing.md#act-wait-assert).
- **`ActivatedRoute`**: A service with everything about the current route: parameters, query parameters, data and a snapshot. See [Routing](15-routing.md#another-way-activatedroute).
- **`afterRenderEffect`**: An effect that runs after rendering, for DOM work that must follow signal changes. See [Lifecycle](13-lifecycle.md#afternextrender-and-aftereveryrender).
- **ahead-of-time (AOT) compiler**: The compiler that turns templates into code at build time; `ng build` uses it by default. See [Security](25-security.md#angular-trusts-templates-not-values).
- **alias**: Another name for an input or output in templates. See [Inputs, outputs and model](08-inputs-outputs-model.md#transforms-and-aliases).
- **Angular**: A framework from Google for building web apps out of components. It is not the same as the older AngularJS (version 1.x). See [What Angular is](01-what-is-angular.md#2-in-one-sentence).
- **Angular Aria**: The package `@angular/aria` with headless directives for accessible widgets such as tabs, accordions, listboxes, menus, trees and grids. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#angular-aria-headless-widgets).
- **Angular CLI**: The `ng` command. It creates projects, generates code, serves, builds and tests the app. See [Install Angular and make your first app](02-install-and-first-app.md#step-2-install-the-angular-cli).
- **Angular Elements**: The package `@angular/elements`; its `createCustomElement()` turns a component into a custom element. See [Smaller topics](27-smaller-topics.md#a-component-as-a-custom-element).
- **Angular Material**: The Angular team's library of ready-made components (buttons, menus, dialogs), built on the CDK. See [Testing](19-testing.md#component-harnesses).
- **AngularJS**: The older framework (version 1.x) that came before Angular. Code with `ng-controller` or `$scope` is AngularJS, not Angular. See [What Angular is](01-what-is-angular.md#angular-is-not-angularjs).
- **`animate.enter` / `animate.leave`**: Template syntax that adds CSS classes while an element appears, or plays them and waits before Angular removes the element. With parentheses, `(animate.leave)="fn($event)"`, they call your function. See [Animations](23-animations.md#4-smallest-example).
- **animation**: A change of how an element looks (place, size, color, transparency) that happens over a short time instead of at once. See [Animations](23-animations.md#2-in-one-sentence).
- **`AnimationCallbackEvent`**: The `$event` of `(animate.enter)` and `(animate.leave)`: the element as `target` and the function `animationComplete()`. See [Animations](23-animations.md#6-a-realistic-example).
- **any**: A type that turns type checking off for a value. Avoid it. See [The TypeScript you need](03-typescript-you-need.md#basic-types).
- **API**: The set of URLs that a server offers to programs, for example `/api/teas`. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **app initializer**: A function registered with `provideAppInitializer` that Angular runs, and waits for, while the app starts. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#one-build-for-every-server-runtime-configuration).
- **ARIA**: HTML attributes for assistive technology: `role` says what an element is, `aria-*` attributes give its name, state and relations. They change nothing on the screen. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#4-smallest-example).
- **arrow function**: A short function written with `=>`, such as `(n: number) => n * 2`. It keeps the `this` of the code around it. See [The TypeScript you need](03-typescript-you-need.md#arrow-functions).
- **assertion**: A check with `expect(value)` and a matcher; the test fails if it is not true. See [Testing](19-testing.md#4-smallest-example).
- **assistive technology**: Programs and devices that help people with disabilities use a computer, such as screen readers. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#3-why-you-need-it).
- **asynchronous**: Work whose result arrives later, such as a server answer. The page must show something while it waits. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **asynchronous validation**: A check whose answer arrives later, for example from a server. While it runs, the field is `pending()`. See [Forms](16-forms.md#asynchronous-validation-is-the-name-free).
- **attribute binding**: `[attr.name]="expression"`: sets an HTML attribute; `null` or `undefined` removes it. See [Templates and binding](05-templates-and-binding.md#attribute-binding).
- **attribute directive**: A directive that changes how an element looks or behaves, switched on with an attribute such as `<p appHighlight>`. See [Directives](11-directives.md#4-smallest-example).
- **attribute selector**: A selector such as `button[app-delete-button]` that matches elements by an attribute, so the component can be a native element like `<button>`. See [Components](04-components.md#selectors).

## B

- **`beforeEach` / `afterEach`**: Vitest globals. `beforeEach(fn)` runs `fn` before every test in the `describe` group, `afterEach(fn)` after every test; use them for shared set-up and clean-up. See [Testing](19-testing.md#the-tools).
- **binding**: A connection between the template and the class. Angular keeps the page in sync with it. See [Templates and binding](05-templates-and-binding.md#3-why-you-need-it).
- **block**: A piece of template that starts with `@`, a name and sometimes a condition, followed by content in `{ }`. Blocks are not HTML elements and do not appear in the page. See [Control flow: @if, @for, @switch](06-control-flow.md#blocks).
- **blocking / non-blocking resource**: A blocking route resource makes the router wait for the data before it opens the page; `nonBlocking(...)` opens the page at once and passes the whole resource. See [HTTP and async data](17-http-and-async-data.md#route-resources-load-the-data-of-a-page-with-the-router).
- **body**: The data inside a request or response, for example the new tea sent with POST. See [HTTP and async data](17-http-and-async-data.md#sending-data-post).
- **bootstrapping**: Starting the app. `bootstrapApplication(App, appConfig)` creates the root component and puts it into `index.html`. See [Install Angular and make your first app](02-install-and-first-app.md#how-the-app-starts).
- **breakpoint**: The line where a debugger stops the code. See [Testing](19-testing.md#debugging-tests).
- **browser provider**: A package, such as `@vitest/browser-playwright`, that starts a real browser for Vitest when you run `ng test --browsers=...`. See [Testing](19-testing.md#running-tests).
- **bubble (event bubbling)**: Many DOM events, such as `click`, are also reported to the parent elements of the element where they happened, up to the top of the page. Custom events made with `output()` do not bubble. See [Inputs, outputs and model](08-inputs-outputs-model.md#outputs).
- **budget**: A size limit in `angular.json`; the build warns or fails when a part of the app is too big. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#budgets).
- **build (production build)**: Turning the source code into the small files that users download. `ng build` writes them into `dist/`. See [Install Angular and make your first app](02-install-and-first-app.md#what-ng-build-does).
- **build configuration**: A named set of settings, such as `production` or `development`, chosen with `--configuration`. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#build-configurations).
- **build server**: A computer that builds and tests your code each time a new version of it is saved, without a person watching. See [Testing](19-testing.md#running-tests).
- **bundler**: A tool that joins many source files into a few small files for the browser. See [Install Angular and make your first app](02-install-and-first-app.md#3-why-you-need-it).
- **`By`**: A helper from `@angular/platform-browser` for tests: `By.css('p')` finds elements by CSS selector, `By.directive(X)` finds elements that have the directive or component `X`. See [Testing](19-testing.md#testbed-and-componentfixture).

## C

- **callback**: A function passed to another function, which calls it later, such as the arrow function in `items.map((item) => item.name)`. See [The TypeScript you need](03-typescript-you-need.md#arrow-functions).
- **camelCase**: A way to write names of several words: the first word starts with a small letter, every next word with a capital letter, and there are no spaces (`fileSize`). Pipe names use it. See [Pipes](10-pipes.md#writing-your-own-pipe).
- **`cdkDropList` / `cdkDrag`**: CDK directives for a list that accepts dropped items and for an item that can be dragged. See [Smaller topics](27-smaller-topics.md#drag-and-drop-with-the-cdk).
- **CDN**: A network of servers around the world that sends files from a place near the user. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#deploying-a-static-app).
- **CDN (content delivery network)**: A network of servers that deliver files such as images and scripts quickly to users around the world. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngoptimizedimage-images-in-the-right-order-and-size).
- **change detection**: The work Angular does to find out what changed and update the page. Components use the `OnPush` strategy by default. See [Components](04-components.md#more-component-settings).
- **child route**: A route inside the `children` of another route. Its page appears in the parent component's own `<router-outlet>`. Also called a nested route. See [Routing](15-routing.md#child-routes-pages-inside-pages).
- **chunk**: A separate small JavaScript file that the build makes for lazy-loaded code. See [Routing](15-routing.md#lazy-loading-load-a-page-only-when-it-is-needed).
- **class**: A plan for creating objects with fields and methods. Every Angular component is a class. See [The TypeScript you need](03-typescript-you-need.md#classes).
- **class binding / style binding**: `[class.name]`, `[class]`, `[style.prop.unit]` and `[style]`: add or remove CSS classes and set style properties. See [Templates and binding](05-templates-and-binding.md#class-and-style-bindings).
- **CLI**: Command-line interface: a program you use by typing commands in a terminal. Angular's CLI is the `ng` command. See [What Angular is](01-what-is-angular.md#angular-at-a-glance).
- **client**: The browser (or another program) that asks a server for pages and data. See [Server rendering and hydration](21-server-rendering-and-hydration.md#3-why-you-need-it).
- **client-side rendering (CSR)**: Making the HTML in the browser after the JavaScript has loaded. It is Angular's default. See [Server rendering and hydration](21-server-rendering-and-hydration.md#3-why-you-need-it).
- **CLS (Cumulative Layout Shift)**: How much the page jumps while it loads, for example when an image arrives and pushes text down. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#3-why-you-need-it).
- **code coverage**: A report of which lines of code the tests ran (`ng test --coverage`). See [Testing](19-testing.md#code-coverage).
- **cold Observable**: An Observable that does nothing until someone subscribes, and starts again for each subscriber. `HttpClient` returns cold Observables. See [HTTP and async data](17-http-and-async-data.md#httpclient-requests-in-a-service).
- **commit**: One saved version of your files in Git. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#updating-angular).
- **compiler**: A program that reads code and writes other code. The TypeScript compiler checks types and turns `.ts` files into JavaScript. See [The TypeScript you need](03-typescript-you-need.md#5-how-it-works).
- **component**: One part of the screen. It has a template (HTML), a class (TypeScript) and a selector (its tag name). See [What Angular is](01-what-is-angular.md#a-component-is-template-plus-class).
- **Component Dev Kit (CDK)**: The package `@angular/cdk` with building blocks such as drag and drop, without a visual design. See [Testing](19-testing.md#component-harnesses).
- **component harness**: A class from `@angular/cdk/testing` that knows how to use one component, so tests call methods like `increment()` instead of searching the HTML. See [Testing](19-testing.md#component-harnesses).
- **component input binding**: The router feature `withComponentInputBinding()`. It writes route parameters, query parameters and route data into inputs with the same name. See [Routing](15-routing.md#route-parameters-one-route-for-many-pages).
- **component tree**: The structure of an app: the root component uses child components, which use their own children. See [What Angular is](01-what-is-angular.md#an-app-is-a-tree-of-components).
- **computed signal**: A read-only signal whose value is calculated from other signals with `computed()`. It is lazy and remembers its result. See [Signals](07-signals.md#computed-values-made-from-other-signals).
- **constructor**: The method of a class that runs once when an object is created. See [The TypeScript you need](03-typescript-you-need.md#classes).
- **content (of a component)**: The HTML that the parent writes between the component's tags. It belongs to the parent. See [Content projection and queries](12-content-projection-and-queries.md#content-and-view).
- **content projection**: Putting HTML that a parent writes between a component's tags into a place in the component's template. See [Content projection and queries](12-content-projection-and-queries.md#2-in-one-sentence).
- **Content Security Policy (CSP)**: Rules the server sends in a header that tell the browser which scripts and styles it may run. See [Security](25-security.md#content-security-policy-csp).
- **control flow block**: A part of a template that starts with `@` (`@if`, `@for`, `@switch`) and decides which content Angular puts into the page. See [Control flow: @if, @for, @switch](06-control-flow.md#2-in-one-sentence).
- **cookie**: A small piece of text that a site stores in the browser. The browser sends it back with every request to that site, which is why CSRF attacks work. See [Security](25-security.md#attacks-through-http).
- **Core Web Vitals**: Measurements by Google of how fast and stable a page feels, for example LCP and CLS. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#3-why-you-need-it).
- **CORS (Cross-Origin Resource Sharing)**: The rules that decide whether a page from one domain may call an API on another domain; the API server must allow it with special headers. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#deploying-a-static-app).
- **crawler**: A program of a search engine that reads web pages to put them into the search results. See [Server rendering and hydration](21-server-rendering-and-hydration.md#3-why-you-need-it).
- **cross-field validation**: A rule on one field that also reads another field, for example "the two passwords are the same". See [Forms](16-forms.md#cross-field-validation-two-passwords).
- **cross-site request forgery (CSRF, XSRF)**: An attack where another site sends requests to your server with the user's cookies. `HttpClient` helps by copying the `XSRF-TOKEN` cookie into a header. See [Security](25-security.md#attacks-through-http).
- **cross-site script inclusion (XSSI)**: An old attack that loads a JSON API as a script; `HttpClient` removes the protective `)]}',` prefix. See [Security](25-security.md#attacks-through-http).
- **cross-site scripting (XSS)**: An attack where someone gets their own JavaScript to run in your page. See [Security](25-security.md#3-why-you-need-it).
- **CSS custom property**: A CSS variable such as `--i`, set with `[style.--i]` and read with `var(--i)`. See [Animations](23-animations.md#6-a-realistic-example).
- **CSS reset**: A set of global CSS rules that removes the browser's own default margins and styles, so that every browser starts the same. See [Styling components](09-styling.md#global-styles).
- **CSS transition**: A CSS feature that animates a property from its old value to its new value when it changes, such as `transition: opacity 300ms`. See [Animations](23-animations.md#two-kinds-of-css-animation).
- **custom control**: Your own component that works with `[formField]`, because it has a `value` model (`FormValueControl`) or a `checked` model (`FormCheckboxControl`). See [Forms](16-forms.md#custom-controls).
- **custom element (web component)**: An HTML tag defined with JavaScript through a browser standard; Angular Elements makes one from a component. See [Smaller topics](27-smaller-topics.md#a-component-as-a-custom-element).
- **custom ID**: A fixed name for a text to translate, written after `@@`, such as `@@homeTitle`. See [Internationalization (i18n)](24-i18n.md#marking-text-and-its-metadata).
- **CUSTOM_ELEMENTS_SCHEMA**: A schema that tells Angular to allow unknown elements with a hyphen in a component's template. See [Components](04-components.md#more-component-settings).

## D

- **`data:` URL**: A file, such as a small image, written as text directly in an attribute, for example `data:image/png;base64,...`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngoptimizedimage-images-in-the-right-order-and-size).
- **`debounceTime`**: An RxJS operator that waits until values have stopped for a given time, then sends the last one. See [RxJS interop](18-rxjs-interop.md#signals-and-rxjs-together-a-search-box).
- **debouncing**: Waiting until a value has stopped changing for some time before you react to it. Angular's `debounced` does this for signals (experimental). See [Signals](07-signals.md#debounced-wait-until-a-value-stops-changing).
- **`DebugElement`**: Angular's wrapper around an element in a test (`fixture.debugElement`). Its `query(By.css(...))` finds child elements; `.nativeElement` is the real element. See [Testing](19-testing.md#testbed-and-componentfixture).
- **debugger**: A tool that stops the code at a line you choose and shows the values of all variables there. See [Testing](19-testing.md#debugging-tests).
- **decorator**: A label that starts with `@` and sits above a class, such as `@Component({...})`. It is a function that attaches extra information to the class. See [What Angular is](01-what-is-angular.md#4-smallest-example).
- **decorator input/output (`@Input`, `@Output`)**: The older way to declare inputs and outputs with decorators on class fields and `EventEmitter`. See [Inputs, outputs and model](08-inputs-outputs-model.md#in-older-code-input-and-output).
- **default value**: A value a parameter gets when the caller leaves it out, such as `times = 2`. See [The TypeScript you need](03-typescript-you-need.md#optional-properties-and-parameters).
- **defense in depth**: Several layers of protection, so one failure does not open the app to attack. See [Security](25-security.md#content-security-policy-csp).
- **`@defer` block (deferrable view)**: A part of a template whose components, directives and pipes are loaded in a separate chunk, later, when a trigger fires. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#4-smallest-example).
- **`DeferBlockBehavior` / `DeferBlockState`**: Test settings to step through the states of a `@defer` block by hand with `fixture.getDeferBlocks()` and `render(...)`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#testing-defer-blocks).
- **dehydrated**: Server-rendered content that is visible but not yet connected to Angular in the browser. See [Server rendering and hydration](21-server-rendering-and-hydration.md#incremental-hydration-hydrate-triggers).
- **dependency**: Something a class needs but does not create itself, for example a service. See [Services and dependency injection](14-services-and-dependency-injection.md#the-words).
- **dependency (of a signal)**: A signal that a `computed`, an effect or a template read the last time it ran. When it changes, the reader runs again. See [Signals](07-signals.md#computed-values-made-from-other-signals).
- **dependency injection (DI)**: The Angular system that creates the objects a class needs and hands them to it, instead of the class creating them itself. See [Services and dependency injection](14-services-and-dependency-injection.md#2-in-one-sentence).
- **deploying**: Copying the built files to a server so users can open the app. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#deploying-a-static-app).
- **deprecated**: Still works, but will be removed in a later major version; new code should use the replacement. See [Animations](23-animations.md#in-older-code-the-angularanimations-package).
- **`describe` / `it`**: `describe` names a group of tests; `it` is one test. Both are Vitest globals. See [Testing](19-testing.md#4-smallest-example).
- **`DestroyRef`**: An object from `inject(DestroyRef)` whose `onDestroy(fn)` runs `fn` when the component, directive or service is destroyed. See [Lifecycle](13-lifecycle.md#ngondestroy-and-destroyref).
- **destructuring**: Taking properties out of an object into variables of the same name: `({queryParams}) => ...` or `const {email} = value`. It is a short form of `(info) => info.queryParams`. See [Routing](15-routing.md#redirects-and-the-wildcard-route).
- **developer preview**: An Angular feature that works but whose details may still change before it becomes stable. See [Control flow: @if, @for, @switch](06-control-flow.md#boundary-stop-one-broken-part-from-breaking-the-page).
- **development server**: A small web server on your own computer that shows the app while you work and reloads it when you save a file. `ng serve` starts it. See [Install Angular and make your first app](02-install-and-first-app.md#what-ng-serve-does).
- **directive**: A class that adds behavior to an element, such as `NgTemplateOutlet`. Like components, directives go into `imports`. See [Templates and binding](05-templates-and-binding.md#ng-container-and-ng-template) and [Directives](11-directives.md).
- **directive composition API / host directive**: `hostDirectives` in `@Component` or `@Directive` puts other directives on the host element. Their inputs and outputs stay hidden unless listed. See [Directives](11-directives.md#directive-composition-hostdirectives).
- **dirty**: A field is dirty after the user has changed its value at least once. The opposite is pristine. See [Forms](16-forms.md#a-field-and-its-state).
- **disabled reason**: A text that explains why a field is disabled. A `disabled` rule returns it instead of `true`. See [Forms](16-forms.md#hidden-disabled-and-read-only-fields).
- **DOM (Document Object Model)**: The tree of element objects that the browser builds from a page. JavaScript, and Angular, read and change the page through it. See [Components](04-components.md#the-host-element-and-the-view).
- **DOM property**: A property of an element object in the browser, such as `disabled`, `value` or `readOnly`. Its name can differ from the HTML attribute name. See [Templates and binding](05-templates-and-binding.md#property-binding).
- **domain**: The name part of a web address, such as `museum.example`. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#deploying-a-static-app).
- **`DomSanitizer`**: The service from `@angular/platform-browser` that cleans values with `sanitize()` or marks them as trusted with `bypassSecurityTrust...` methods. See [Security](25-security.md#trusting-a-value-on-purpose-domsanitizer).
- **duration / delay / easing**: How long an animation lasts, how long it waits before it starts, and its speed curve (such as `ease-out`). See [Animations](23-animations.md#two-kinds-of-css-animation).

## E

- **eager loading**: Putting a page's code into the first JavaScript file the browser downloads. Every component that the routes import directly is loaded eagerly. See [Routing](15-routing.md#lazy-loading-load-a-page-only-when-it-is-needed).
- **effect**: A function, created with `effect()`, that runs once and again whenever a signal it read changes. Use it only to send values outside Angular. See [Signals](07-signals.md#effect-run-code-when-signals-change).
- **element injector**: The injector of one element with a component or directive. It holds that component's or directive's `providers`. See [Services and dependency injection](14-services-and-dependency-injection.md#hierarchical-injectors).
- **`ElementRef`**: An object that holds a real DOM element in its `nativeElement` property. Get it with `inject(ElementRef)`. See [Directives](11-directives.md#when-you-need-the-real-element-elementref).
- **embedded view**: A piece of page that Angular creates from an `<ng-template>`, for example with `createEmbeddedView`. See [Directives](11-directives.md#structural-directives).
- **`@empty`**: A block after `@for` that is shown when the list has no items. See [Control flow: @if, @for, @switch](06-control-flow.md#empty).
- **end-to-end test**: A test that starts the whole app in a real browser and clicks through it like a user. See [Testing](19-testing.md#component-harnesses).
- **entry point**: The first code that runs when the app starts. In an Angular app it is `src/main.ts`. See [Install Angular and make your first app](02-install-and-first-app.md#how-the-app-starts).
- **environment file**: A file such as `environment.ts` with settings that differ between builds; it is public. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#4-smallest-example).
- **error boundary**: A `@boundary` block around a part of a template. If something inside throws an error, Angular shows the `@error` block instead and the rest of the page keeps working. Developer preview. See [Control flow: @if, @for, @switch](06-control-flow.md#boundary-stop-one-broken-part-from-breaking-the-page).
- **$event**: The browser's event object inside an event binding. See [Templates and binding](05-templates-and-binding.md#event-binding).
- **event binding**: `(event)="statement"`: runs a statement when the element fires the event. See [Templates and binding](05-templates-and-binding.md#event-binding).
- **event replay**: Recording clicks and other events made before hydration is finished, and running them afterwards. On by default with `provideClientHydration()`. See [Server rendering and hydration](21-server-rendering-and-hydration.md#hydration).
- **experimental**: An Angular API that you can try but that may change or be removed. See [Signals](07-signals.md#debounced-wait-until-a-value-stops-changing).
- **export / import**: `export` makes a name usable by other files; `import { name } from './file'` uses it. See [The TypeScript you need](03-typescript-you-need.md#import-and-export).
- **`exportAs` name**: The name under which a directive can be put into a template variable, as in `#delivery="ngAccordionPanel"`. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#accordion).
- **Express**: A popular library for web servers in Node.js; the server that `ng add @angular/ssr` creates uses it. See [Server rendering and hydration](21-server-rendering-and-hydration.md#adding-ssr-to-an-app).
- **extends / override**: `extends` makes a class build on another class; `override` marks a method that replaces the parent's version. See [The TypeScript you need](03-typescript-you-need.md#readonly-private-and-protected).

## F

- **fake timers**: (existing entry; first use is now explained earlier) Vitest's replacement clock (`vi.useFakeTimers()`): time moves only when the test calls `vi.advanceTimersByTime(ms)` or `await vi.advanceTimersByTimeAsync(ms)`. First explained in [RxJS interop](18-rxjs-interop.md#observables-in-two-minutes); in depth in [Testing](19-testing.md#timers-fake-time).
- **`fakeAsync`**: An older zone.js helper that runs a test with a fake clock (`tick`, `flush`). Experimental in Angular 22 and no longer recommended. See [Testing](19-testing.md#in-older-projects-karma-jasmine-and-zonejs-helpers).
- **fallback content**: Content written inside `<ng-content>` that is shown when the parent gives nothing for that slot. See [Content projection and queries](12-content-projection-and-queries.md#fallback-content).
- **fetch**: The browser's own function for sending HTTP requests. Angular's `HttpClient` uses it by default. See [HTTP and async data](17-http-and-async-data.md#resource-any-async-work-as-signals).
- **field**: A variable that belongs to a class, such as `likes = 0;`. A component's template can show its fields. See [What Angular is](01-what-is-angular.md#6-a-realistic-example).
- **field metadata**: Extra information that a schema attaches to a field, read with `field().metadata(key)`. See [Forms](16-forms.md#field-metadata).
- **field state**: What you get when you call a field, such as `signupForm.email()`: signals like `value()`, `valid()`, `errors()`, `touched()` and `dirty()`. See [Forms](16-forms.md#a-field-and-its-state).
- **field tree**: The object that `form()` returns: a field for the whole form, with a field for every property inside it. See [Forms](16-forms.md#model-form-and-field).
- **file replacement**: A build setting that swaps one source file for another, used for environment files. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#4-smallest-example).
- **fill mode**: `NgOptimizedImage` with the `fill` attribute: the image fills its positioned parent element, like a background picture. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngoptimizedimage-images-in-the-right-order-and-size).
- **fire (an event)**: An element "fires" an event when the event happens on it, for example a button fires `click` when it is clicked. See [Templates and binding](05-templates-and-binding.md#event-binding).
- **fixture (`ComponentFixture`)**: The handle that `TestBed.createComponent` returns: the component instance, its HTML and `whenStable()`. See [Testing](19-testing.md#testbed-and-componentfixture).
- **focus**: The element that receives keyboard input right now. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#focus-and-live-regions).
- **form model**: The writable signal that holds the data of a Signal Form, such as `signal({ email: '' })`. Typing in the inputs changes it. See [Forms](16-forms.md#model-form-and-field).
- **`[formField]`**: The binding of the `FormField` directive. It connects an input (or a custom control) with a field, in both directions. See [Forms](16-forms.md#4-smallest-example).
- **`FormRoot`**: The directive behind `<form [formRoot]="myForm">`. It stops the page reload and runs the form's `submission.action` on submit. See [Forms](16-forms.md#submitting-the-form).
- **framework**: A ready-made structure for your code. You write the parts that are special to your app, and the framework does the common work and calls your code at the right moment. See [What Angular is](01-what-is-angular.md#3-why-you-need-it).

## G

- **generic**: A type or function that takes a type as a parameter in `< >`, such as `Array<string>` or `signal<number>(0)`. See [The TypeScript you need](03-typescript-you-need.md#generics).
- **GET / POST**: HTTP methods. GET asks for data; POST sends new data to save. PUT, PATCH and DELETE replace, change and remove data. See [HTTP and async data](17-http-and-async-data.md#sending-data-post).
- **getter**: A method written with `get` (`get hasListeners()`). Other code reads it like a field, without `()`, but the function runs on every read. See [RxJS interop](18-rxjs-interop.md#takeuntildestroyed-stop-a-subscription-with-the-component).
- **Git**: A tool that saves versions of your files, so you can see and undo changes; `ng new` sets it up. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#updating-angular).
- **global (in tests)**: A name you can use without an import. In Vitest tests, `describe`, `it`, `expect` and `vi` are globals. See [RxJS interop](18-rxjs-interop.md#observables-in-two-minutes).
- **global event target**: The prefixes `document:`, `window:` and `body:` in a host listener, such as `'(document:click)'`, which listen on the whole page instead of the host element. See [Directives](11-directives.md#6-a-realistic-example).
- **global styles**: CSS in `src/styles.css` that applies to the whole app. See [Styling components](09-styling.md#global-styles).
- **guard**: A function the router calls before it opens, leaves or matches a route (`CanActivateFn`, `CanDeactivateFn`, `CanMatchFn`, `CanActivateChildFn`). It allows, blocks or redirects. See [Routing](15-routing.md#guards-who-may-open-or-leave-a-page).

## H

- **harness loader**: The object from `TestbedHarnessEnvironment.loader(fixture)` that finds harnesses with `getHarness` and `getAllHarnesses`. See [Testing](19-testing.md#component-harnesses).
- **header**: Extra information that travels with a request or response, such as `Authorization`. Set it with the `headers` option. See [HTTP and async data](17-http-and-async-data.md#url-parameters-headers-and-other-options).
- **headless**: Giving behavior (roles, states, keyboard, focus) but no HTML structure and no styles; you write those yourself. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#angular-aria-headless-widgets).
- **hierarchical injectors**: The tree of injectors. `inject()` starts at the asking element and walks up to the root; the first provider found wins. See [Services and dependency injection](14-services-and-dependency-injection.md#hierarchical-injectors).
- **:host**: A CSS selector, used in a component's styles, that matches the component's host element. See [Components](04-components.md#settings-for-the-host-element).
- **host (setting)**: The `@Component` setting that adds attributes, bindings and listeners to the host element. See [Components](04-components.md#settings-for-the-host-element).
- **host binding**: A binding or event listener in a component's `host` setting that applies to its host element. See [Templates and binding](05-templates-and-binding.md#bindings-on-the-host-element).
- **host element**: The element that matches a component's selector. Angular renders the component's template inside it. See [Components](04-components.md#the-host-element-and-the-view).
- **HTTP**: The protocol that browsers and apps use to talk to servers: the app sends a request, the server sends a response. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **HTTP transfer cache**: With hydration on, HTTP answers received on the server are stored in the page and reused by the browser during hydration. See [Server rendering and hydration](21-server-rendering-and-hydration.md#waiting-for-data-and-transfer-state).
- **`HttpClient`**: The Angular service that sends HTTP requests (`get`, `post`, `put`, `patch`, `delete`). Its methods return Observables. See [HTTP and async data](17-http-and-async-data.md#httpclient-requests-in-a-service).
- **`HttpErrorResponse`**: The error object you get when a request fails. `status` is the status code (`0` for no connection), `error` is the body the server sent. See [HTTP and async data](17-http-and-async-data.md#handling-errors).
- **`httpResource`**: A resource that loads data over HTTP and gives `value()`, `isLoading()`, `error()` and `status()` as signals. Use it for reading data. See [HTTP and async data](17-http-and-async-data.md#httpresource-in-depth).
- **`HttpTestingController`**: The test service that finds open requests (`expectOne`, `match`, `expectNone`), answers them (`flush`, `error`) and checks that none are left (`verify`). See [HTTP and async data](17-http-and-async-data.md#testing-http-code-without-a-network).
- **hybrid rendering**: Using CSR, SSR and SSG in one app, chosen per route with `RenderMode` in `app.routes.server.ts`. See [Server rendering and hydration](21-server-rendering-and-hydration.md#three-ways-to-render-csr-ssr-and-ssg).
- **hydration**: The browser part of SSR: Angular reuses the HTML from the server, connects it to its components and adds event listeners, instead of drawing the page again. See [Server rendering and hydration](21-server-rendering-and-hydration.md#hydration).

## I

- **`i18n` attribute**: Marks the text of an element for translation; `i18n-title` and similar mark an attribute. See [Internationalization (i18n)](24-i18n.md#4-smallest-example).
- **ICU expression**: A text with cases, such as `{count, plural, =0 {...} other {...}}` or `{kind, select, ...}`. See [Internationalization (i18n)](24-i18n.md#plural-and-select-icu-expressions).
- **image loader**: A function that builds the URL of an image for an image server, given the source and the wanted width. Provided with `IMAGE_LOADER`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#6-a-realistic-example).
- **implements**: `class X implements SomeInterface` promises that the class has everything the interface asks for. TypeScript checks the promise and shows an error if a method is missing or wrong. See [Pipes](10-pipes.md#writing-your-own-pipe).
- **implicit variable**: A ready-made name inside `@for`, such as `$index`, `$count`, `$first`, `$last`, `$even` and `$odd`. Also called contextual variable. See [Control flow: @if, @for, @switch](06-control-flow.md#implicit-variables).
- **`$implicit`**: The key in a template's context object whose value `let-x` receives when no other name is given. See [Directives](11-directives.md#structural-directives).
- **imports (in @Component)**: The list of components, directives and pipes that a component's template may use. See [Components](04-components.md#using-a-component).
- **impure pipe**: A pipe with `pure: false` that runs on every check of the component. Slower; avoid it. See [Pipes](10-pipes.md#pure-and-impure-pipes).
- **incremental hydration**: Hydrating parts of a server-rendered page later, when a `hydrate` trigger of a `@defer` block fires. See [Server rendering and hydration](21-server-rendering-and-hydration.md#incremental-hydration-hydrate-triggers).
- **`inert`**: An HTML attribute that makes an element and its children unreachable for the mouse, the keyboard and screen readers. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#tabs).
- **`inject()`**: The function that asks the current injector for a dependency. Works only in an injection context. See [Services and dependency injection](14-services-and-dependency-injection.md#where-inject-works-the-injection-context).
- **`@Injectable`**: The older, more flexible decorator for services. With `providedIn: 'root'` it works like `@Service()`. See [Services and dependency injection](14-services-and-dependency-injection.md#service-and-injectable-providedin-root-).
- **`injectAsync`**: Loads a service's code only the first time it is needed and returns a function that gives a `Promise` of the service. See [Services and dependency injection](14-services-and-dependency-injection.md#loading-a-service-only-when-it-is-needed).
- **injection context**: A place where Angular allows functions such as `effect()` and `inject()`, for example a class field initializer or a constructor. See [Signals](07-signals.md#effect-run-code-when-signals-change).
- **`InjectionToken`**: A key for injecting values that are not classes, such as strings, settings objects or functions. See [Services and dependency injection](14-services-and-dependency-injection.md#injectiontoken-inject-something-that-is-not-a-class).
- **injector**: The Angular object that creates dependencies, keeps them and hands them out. Injectors form a tree. See [Services and dependency injection](14-services-and-dependency-injection.md#the-words).
- **input**: Data that a parent passes into a child component, declared with `input()` or `input.required()`. Inputs are read-only signals. See [Inputs, outputs and model](08-inputs-outputs-model.md#inputs).
- **instance**: One object created from a class. Each instance has its own field values. See [The TypeScript you need](03-typescript-you-need.md#classes).
- **interceptor**: A function that sees every HTTP request before it leaves and every response before your code gets it, for example to add a login token. See [HTTP and async data](17-http-and-async-data.md#interceptors-code-that-runs-for-every-request).
- **interface**: A description of the shape of an object: its properties and their types. It produces no JavaScript. See [The TypeScript you need](03-typescript-you-need.md#interfaces-and-type-aliases).
- **interface (lifecycle)**: A TypeScript type such as `OnInit` that a class promises to follow with `implements`, so TypeScript catches a misspelled hook name. See [Lifecycle](13-lifecycle.md#4-smallest-example).
- **internationalization (i18n)**: Preparing an app so that it can show texts and formats for different languages and regions. See [Internationalization (i18n)](24-i18n.md#2-in-one-sentence).
- **`IntersectionObserver`**: A browser feature that tells code when an element becomes visible on the screen; `@defer (on viewport)` uses it. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#triggers-when-the-block-loads).
- **`isDevMode()`**: Returns `true` in development builds and tests, `false` in production builds. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#4-smallest-example).
- **`isPlatformBrowser` / `isPlatformServer`**: Functions from `@angular/common` that take `PLATFORM_ID` and tell whether code runs in the browser or on the server. See [Server rendering and hydration](21-server-rendering-and-hydration.md#code-that-only-works-in-the-browser).

## J

- **jsdom**: A library that imitates a browser inside Node.js, so tests run fast without a real browser. See [Testing](19-testing.md#the-tools).
- **JSON**: A text format for data that looks like JavaScript objects and arrays. `HttpClient` turns it into objects for you. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).

## K

- **Karma / Jasmine**: The older test runner and test library of Angular projects. Their tests look like Vitest tests with small differences. See [Testing](19-testing.md#in-older-projects-karma-jasmine-and-zonejs-helpers).
- **key modifier**: A key name after the event name, such as `(keyup.enter)`, so the listener runs only for that key. See [Templates and binding](05-templates-and-binding.md#event-binding).
- **keyframes (`@keyframes`)**: A CSS rule that lists the steps of an animation, used with the `animation` property. See [Animations](23-animations.md#4-smallest-example).

## L

- **landmark**: One of the main areas of a page, such as the banner, the navigation, the main content or the footer. Screen reader users can jump from one landmark to the next. See [Components](04-components.md#6-a-realistic-example).
- **lazy chunk**: A file of JavaScript that the browser loads only when it is needed; `ng build` lists them under `Lazy chunk files`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#4-smallest-example).
- **lazy loading**: Downloading a page's code only when the user opens it, with `loadComponent` or `loadChildren`. See [Routing](15-routing.md#lazy-loading-load-a-page-only-when-it-is-needed).
- **LCP (Largest Contentful Paint)**: The time until the biggest element on the screen, often a photo or a heading, is shown. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#3-why-you-need-it).
- **LCP image**: The largest image on the first screen of a page. Mark it with `priority` so it loads first. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngoptimizedimage-images-in-the-right-order-and-size).
- **`@let`**: Creates a read-only name for a value inside a template. See [Control flow: @if, @for, @switch](06-control-flow.md#let-give-a-value-a-name-in-the-template).
- **lifecycle**: The steps of a component from its creation to its removal. See [Lifecycle](13-lifecycle.md#2-in-one-sentence).
- **lifecycle hook**: A method with a fixed name, such as `ngOnInit` or `ngOnDestroy`, or a function such as `afterNextRender`, that Angular calls at one step of the lifecycle. See [Lifecycle](13-lifecycle.md#4-smallest-example).
- **lightweight injection token**: A small abstract class used as a token instead of a big component class, so the build can leave the big class out when it is not used. See [Services and dependency injection](14-services-and-dependency-injection.md#lightweight-injection-tokens).
- **`linkedSignal`**: A writable signal that is calculated from other signals and resets when they change. See [Signals](07-signals.md#linkedsignal-a-value-you-can-change-that-resets-with-its-source).
- **listbox**: A list of options from which the user selects one or several. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#listbox).
- **live region**: An element with `aria-live` or `role="status"` whose new text screen readers read aloud without moving the focus. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#focus-and-live-regions).
- **loader**: The async function of a `resource` that returns a Promise of the data. See [HTTP and async data](17-http-and-async-data.md#resource-any-async-work-as-signals).
- **local template variable (`@let`)**: `@let name = expression;` names a value inside a template. It cannot be assigned. See [Templates and binding](05-templates-and-binding.md#template-variables-let-and-ref).
- **locale**: The language and region settings that decide formats such as `1,234.5` or `1 234,5`. Angular's default is `en-US`. See [Pipes](10-pipes.md#parameters).
- **locale data**: Month names, separators and currency symbols of a locale, loaded with `registerLocaleData`. See [Internationalization (i18n)](24-i18n.md#the-locale-and-locale-aware-pipes).
- **locale ID**: A name for a language and region, such as `en-US` or `uz`. See [Internationalization (i18n)](24-i18n.md#the-locale-and-locale-aware-pipes).
- **localization**: Building the version of an app for one language and region. See [Internationalization (i18n)](24-i18n.md#2-in-one-sentence).
- **`$localize`**: A tagged template, written `` $localize`text` ``, that marks a text in TypeScript code for translation. See [Internationalization (i18n)](24-i18n.md#4-smallest-example).
- **locator**: The first argument of a query: a template reference variable name such as `'box'`, or a component or directive class. See [Content projection and queries](12-content-projection-and-queries.md#queries-find-things-in-the-view).
- **login token**: A secret text that a server gives the user after login. Later requests send it, usually in the header `Authorization: Bearer <token>`, so the server knows who asks. `Bearer` is the fixed word in front of it. See [HTTP and async data](17-http-and-async-data.md#interceptors-code-that-runs-for-every-request).
- **long-term support (LTS)**: The second year of support of a major version, with only critical and security fixes. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#updating-angular).

## M

- **matcher**: The method after `expect(x)`, such as `toBe`, `toEqual` or `toHaveBeenCalledWith`. See [Testing](19-testing.md#matchers).
- **matrix parameter**: A rare optional value that belongs to one part of the path, written with `;`, such as `/products;view=grid`. See [Routing](15-routing.md#query-parameters-optional-settings-in-the-url).
- **meaning / description (i18n)**: Notes for the translator in `i18n="meaning|description@@id"`; a meaning also separates texts that look the same. See [Internationalization (i18n)](24-i18n.md#marking-text-and-its-metadata).
- **member**: A field or a method of a class. See [The TypeScript you need](03-typescript-you-need.md#readonly-private-and-protected).
- **metadata**: The settings object passed to a decorator, such as `selector`, `template` and `imports` in `@Component({...})`. See [Components](04-components.md#4-smallest-example).
- **method**: A function that belongs to a class, such as `like() { ... }`. See [What Angular is](01-what-is-angular.md#6-a-realistic-example).
- **microsyntax**: The small language after `*name=` on a structural directive, for example `['admin']; role: role()`. Angular turns each part into an input. See [Directives](11-directives.md#structural-directives).
- **migration (`ng update`)**: A small program that `ng update` runs to change your code for a new version. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#updating-angular).
- **minification / source map**: Minification makes built files smaller; a source map lets developer tools show your original TypeScript. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#build-configurations).
- **model**: An input that the child may also change; the new value goes back to the parent. Declared with `model()`. See [Inputs, outputs and model](08-inputs-outputs-model.md#model-and-two-way-binding).
- **module**: A `.ts` file. Its names are private to the file unless it exports them. See [The TypeScript you need](03-typescript-you-need.md#import-and-export).

## N

- **named outlet**: A `<router-outlet name="...">` for a second area of the screen. Routes with the same `outlet` name show there. See [Routing](15-routing.md#named-outlets-a-second-area-on-the-screen).
- **narrowing**: TypeScript making a type more exact after a check, for example knowing a value is a number inside `if (typeof id === 'number')`. See [The TypeScript you need](03-typescript-you-need.md#union-types).
- **navigation**: One change from one page (URL) to another, started by a link, by code, or by the browser's buttons. See [Routing](15-routing.md#what-happens-when-the-url-changes).
- **ng-container**: An Angular element that groups content without adding an element to the page. See [Templates and binding](05-templates-and-binding.md#ng-container-and-ng-template).
- **`<ng-content>`**: A placeholder in a component's template that marks where projected content goes. It never appears in the page. See [Content projection and queries](12-content-projection-and-queries.md#4-smallest-example).
- **`::ng-deep`**: A deprecated CSS selector part that turns off encapsulation for the rest of a selector. See [Styling components](09-styling.md#ng-deep-only-in-older-code).
- **`NgClass` / `NgStyle`**: Older built-in attribute directives that set classes and styles. New code uses `[class]` and `[style]` bindings. See [Directives](11-directives.md#in-older-code-ngclass-ngstyle-and-ngif).
- **NgComponentOutlet**: A directive from `@angular/common` that shows a component class chosen in code. See [Templates and binding](05-templates-and-binding.md#choosing-a-component-while-the-app-runs).
- **Nginx and Apache**: Two popular web servers. See [Internationalization (i18n)](24-i18n.md#deploying-several-languages).
- **NgModule**: A class with `@NgModule` that groups components, directives and pipes with `declarations`, `imports` and `exports`; the older alternative to standalone components. See [Smaller topics](27-smaller-topics.md#reading-ngmodules-in-older-code).
- **`ngOnChanges` / `SimpleChanges`**: `ngOnChanges` runs each time an input changes and gets a `SimpleChanges` object with `previousValue`, `currentValue` and `firstChange` for each changed input. See [Lifecycle](13-lifecycle.md#ngonchanges-react-to-input-changes).
- **`ngOnDestroy`**: Runs once, right before Angular removes a component or directive. See [Lifecycle](13-lifecycle.md#ngondestroy-and-destroyref).
- **`ngOnInit`**: Runs once, after Angular has set the first input values. See [Lifecycle](13-lifecycle.md#constructor-or-ngoninit).
- **`NgOptimizedImage`**: A directive from `@angular/common`, used with `ngSrc` on `<img>`, that loads images in the best order and size. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngoptimizedimage-images-in-the-right-order-and-size).
- **`ngProjectAs`**: An attribute that makes an element or `<ng-container>` match a slot's selector as if it had that selector. See [Content projection and queries](12-content-projection-and-queries.md#ngprojectas-put-a-group-into-a-slot).
- **NgTemplateOutlet**: A directive from `@angular/common` that shows a template fragment, with an optional context object. See [Templates and binding](05-templates-and-binding.md#ng-container-and-ng-template).
- **Node.js**: A program that runs JavaScript outside the browser. The Angular CLI needs it. See [Install Angular and make your first app](02-install-and-first-app.md#step-1-install-nodejs).
- **non-null assertion (`!`)**: `value!` tells TypeScript the value is not `null` or `undefined`. It checks nothing when the code runs. See [The TypeScript you need](03-typescript-you-need.md#strict-null-checks-and-the--and--operators).
- **nonce**: A random value, new for every response, that marks the scripts and styles a CSP allows; given to Angular with `ngCspNonce` or `CSP_NONCE`. See [Security](25-security.md#content-security-policy-csp).
- **npm**: The Node package manager. It downloads packages and comes with Node.js. See [Install Angular and make your first app](02-install-and-first-app.md#step-1-install-nodejs).
- **npm script**: A short name for a command, defined in `package.json`. `npm start` runs `ng serve`. See [Install Angular and make your first app](02-install-and-first-app.md#the-files-that-ng-new-created).
- **nullish coalescing (`??`)**: `a ?? b` gives `b` if `a` is `null` or `undefined`, otherwise `a`. See [The TypeScript you need](03-typescript-you-need.md#optional-properties-and-parameters).
- **numeric separator**: The `_` inside a number such as `3_450_000`. It only makes the number easier to read; `3_450_000` is the same as `3450000`. See [Pipes](10-pipes.md#6-a-realistic-example).

## O

- **Observable**: A stream of values from the RxJS library. The `async` pipe can show its latest value. See [Pipes](10-pipes.md#async-values-that-arrive-later).
- **`OnPush` / `Eager`**: Change detection strategies. `OnPush` (the default) checks a component only when its inputs, template events or signals changed; `Eager` checks it every time. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#onpush-check-only-the-components-that-changed).
- **operator**: A function such as `map`, `filter`, `debounceTime` or `switchMap` that makes a new Observable from an old one. You chain operators with `pipe`. See [RxJS interop](18-rxjs-interop.md#observables-in-two-minutes).
- **option (command-line option)**: A word after a command that starts with `--` and changes what the command does, such as `--style=css` in `ng new`. See [Install Angular and make your first app](02-install-and-first-app.md#step-3-create-a-project).
- **optional (`?`)**: A property or parameter that may be left out. Its type includes `undefined`. See [The TypeScript you need](03-typescript-you-need.md#optional-properties-and-parameters).
- **optional chaining (`?.`)**: `a?.b` gives `undefined` if `a` is `null` or `undefined`, otherwise `a.b`. See [The TypeScript you need](03-typescript-you-need.md#strict-null-checks-and-the--and--operators).
- **output**: A custom event of a child component, declared with `output<T>()` and fired with `emit(value)`. See [Inputs, outputs and model](08-inputs-outputs-model.md#outputs).
- **`outputFromObservable`**: Creates a component output that fires whenever an Observable gives a value. See [RxJS interop](18-rxjs-interop.md#outputfromobservable-and-outputtoobservable).
- **`outputToObservable`**: Turns a component output into an Observable. See [RxJS interop](18-rxjs-interop.md#outputfromobservable-and-outputtoobservable).

## P

- **package**: A ready-made code library that npm downloads, such as `@angular/core`. See [Install Angular and make your first app](02-install-and-first-app.md#step-1-install-nodejs).
- **PascalCase**: Like camelCase, but the first word starts with a capital letter too (`FileSizePipe`). Class names use it. See [Pipes](10-pipes.md#writing-your-own-pipe).
- **path**: The part of a URL after the domain, such as `about` in `https://shop.uz/about`. In a route it is written without a leading `/`. See [Routing](15-routing.md#3-why-you-need-it).
- **`pathMatch`**: Says if a route path must match the start of the URL (`'prefix'`, the default) or the whole URL (`'full'`). See [Routing](15-routing.md#redirects-and-the-wildcard-route).
- **`PendingTasks`**: A service that tells Angular to wait (stay not stable) until some async work is done, for example before the server sends the page. See [Server rendering and hydration](21-server-rendering-and-hydration.md#waiting-for-data-and-transfer-state).
- **pipe**: A function used in a template with `|` that changes how a value is shown, for example `{{ price | currency }}`. See [Pipes](10-pipes.md#2-in-one-sentence).
- **pipe parameter**: An extra value for a pipe, written after a colon: `date: 'd MMMM y'`. See [Pipes](10-pipes.md#parameters).
- **placeholder (i18n)**: The mark that stands for an interpolation or element inside a text to translate, such as `<x id="INTERPOLATION"/>`. See [Internationalization (i18n)](24-i18n.md#4-smallest-example).
- **`@placeholder` / `@loading` / `@error`**: Sub-blocks of `@defer` that show content before the trigger fires, while the chunk downloads, and when the download fails. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#the-sub-blocks-and-their-timing-options).
- **platform**: The environment an Angular app runs in, for example the browser or the server. `PLATFORM_ID` tells code which one it is. See [Server rendering and hydration](21-server-rendering-and-hydration.md#4-smallest-example).
- **plugin**: An extra part that a tool loads and runs. Tailwind is a plugin for PostCSS. See [Styling components](09-styling.md#tailwind-css).
- **polyfill**: Code loaded before the app that adds something the app needs, such as `@angular/localize/init` for `$localize`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#onpush-check-only-the-components-that-changed).
- **port**: A number that tells which program on a computer should answer a web request. `ng serve` uses port 4200 by default. See [Install Angular and make your first app](02-install-and-first-app.md#step-4-start-the-development-server).
- **PostCSS**: A tool that changes CSS files during the build. Tailwind CSS works through it. See [Styling components](09-styling.md#tailwind-css).
- **`prefers-reduced-motion`**: A CSS media query that is true when the user asked the operating system for less motion. See [Animations](23-animations.md#respect-reduce-motion).
- **prefetching**: Downloading code before it is needed, so that it is ready at once later. In `@defer` you write `prefetch on ...`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#prefetching-download-early-show-later).
- **private**: A word that makes a class member usable only inside the class. In components, use it for members that only the class code needs. See [The TypeScript you need](03-typescript-you-need.md#readonly-private-and-protected).
- **progressive web app (PWA)**: A web app with a service worker and a web app manifest, which users can install like a phone app. See [Smaller topics](27-smaller-topics.md#service-workers).
- **Promise**: A JavaScript object for a result that arrives later. The `async` pipe can show its value. See [Pipes](10-pipes.md#async-values-that-arrive-later).
- **property binding**: `[property]="expression"`: sets a DOM property (or an input of a component) to the value of an expression. See [Templates and binding](05-templates-and-binding.md#property-binding).
- **protected**: A word that makes a class member usable inside the class and its subclasses. In components, Angular's style guide uses it for members that the template reads. See [The TypeScript you need](03-typescript-you-need.md#readonly-private-and-protected).
- **`provideHttpClient()`**: The provider function that configures `HttpClient`, for example with `withInterceptors([...])`. Not needed for plain requests. See [HTTP and async data](17-http-and-async-data.md#providehttpclient-configure-http).
- **`provideHttpClientTesting()`**: A test provider that replaces the network with a test backend, where requests wait for the test to answer them. See [HTTP and async data](17-http-and-async-data.md#testing-http-code-without-a-network).
- **provider**: An entry in a list of things Angular can give to components, such as `provideRouter(routes)` in `app.config.ts`. See [Install Angular and make your first app](02-install-and-first-app.md#the-files-that-ng-new-created).
- **proxy (dev server)**: A setting that makes `ng serve` forward some requests, such as `/api`, to another server. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#ng-serve-options).
- **public**: A class member without `private` or `protected`; any code can use it. See [The TypeScript you need](03-typescript-you-need.md#readonly-private-and-protected).
- **pure pipe**: A pipe that runs again only when its input is a new value. Pipes are pure by default. See [Pipes](10-pipes.md#pure-and-impure-pipes).

## Q

- **query**: A signal, made with `viewChild`, `viewChildren`, `contentChild` or `contentChildren`, that holds the elements, components or directives a component finds. See [Content projection and queries](12-content-projection-and-queries.md#queries-find-things-in-the-view).
- **query parameter**: An optional `name=value` pair after `?` in a URL, such as `?sort=price`. Good for filters and sorting. See [Routing](15-routing.md#query-parameters-optional-settings-in-the-url).
- **`QueryList`**: The list object that the older `@ViewChildren` and `@ContentChildren` decorators give instead of an array. See [Content projection and queries](12-content-projection-and-queries.md#in-older-code-viewchild-and-friends).

## R

- **reactive forms**: The older form system with `FormControl`, `FormGroup` and `FormArray` objects in the class, from `ReactiveFormsModule`. See [Forms](16-forms.md#reactive-forms-typed).
- **reactivity**: Automatic updating of the page and of calculated values when the data they depend on changes. See [Signals](07-signals.md#3-why-you-need-it).
- **readonly**: A word that makes a field unchangeable after it got its first value. See [The TypeScript you need](03-typescript-you-need.md#readonly-private-and-protected).
- **redirect**: A route with `redirectTo` that sends the user to another URL instead of showing a component. See [Routing](15-routing.md#redirects-and-the-wildcard-route).
- **regular expression**: A pattern for text, such as `/^[A-Za-z0-9_-]{11}$/` ("exactly 11 letters, digits, `-` or `_`"). See [Security](25-security.md#6-a-realistic-example).
- **relative link**: A link path without `/` at the start. It starts from the route of the component that contains the link. See [Routing](15-routing.md#routerlink-links-inside-the-app).
- **`reload()`**: Runs a resource's loader again with the same params. The old value stays visible while it reloads. See [HTTP and async data](17-http-and-async-data.md#resource-any-async-work-as-signals).
- **render**: Create the HTML elements that a template describes and put them into the page. Angular renders a component's template inside its host element. See [Components](04-components.md#the-host-element-and-the-view).
- **render callback**: A function given to `afterNextRender` or `afterEveryRender`. Angular calls it after it has written all components to the DOM. Only in the browser. See [Lifecycle](13-lifecycle.md#afternextrender-and-aftereveryrender).
- **`renderApplication`**: A function from `@angular/platform-server` that starts an app on the server and returns the finished HTML as a string. See [Server rendering and hydration](21-server-rendering-and-hydration.md#4-smallest-example).
- **request**: A message from the app to the server, such as "give me the teas" (GET) or "save this tea" (POST). See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **`requestIdleCallback`**: A browser function that runs code when the browser is not busy; `@defer (on idle)` uses it. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#triggers-when-the-block-loads).
- **required input**: An input that every parent must set, declared with `input.required<T>()`. The build fails if it is missing. See [Inputs, outputs and model](08-inputs-outputs-model.md#inputs).
- **required query**: `viewChild.required` or `contentChild.required`. Its type has no `undefined`, and reading it throws NG0951 when nothing is found. See [Content projection and queries](12-content-projection-and-queries.md#queries-find-things-in-the-view).
- **resolution modifiers**: The `inject()` options `optional`, `self`, `skipSelf` and `host`, which change where Angular looks and what happens when nothing is found. See [Services and dependency injection](14-services-and-dependency-injection.md#changing-where-inject-looks).
- **resolver**: A function (`ResolveFn`) that loads data before the router shows a page. The result arrives as route data or as an input. See [Routing](15-routing.md#resolvers-load-data-before-the-page-opens).
- **resource**: An object with signals (`value()`, `status()`, `isLoading()`) about a value that arrives later. See [Signals](07-signals.md#debounced-wait-until-a-value-stops-changing).
- **resource status**: The word that `status()` returns: `'idle'`, `'loading'`, `'reloading'`, `'resolved'`, `'error'` or `'local'`. See [HTTP and async data](17-http-and-async-data.md#resource-any-async-work-as-signals).
- **response**: The server's answer to a request: a status code, headers and usually a body with data. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **role**: An ARIA attribute (`role="tab"`) or the built-in meaning of an HTML element (a `<button>` has the role "button"). See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#3-why-you-need-it).
- **root component**: The one component at the top of the component tree. Angular creates it first when the app starts. See [What Angular is](01-what-is-angular.md#an-app-is-a-tree-of-components).
- **root injector**: The injector of the whole app. It holds `@Service()` classes, tokens with a factory and the `ApplicationConfig` providers. See [Services and dependency injection](14-services-and-dependency-injection.md#service-and-injectable-providedin-root-).
- **route**: A rule that says which component to show for which address (URL). Routes are listed in `app.routes.ts`. See [Install Angular and make your first app](02-install-and-first-app.md#the-files-that-ng-new-created).
- **route parameter**: A part of a route path that starts with `:`, such as `:id` in `products/:id`. It matches any text and saves it under that name. See [Routing](15-routing.md#route-parameters-one-route-for-many-pages).
- **route resource**: A resource defined in a route's `resources` function. Its value becomes an input of the page. Developer preview in Angular 22.2. See [HTTP and async data](17-http-and-async-data.md#route-resources-load-the-data-of-a-page-with-the-router).
- **routed component**: A component that the router shows in a `<router-outlet>`. It needs no selector. See [Routing](15-routing.md#4-smallest-example).
- **router**: The part of Angular that shows a different component for each URL, without reloading the page. You turn it on with `provideRouter(routes)`. See [Routing](15-routing.md#2-in-one-sentence).
- **router event**: A message the router sends during a navigation, such as `NavigationStart` or `NavigationEnd`. Read them from `router.events`. See [Routing](15-routing.md#router-events-and-a-loading-message).
- **router outlet**: The `<router-outlet />` element. The router puts the component of the current route right after it. See [Routing](15-routing.md#4-smallest-example).
- **`routerLink`**: A directive that turns a link into a router link: it writes the `href` and changes the page without reloading the app. See [Routing](15-routing.md#routerlink-links-inside-the-app).
- **`routerLinkActive`**: A directive that adds CSS classes to a link while its URL is the current one. See [Routing](15-routing.md#4-smallest-example).
- **`RouterTestingHarness`**: A test helper from `@angular/router/testing` that creates a router outlet, navigates and returns the routed component. See [Routing](15-routing.md#6-a-realistic-example).
- **roving tabindex**: Only one item of a widget has `tabindex="0"`; the arrow keys move it, so one Tab enters the widget and the next leaves it. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#listbox).
- **`runInInjectionContext`**: Runs a function inside the injection context of a given injector, so `inject()` works there. See [Services and dependency injection](14-services-and-dependency-injection.md#where-inject-works-the-injection-context).
- **RxJS**: The library of Observables and operators that Angular uses for streams. It is installed in every Angular project. See [RxJS interop](18-rxjs-interop.md#3-why-you-need-it).
- **`rxResource`**: A resource whose `stream` function returns an Observable instead of a Promise. Every value of the stream updates `value()`. See [HTTP and async data](17-http-and-async-data.md#rxresource-a-resource-from-an-observable).

## S

- **sanitizing**: Checking a value and removing or changing the parts that are not safe where it goes. See [Security](25-security.md#4-smallest-example).
- **schema (forms)**: The rules of a form: the function you pass to `form()`, or a reusable object made with `schema()`. See [Forms](16-forms.md#model-form-and-field).
- **schematic**: A script for the Angular CLI that creates or changes files in your project, for example the code behind `ng generate` and `ng update` migrations. See [Testing](19-testing.md#in-older-projects-karma-jasmine-and-zonejs-helpers).
- **screen reader**: A program that reads the page aloud and tells what each element is, for blind and low-vision users. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#3-why-you-need-it).
- **security context**: The kind of place a value goes (HTML, style, URL, resource URL); it decides how Angular checks the value. See [Security](25-security.md#angular-trusts-templates-not-values).
- **selector**: The tag name (or other CSS selector) that places a component on the page, such as `app-hello` in `<app-hello />`. See [What Angular is](01-what-is-angular.md#4-smallest-example).
- **selector prefix**: A short start for all selectors of a project, such as `app-`, so you can see where a component comes from. Never use `ng-`. See [Components](04-components.md#selectors).
- **semantic HTML**: Using the HTML element that matches the meaning (`<button>`, `<a href>`, `<h2>`, `<label>`), so roles and keyboard support come built in. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#basics-semantic-html-first).
- **semantic versioning (major.minor.patch)**: Version numbers where major may break code, minor adds features, patch fixes bugs. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#updating-angular).
- **SEO (search engine optimization)**: Making pages easy for search engines to read and rank well. See [Server rendering and hydration](21-server-rendering-and-hydration.md#3-why-you-need-it).
- **server (backend)**: The program on another computer that stores the data and answers requests. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **server-side rendering (SSR)**: Running the Angular app on a server for each request, so the browser receives finished HTML. See [Server rendering and hydration](21-server-rendering-and-hydration.md#5-how-it-works).
- **server-side request forgery (SSRF)**: Tricks that make a server send requests to places it should not; Angular's SSR server answers only host names listed in `security.allowedHosts`. See [Security](25-security.md#attacks-through-http).
- **service**: A shared helper object that components ask Angular for, for example to load data. See [What Angular is](01-what-is-angular.md#angular-at-a-glance).
- **service worker**: A script the browser keeps after the tab closes; Angular's caches the app's files so it can start offline. See [Smaller topics](27-smaller-topics.md#service-workers).
- **Shadow DOM**: A browser feature that puts an element's content and CSS into a separate, hidden tree. See [Styling components](09-styling.md#view-encapsulation).
- **side effect**: Work that changes something outside the value being calculated, such as writing to `localStorage` or a log. See [Signals](07-signals.md#effect-run-code-when-signals-change).
- **signal**: A box that holds a value and tells Angular when the value changes. You read it by calling it: `title()`. See [Install Angular and make your first app](02-install-and-first-app.md#step-5-change-the-first-component) and [Signals](07-signals.md).
- **Signal Forms**: Angular's newest form system, from `@angular/forms/signals`. Your data lives in a signal; `form()` adds fields, rules and state. Stable and recommended since Angular 22. See [Forms](16-forms.md#three-ways-to-build-forms).
- **single-page application**: A web app where the server sends one HTML page and the framework changes the page in the browser afterwards, without loading new pages. See [What Angular is](01-what-is-angular.md#what-happens-when-the-page-opens).
- **slot**: One `<ng-content>` placeholder. With `select="[name]"` it takes only matching content; without `select` it takes the rest. See [Content projection and queries](12-content-projection-and-queries.md#several-slots-with-select).
- **snapshot (route)**: A picture of the route at one moment (`route.snapshot`). It does not change later. See [Routing](15-routing.md#another-way-activatedroute).
- **source locale**: The language you write your templates in; `en-US` unless `angular.json` says otherwise. See [Internationalization (i18n)](24-i18n.md#the-locale-and-locale-aware-pipes).
- **spec file**: A `.spec.ts` file with the tests for the file of the same name. See [Testing](19-testing.md#the-tools).
- **spread syntax (`...`)**: JavaScript syntax that copies all items of an array or all properties of an object into a new one: `[...list, x]`, `{...task, status}`. See [Control flow: @if, @for, @switch](06-control-flow.md#6-a-realistic-example).
- **spy**: (existing entry; first use is now in chapter 18's exercise) A function that records its calls, made with `vi.fn()` or `vi.spyOn(object, 'method')`. Briefly in [RxJS interop](18-rxjs-interop.md#8-try-it-yourself); in depth in [Testing](19-testing.md#fakes-and-spies).
- **`srcset`**: An `<img>` attribute with a list of image files of different sizes, from which the browser picks the best one. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngoptimizedimage-images-in-the-right-order-and-size).
- **stable (app)**: An app with no work left to do: no pending HTTP requests, navigation or other tracked tasks. The server sends the page when the app is stable. See [Server rendering and hydration](21-server-rendering-and-hydration.md#4-smallest-example).
- **stagger**: Starting the animations of list items one after another with a small delay. See [Animations](23-animations.md#6-a-realistic-example).
- **staging server**: A copy of the real server where the team tests a new version before real users get it. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#one-build-for-every-server-runtime-configuration).
- **standalone component**: A component that other components can import directly. All components are standalone by default. See [Components](04-components.md#using-a-component).
- **`@starting-style`**: A CSS rule that gives an element its styles in the moment it first appears, so a transition has a "before" value. See [Animations](23-animations.md#enter-with-a-transition-starting-style).
- **static field**: A field written with `static` (`static created = 0`). It belongs to the class itself, not to one object, so all objects share it; you read it as `ClassName.created`. See [Content projection and queries](12-content-projection-and-queries.md#6-a-realistic-example).
- **static site generation (SSG) / prerendering**: Rendering pages to HTML files once, during the build, so a server only sends ready files. See [Server rendering and hydration](21-server-rendering-and-hydration.md#three-ways-to-render-csr-ssr-and-ssg).
- **status code**: The number in a response that says how it went: `200` OK, `404` not found, `500` server error, `0` no answer at all. See [HTTP and async data](17-http-and-async-data.md#3-why-you-need-it).
- **strict mode / strict null checks**: TypeScript settings that Angular projects use. With strict null checks, `null` and `undefined` are allowed only when the type says so. See [The TypeScript you need](03-typescript-you-need.md#strict-null-checks-and-the--and--operators).
- **structural directive**: A directive that adds or removes a piece of template, used with a `*` such as `*appShowFor`. `@if` and `@for` cover most of these needs. See [Directives](11-directives.md#structural-directives).
- **Subject**: An Observable that you can push values into with `next`. Services use it to send events to all listeners. See [RxJS interop](18-rxjs-interop.md#observables-in-two-minutes).
- **subscribe**: To start an Observable and say what to do with its values, with `.subscribe(...)`. An `HttpClient` request is sent only when someone subscribes. See [HTTP and async data](17-http-and-async-data.md#httpclient-requests-in-a-service).
- **subscription**: The object that `subscribe` returns. `unsubscribe()` stops the stream. See [RxJS interop](18-rxjs-interop.md#observables-in-two-minutes).
- **`switchMap`**: An RxJS operator that starts a new inner Observable (for example a request) for each value and stops the old one. See [RxJS interop](18-rxjs-interop.md#signals-and-rxjs-together-a-search-box).

## T

- **tagged template**: A function written right before a template string, such as `` $localize`...` ``. See [Internationalization (i18n)](24-i18n.md#4-smallest-example).
- **Tailwind CSS**: A CSS library of small utility classes that you write in templates, such as `text-3xl`. See [Styling components](09-styling.md#tailwind-css).
- **`takeUntilDestroyed`**: An RxJS operator from Angular that ends a subscription when the component, directive or service is destroyed. See [RxJS interop](18-rxjs-interop.md#takeuntildestroyed-stop-a-subscription-with-the-component).
- **target / builder**: A target is a named task in `angular.json` (`build`, `serve`, `test`); its builder is the program that does the work. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#angularjson-in-short).
- **teardown**: The clean-up function of an Observable. It runs when the subscription ends. See [RxJS interop](18-rxjs-interop.md#observables-in-two-minutes).
- **template**: The HTML that a component shows, with extra Angular syntax for data and events. See [What Angular is](01-what-is-angular.md#4-smallest-example).
- **template expression**: The code inside `{{ }}`, `[x]="..."` or `(x)="..."`. It looks like JavaScript and runs against the component. See [Templates and binding](05-templates-and-binding.md#4-smallest-example).
- **template fragment (`ng-template`)**: A piece of template that is not shown where it stands, but can be shown later, any number of times. See [Templates and binding](05-templates-and-binding.md#ng-container-and-ng-template).
- **template reference variable (`#ref`)**: `#name` on an element names that element (or component instance) for other parts of the template. See [Templates and binding](05-templates-and-binding.md#template-variables-let-and-ref).
- **template-driven forms**: The form system where the template builds the form with `ngModel` and validator attributes, from `FormsModule`. See [Forms](16-forms.md#template-driven-forms).
- **`TemplateRef`**: The content of an `<ng-template>`, ready to be rendered by code. See [Directives](11-directives.md#structural-directives).
- **templateUrl / styleUrl**: Settings that point to a separate template file and CSS file, relative to the component's `.ts` file. See [Components](04-components.md#template-and-styles-in-separate-files).
- **terminal**: A window where you type commands and press Enter (also called command line or console). See [Install Angular and make your first app](02-install-and-first-app.md#1-before-this-chapter).
- **test**: Code that checks that other code works, for example by clicking a button and checking the text on the page. See [What Angular is](01-what-is-angular.md#6-a-realistic-example).
- **test double (fake, stub)**: An object that replaces a real dependency in a test, for example with `{ provide: X, useValue: fake }`. See [Testing](19-testing.md#fakes-and-spies).
- **test host**: A small component written in a spec file that uses the component under test in its template, like a real parent. See [Testing](19-testing.md#a-test-host).
- **`TestBed`**: Angular's test helper. It creates a small app per test, provides services and creates components. See [Testing](19-testing.md#testbed-and-componentfixture).
- **text interpolation**: `{{ expression }}`: shows the value of an expression as text. See [Templates and binding](05-templates-and-binding.md#text-interpolation).
- **thread**: One line of work that runs code; a page's JavaScript normally runs on one. See [Smaller topics](27-smaller-topics.md#web-workers).
- **token**: The key you give to `inject()`: a class or an `InjectionToken`. See [Services and dependency injection](14-services-and-dependency-injection.md#the-words).
- **`toObservable`**: Turns a signal into an Observable that sends the settled value each time the signal changes. See [RxJS interop](18-rxjs-interop.md#toobservable-from-a-signal-to-an-observable).
- **toolbar**: A group of controls, such as formatting buttons, that is one Tab stop and uses the arrow keys inside. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#6-a-realistic-example).
- **`toSignal`**: Subscribes to an Observable and returns a signal with its latest value. Stops the subscription when the component or service is destroyed. See [RxJS interop](18-rxjs-interop.md#tosignal-from-an-observable-to-a-signal).
- **touched**: A field is touched after the user has left it (blur) at least once. Errors are usually shown only for touched fields. See [Forms](16-forms.md#a-field-and-its-state).
- **track**: The expression in `@for` that gives each item a unique key, so Angular can keep, add or remove the right elements when the list changes. See [Control flow: @if, @for, @switch](06-control-flow.md#why-track-is-required).
- **transfer state**: Data that the server writes into the page (`<script id="ng-state">`) so the browser can read it instead of loading it again. See [Server rendering and hydration](21-server-rendering-and-hydration.md#waiting-for-data-and-transfer-state).
- **transform (input)**: A function that Angular runs on a new input value before storing it, such as `numberAttribute` or `booleanAttribute`. See [Inputs, outputs and model](08-inputs-outputs-model.md#transforms-and-aliases).
- **tree-shaking**: Leaving code that is never used out of the built app. See [Services and dependency injection](14-services-and-dependency-injection.md#service-and-injectable-providedin-root-).
- **trigger (`@angular/animations`)**: A named animation in the deprecated animations package, defined with `trigger()` and used with `[@name]`. See [Animations](23-animations.md#in-older-code-the-angularanimations-package).
- **trigger (`@defer`)**: The condition that makes a `@defer` block load, written after `on` (`on idle`, `on viewport`, `on interaction`, `on hover`, `on immediate`, `on timer(...)`) or `when`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#triggers-when-the-block-loads).
- **Trusted Types**: A browser feature, switched on by CSP, that refuses plain strings in dangerous DOM APIs. See [Security](25-security.md#trusted-types).
- **trusted value**: A value marked with a `bypassSecurityTrust...` method, which Angular uses without checking. Only for values you built from checked parts. See [Security](25-security.md#trusting-a-value-on-purpose-domsanitizer).
- **truthy / falsy**: How JavaScript treats a value in a condition. `0`, `''`, `null`, `undefined`, `NaN` and `false` are falsy; everything else is truthy. See [Control flow: @if, @for, @switch](06-control-flow.md#if-else-if-and-else).
- **two-way binding**: The `[(name)]="value"` syntax ("banana in a box") that keeps a value in sync between a parent and a child in both directions. See [Inputs, outputs and model](08-inputs-outputs-model.md#model-and-two-way-binding).
- **type**: A label that says what kind of value a variable, parameter or function result holds, such as `string` or `number`. See [The TypeScript you need](03-typescript-you-need.md#2-in-one-sentence).
- **type alias**: A name for any type, created with `type`, such as `type ProductId = number`. See [The TypeScript you need](03-typescript-you-need.md#interfaces-and-type-aliases).
- **type annotation**: A type written after a name with a colon, such as `name: string`. See [The TypeScript you need](03-typescript-you-need.md#4-smallest-example).
- **type assertion (`as`)**: `value as HTMLElement` tells TypeScript to treat a value as a type. It checks nothing when the code runs. See [The TypeScript you need](03-typescript-you-need.md#strict-null-checks-and-the--and--operators).
- **type inference**: TypeScript working out a type by itself from the code, for example `number` from `let count = 0`. See [The TypeScript you need](03-typescript-you-need.md#type-inference).
- **typed forms**: Reactive forms where TypeScript knows the type of every control's value, for example `FormControl<string>`. See [Forms](16-forms.md#reactive-forms-typed).
- **TypeScript**: JavaScript plus types. Angular apps are written in it, and the build turns it into JavaScript. See [What Angular is](01-what-is-angular.md#4-smallest-example).

## U

- **union type**: A type that allows one of several types or values, written with `|`, such as `'loading' | 'ready'` or `string | number`. See [The TypeScript you need](03-typescript-you-need.md#union-types).
- **unit test**: A small program that creates one piece of the app, uses it and checks the result. See [Testing](19-testing.md#2-in-one-sentence).
- **unknown**: A type for "any value" that forces you to check what the value is before you use it. See [The TypeScript you need](03-typescript-you-need.md#basic-types).
- **`untracked`**: Reads a signal without making it a dependency. See [Signals](07-signals.md#untracked-read-without-depending).
- **URL matcher**: Your own function, used with `matcher` instead of `path`, that decides if a route matches a URL. See [Routing](15-routing.md#custom-url-matchers).
- **URL parameter**: A `name=value` pair after `?` in a URL. Set it with the `params` option. See [HTTP and async data](17-http-and-async-data.md#url-parameters-headers-and-other-options).
- **`UrlTree`**: An object that describes a URL. A guard returns one to redirect, for example `router.createUrlTree(['/login'])`. See [Routing](15-routing.md#guards-who-may-open-or-leave-a-page).
- **`useValue` / `useClass` / `useFactory` / `useExisting`**: The four kinds of providers: a ready value, an object of another class, the result of a function, or another name for an existing provider. See [Services and dependency injection](14-services-and-dependency-injection.md#the-four-kinds-of-providers).

## V

- **validator**: A rule that checks a value and reports an error with a `kind` and maybe a `message`, such as `required` or `minLength`. See [Forms](16-forms.md#validation-rules).
- **view**: The DOM that a component's template creates inside its host element. See [Components](04-components.md#the-host-element-and-the-view).
- **view encapsulation**: How Angular keeps a component's CSS inside that component. Modes: `Emulated` (default), `None`, `ShadowDom`, `ExperimentalIsolatedShadowDom`. See [Styling components](09-styling.md#view-encapsulation).
- **view transition**: A browser feature that animates from a picture of the old page to the new page; the router uses it with `withViewTransitions()` (developer preview). See [Animations](23-animations.md#animated-page-changes-view-transitions).
- **`ViewContainerRef`**: A place in the page where code can add rendered templates or components. See [Directives](11-directives.md#structural-directives).
- **viewport**: The part of the page that is visible on the screen right now. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#triggers-when-the-block-loads).
- **`viewProviders`**: Like `providers`, but visible only to the component's own template, not to projected content. See [Services and dependency injection](14-services-and-dependency-injection.md#hierarchical-injectors).
- **Vitest**: The test runner that `ng test` uses to run `.spec.ts` files. See [Install Angular and make your first app](02-install-and-first-app.md#what-ng-test-does).
- **void**: The result type of a function that returns nothing. See [The TypeScript you need](03-typescript-you-need.md#basic-types).

## W

- **W3C**: The group that writes web standards such as HTML and the WAI-ARIA patterns. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#angular-aria-headless-widgets).
- **WAI-ARIA patterns**: The W3C descriptions of how widgets such as tabs or menus must work for keyboards and screen readers. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#angular-aria-headless-widgets).
- **WCAG**: The Web Content Accessibility Guidelines, the rules that most accessibility laws refer to. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#3-why-you-need-it).
- **Web Animations API**: The browser API behind `element.animate()` and `element.getAnimations()` for animations from JavaScript. See [Animations](23-animations.md#what-a-test-can-prove-and-what-it-cannot).
- **web component**: A custom element defined with browser APIs, often by a library outside Angular. Angular templates accept them with `CUSTOM_ELEMENTS_SCHEMA`. See [Components](04-components.md#more-component-settings).
- **web worker**: A second thread in the browser for heavy calculations; it talks to the page with messages. See [Smaller topics](27-smaller-topics.md#web-workers).
- **`whenStable()`**: A fixture method that returns a Promise which resolves when Angular has updated the page and finished pending work. See [Testing](19-testing.md#act-wait-assert).
- **wildcard route**: The route with `path: '**'`. It matches every URL and is used last, for a "page not found" page. See [Routing](15-routing.md#redirects-and-the-wildcard-route).
- **workspace**: The folder that `ng new` creates, with your app, its settings (`angular.json`) and its packages. Most `ng` commands work only inside it. See [Install Angular and make your first app](02-install-and-first-app.md#step-3-create-a-project).
- **workspace configuration (`angular.json`)**: The file the CLI reads for every command: projects, targets, builders, options and configurations. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#angularjson-in-short).
- **writable signal**: A signal you can change with `set` and `update`, created with `signal()`. See [Signals](07-signals.md#reading-setting-and-updating).

## X

- **XLIFF (`.xlf`)**: An XML format for translation files; `ng extract-i18n` writes it by default. See [Internationalization (i18n)](24-i18n.md#step-1-extract-the-texts).

## Z

- **zone.js**: A library that older Angular apps used to notice clicks, timers and network answers and then check the whole app for changes. Apps in this version do not need it. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#zoneless-how-angular-knows-that-something-changed).
- **zoneless**: Angular without zone.js. Angular runs change detection only when it is notified, for example by a signal or a template event. It is the default in this version. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#zoneless-how-angular-knows-that-something-changed).
