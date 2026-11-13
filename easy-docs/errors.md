# Errors

The error messages that beginners meet most often in this guide, by chapter. Every message
was produced by a real `ng build`, `ng test` or `ng` command while the guide was written. Paths
are shortened to the file name. Each entry says what the message means, how to fix it, and where
the chapter explains it.

To find a message, search this page for its code (such as `NG8002` or `TS2339`) or for a few words
of it.

## Codes

- `NG0200`: [NG0200: Circular dependency detected](#ng0200-circular-dependency-detected)
- `NG0201`: [NG0201: No provider for TemplateRef found](#ng0201-no-provider-for-templateref-found)
- `NG0201`: [NG0201: No provider found for …](#ng0201-no-provider-found-for-)
- `NG0203`: [NG0203: effect() can only be used within an injection context](#ng0203-effect-can-only-be-used-within-an-injection-context)
- `NG0203`: [NG0203: afterNextRender() can only be used within an injection context](#ng0203-afternextrender-can-only-be-used-within-an-injection-context)
- `NG0203`: [NG0203: The … token injection failed. `inject()` function must be called from an injection context](#ng0203-the--token-injection-failed-inject-function-must-be-called-from-an-injection-context)
- `NG0203`: [NG0203: inject() must be called from an injection context (after await)](#ng0203-inject-must-be-called-from-an-injection-context-after-await)
- `NG0203`: [NG0203 for `httpResource()`, `toSignal()` or `takeUntilDestroyed()`](#ng0203-for-httpresource-tosignal-or-takeuntildestroyed)
- `NG0701`: [NG0701: Missing locale data](#ng0701-missing-locale-data)
- `NG0904`: [NG0904: unsafe value used in a resource URL context](#ng0904-unsafe-value-used-in-a-resource-url-context)
- `NG0950`: [NG0950: Input is required but no value is available yet (routed component)](#ng0950-input-is-required-but-no-value-is-available-yet-routed-component)
- `NG0951`: [NG0951: Child query result is required but no value is available](#ng0951-child-query-result-is-required-but-no-value-is-available)
- `NG1010`: [NG1010: styleUrl must be a string](#ng1010-styleurl-must-be-a-string)
- `NG01352`: [NG01352: If ngModel is used within a form tag, either the name attribute must be set ...](#ng01352-if-ngmodel-is-used-within-a-form-tag-either-the-name-attribute-must-be-set-)
- `NG2008`: [NG2008: Could not find stylesheet file](#ng2008-could-not-find-stylesheet-file)
- `NG2011`: [NG2011: The component appears in 'imports', but is not standalone](#ng2011-the-component-appears-in-imports-but-is-not-standalone)
- `NG02100`: [NG02100: InvalidPipeArgument](#ng02100-invalidpipeargument)
- `NG02950`: [NG02950: NgOptimizedImage ... both `src` and `ngSrc` have been set](#ng02950-ngoptimizedimage--both-src-and-ngsrc-have-been-set)
- `NG02954`: [NG02954: NgOptimizedImage ... required attributes are missing: "width", "height"](#ng02954-ngoptimizedimage--required-attributes-are-missing-width-height)
- `NG04014`: [NG04014: please provide 'pathMatch'](#ng04014-please-provide-pathmatch)
- `NG04014`: [NG04014: path cannot start with a slash](#ng04014-path-cannot-start-with-a-slash)
- `NG5002`: [NG5002: @for loop must have a "track" expression](#ng5002-for-loop-must-have-a-track-expression)
- `NG5002`: [NG5002: @for loop expression must match the pattern](#ng5002-for-loop-expression-must-match-the-pattern)
- `NG5002`: [NG5002: Unexpected character "EOF" / Invalid ICU message](#ng5002-unexpected-character-eof--invalid-icu-message)
- `NG5002`: [NG5002: Unsupported expression in a two-way binding](#ng5002-unsupported-expression-in-a-two-way-binding)
- `NG5002`: [NG5002: Can't have multiple template bindings on one element](#ng5002-cant-have-multiple-template-bindings-on-one-element)
- `NG05105`: [NG05105: Unexpected synthetic property @openClose found](#ng05105-unexpected-synthetic-property-openclose-found)
- `NG8001`: [NG8001: '...' is not a known element (slot name as element)](#ng8001--is-not-a-known-element-slot-name-as-element)
- `NG8001`: [NG8001: 'router-outlet' is not a known element](#ng8001-router-outlet-is-not-a-known-element)
- `NG8002`: [NG8002: Can't bind to '...' since it isn't a known property](#ng8002-cant-bind-to--since-it-isnt-a-known-property)
- `NG8002`: [NG8002: Can't bind to '...' since it isn't a known property of 'p' (directive not imported)](#ng8002-cant-bind-to--since-it-isnt-a-known-property-of-p-directive-not-imported)
- `NG8002`: [NG8002 on an input of a host directive](#ng8002-on-an-input-of-a-host-directive)
- `NG8002`: [NG8002: Can't bind to 'routerLink' since it isn't a known property of 'a'](#ng8002-cant-bind-to-routerlink-since-it-isnt-a-known-property-of-a)
- `NG8002`: [NG8002: Can't bind to 'formField' since it isn't a known property of 'input'](#ng8002-cant-bind-to-formfield-since-it-isnt-a-known-property-of-input)
- `NG8002`: [NG8002: Can't bind to 'formGroup' since it isn't a known property of 'form'](#ng8002-cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form)
- `NG8002`: [NG8002: Can't bind to 'panel' since it isn't a known property of 'button'](#ng8002-cant-bind-to-panel-since-it-isnt-a-known-property-of-button)
- `NG8004`: [NG8004: No pipe found with name](#ng8004-no-pipe-found-with-name)
- `NG8008`: [NG8008: Required input must be specified](#ng8008-required-input-must-be-specified)
- `NG8008`: [NG8008: Required input 'value' from directive Tab must be specified](#ng8008-required-input-value-from-directive-tab-must-be-specified)
- `NG8010`: [NG8010: Trigger cannot find reference](#ng8010-trigger-cannot-find-reference)
- `NG8020`: [NG8020: Trigger with no target can only be placed on an @defer that has a @placeholder block with exactly one root element node](#ng8020-trigger-with-no-target-can-only-be-placed-on-an-defer-that-has-a-placeholder-block-with-exactly-one-root-element-node)
- `NG8022`: [NG8022: Setting the 'min' attribute is not allowed on nodes using the '[formField]' directive](#ng8022-setting-the-min-attribute-is-not-allowed-on-nodes-using-the-formfield-directive)
- `NG8109`: [NG8109 / NG8117: a signal is not called in interpolation](#ng8109--ng8117-a-signal-is-not-called-in-interpolation)
- `NG8117`: [NG8109 / NG8117: a signal is not called in interpolation](#ng8109--ng8117-a-signal-is-not-called-in-interpolation)
- `NG8118`: [NG8118: … is a required `input` and does not have a value in this context](#ng8118--is-a-required-input-and-does-not-have-a-value-in-this-context)
- `TS2307`: [TS2307: Cannot find module '../environment/environment'](#ts2307-cannot-find-module-environmentenvironment)
- `TS2322`: [TS2322: Type '"..."' is not assignable to type 'never' (in @switch)](#ts2322-type--is-not-assignable-to-type-never-in-switch)
- `TS2322`: [TS2322: Type 'WritableSignal<string | null>' is not assignable ... ([formField])](#ts2322-type-writablesignal-is-not-assignable--formfield)
- `TS2339`: [TS2339: Property 'set' does not exist on type 'Signal<number>'](#ts2339-property-set-does-not-exist-on-type-signal)
- `TS2339`: [TS2339: Property 'set' does not exist on type 'InputSignal<...>'](#ts2339-property-set-does-not-exist-on-type-inputsignal)
- `TS2339`: [TS2339: Property 'valid' does not exist on type 'FieldTree<...>'](#ts2339-property-valid-does-not-exist-on-type-fieldtree)
- `TS2365`: [TS2540 / TS2365: assigning to a signal field](#ts2540--ts2365-assigning-to-a-signal-field)
- `TS2420`: [TS2420: Class '...' incorrectly implements interface 'OnInit'](#ts2420-class--incorrectly-implements-interface-oninit)
- `TS2540`: [TS2540 / TS2365: assigning to a signal field](#ts2540--ts2365-assigning-to-a-signal-field)
- `TS2693`: [TS2693: '...' only refers to a type, but is being used as a value here](#ts2693--only-refers-to-a-type-but-is-being-used-as-a-value-here)
- `TS2740`: [TS2740: Type 'HTMLDivElement' is missing the following properties from type 'AccordionPanel'](#ts2740-type-htmldivelement-is-missing-the-following-properties-from-type-accordionpanel)

## Chapter 1. What Angular is

From [What Angular is](01-what-is-angular.md).

### Template in normal quotes on several lines

```text
✘ [ERROR] TS1002: Unterminated string literal. [plugin angular-compiler]
```

Means: a string in `'...'` or `"..."` must end on the same line. Many more errors follow it; fix this one first.
Fix: write a multi-line template between backticks (`` ` ``). See [What Angular is](01-what-is-angular.md#using-normal-quotes-for-a-template-on-several-lines).

### Typo in a `@Component` setting

```text
✘ [ERROR] TS2561: Object literal may only specify known properties, but 'templete' does not exist in type 'Component'. Did you mean to write 'template'? [plugin angular-compiler]

✘ [ERROR] NG2001: @Component is missing a template. Add either a `template` or `templateUrl` [plugin angular-compiler]
```

Means: `@Component` has no setting with that name, so the component also has no template.
Fix: correct the name (`template`, `templateUrl`, `selector`, ...). See [What Angular is](01-what-is-angular.md#a-typo-in-a-setting-name).

### Missing import

```text
✘ [ERROR] TS2304: Cannot find name 'Component'. [plugin angular-compiler]
```

Means: the file uses a name it never imported or declared.
Fix: add `import { Component } from '@angular/core';` at the top. See [What Angular is](01-what-is-angular.md#forgetting-the-import).

## Chapter 2. Install Angular and make your first app

From [Install Angular and make your first app](02-install-and-first-app.md).

### Node.js too old

```text
Node.js version v18.19.1 detected.
The Angular CLI requires a minimum Node.js version of v22.22.3 or v24.15.0 or v26.0.0.

Please update your Node.js version or visit https://nodejs.org/ for additional instructions.
```

Means: the installed Node.js is older than Angular 22 supports.
Fix: install Node.js 22.22.3+, 24.15.0+ or 26, then open a new terminal. See [Install Angular and make your first app](02-install-and-first-app.md#nodejs-is-too-old).

### `ng` not found

```text
bash: ng: command not found
```

Means: the Angular CLI is not installed globally, or the terminal was opened before the install.
Fix: `npm install -g @angular/cli@22.2`, then open a new terminal. See [Install Angular and make your first app](02-install-and-first-app.md#the-ng-command-is-not-found).

### Command outside a workspace

```text
Error: This command is not available when running the Angular CLI outside a workspace.
```

Means: `ng serve`, `ng build`, `ng test` and `ng generate` must run inside the project folder (the folder with `angular.json`).
Fix: `cd` into the project first. See [Install Angular and make your first app](02-install-and-first-app.md#running-ng-serve-outside-the-project-folder).

### Port already in use

```text
An unhandled exception occurred: Port 4200 is already in use. Use '--port' to specify a different port.
```

Means: another program (often another `ng serve`) already uses port 4200.
Fix: stop the other server with `Ctrl+C`, or run `ng serve --port 4201`. See [Install Angular and make your first app](02-install-and-first-app.md#the-port-is-already-in-use).

### Unknown element (component not imported)

```text
✘ [ERROR] NG8001: 'app-welcome' is not a known element:
1. If 'app-welcome' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
2. If 'app-welcome' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. Find more at https://next.angular.dev/errors/NG8001 [plugin angular-compiler]
```

Means: the template uses a tag that matches no component in this component's `imports`. Often the import is missing, or the tag name has a typo.
Fix: import the component class at the top of the file and add it to `imports: [...]`; check the spelling of the selector. See [Install Angular and make your first app](02-install-and-first-app.md#using-a-component-without-importing-it).

### Unused imports warning

```text
▲ [WARNING] NG8113: All imports are unused [plugin angular-compiler]
```

Means: the component lists something in `imports` that its template never uses (for example `RouterOutlet` after `<router-outlet />` was deleted).
Fix: use it in the template or remove it from `imports`. See [Install Angular and make your first app](02-install-and-first-app.md#deleting-the-router-outlet).

### Generated test fails after you change the page

```text
AssertionError: expected 'Hello, Amina' to contain 'Hello, my-first-app'
```

Means: a test still expects the old text.
Fix: update the expected text in the `.spec.ts` file. See [Install Angular and make your first app](02-install-and-first-app.md#keep-the-tests-green).

## Chapter 3. The TypeScript you need

From [The TypeScript you need](03-typescript-you-need.md).

### Wrong argument type

```text
✘ [ERROR] TS2345: Argument of type 'number' is not assignable to parameter of type 'string'. [plugin angular-compiler]
```

Means: a function was called with a value of another type than its parameter.
Fix: pass a value of the right type (or convert it, e.g. `String(42)`). See [The TypeScript you need](03-typescript-you-need.md#passing-a-value-of-the-wrong-type).

### Wrong value type in an assignment

```text
✘ [ERROR] TS2322: Type 'string' is not assignable to type 'number'. [plugin angular-compiler]
```

Means: a variable (typed or inferred) gets a value of another type.
Fix: keep the type, or widen it on purpose with a union such as `number | string`. See [The TypeScript you need](03-typescript-you-need.md#assigning-a-value-of-the-wrong-type).

### Missing property

```text
✘ [ERROR] TS2741: Property 'price' is missing in type '{ id: number; name: string; }' but required in type 'Product'. [plugin angular-compiler]
```

Means: an object literal lacks a property that its interface requires.
Fix: add the property, or mark it optional with `?` in the interface. See [The TypeScript you need](03-typescript-you-need.md#forgetting-a-property-of-an-interface).

### Possibly undefined

```text
✘ [ERROR] TS2532: Object is possibly 'undefined'. [plugin angular-compiler]
```

Means: the code reads a property of a value whose type includes `undefined` (for example the result of `find`, or an optional property).
Fix: check the value with `if`, or use `?.` and `??`. See [The TypeScript you need](03-typescript-you-need.md#using-a-value-that-may-be-undefined).

### Crash after a wrong `!`

```text
TypeError: Cannot read properties of undefined (reading 'city')
```

Means: the code read a property of `undefined` while it ran. With TypeScript this often comes from a `!` or `as` that was wrong.
Fix: replace `!` with a real check or `?.`. See [The TypeScript you need](03-typescript-you-need.md#silencing-the-check-with--when-you-are-wrong).

### Read-only property

```text
✘ [ERROR] TS2540: Cannot assign to 'owner' because it is a read-only property. [plugin angular-compiler]
```

Means: the code assigns to a `readonly` field after it got its value.
Fix: do not reassign it; create a new object, or remove `readonly` if the value must change. See [The TypeScript you need](03-typescript-you-need.md#changing-a-readonly-field).

### Private property

```text
✘ [ERROR] TS2341: Property 'balance' is private and only accessible within class 'BankAccount'. [plugin angular-compiler]
```

Means: code outside a class uses a `private` member.
Fix: use a public method of the class, or change the member's visibility. See [The TypeScript you need](03-typescript-you-need.md#reading-a-private-field-from-outside).

## Chapter 4. Components

From [Components](04-components.md).

### Unknown element (typo in the selector)

```text
✘ [ERROR] NG8001: 'app-recipe-crad' is not a known element:
1. If 'app-recipe-crad' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
2. If 'app-recipe-crad' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. Find more at https://next.angular.dev/errors/NG8001 [plugin angular-compiler]
```

Means: no imported component has this selector (typo or missing import). Often comes with the NG8113 "All imports are unused" warning.
Fix: correct the tag name, or import the component. See [Components](04-components.md#a-typo-in-the-selector).

### Two components on one element

```text
✘ [ERROR] NG8023: Multiple components match node with tagname app-greeting: 'CompGreetingA', 'CompGreetingB'. Find more at https://next.angular.dev/errors/NG8023 [plugin angular-compiler]
```

Means: two imported components have selectors that match the same element.
Fix: give each component its own selector. See [Components](04-components.md#two-components-match-the-same-element).

### Template file not found

```text
✘ [ERROR] NG2008: Could not find template file './recipe-card.htm'. [plugin angular-compiler]
```

Means: the `templateUrl` path does not point to an existing file (relative to the `.ts` file).
Fix: correct the path and file ending. See [Components](04-components.md#a-wrong-path-in-templateurl).

### Class not exported

```text
✘ [ERROR] TS2459: Module '"./hidden"' declares 'CompHidden' locally, but it is not exported. [plugin angular-compiler]

✘ [ERROR] NG1010: 'imports' must be an array of components, directives, pipes, or NgModules.
  Value could not be determined statically. [plugin angular-compiler]
```

Means: another file imports a class that its file does not export; the second error follows from the first.
Fix: add `export` before `class`. See [Components](04-components.md#forgetting-export).

### Not a component in `imports`

```text
✘ [ERROR] NG2012: Component imports must be standalone components, directives, pipes, or must be NgModules. [plugin angular-compiler]
```

Means: `@Component.imports` lists a class that is not a component, directive, pipe or NgModule.
Fix: remove it from `imports` (keep only the TypeScript `import` line), or add the missing decorator. See [Components](04-components.md#importing-a-class-that-is-not-a-component).

### Missing `override`

```text
✘ [ERROR] TS4114: This member must have an 'override' modifier because it overrides a member in the base class 'ClickCounter'. [plugin angular-compiler]
```

Means: a method replaces a method of the parent class without the `override` keyword (required by `noImplicitOverride`).
Fix: write `override` before the method name. See [Components](04-components.md#forgetting-override-in-a-component-that-extends-a-class).

## Chapter 5. Templates and binding

From [Templates and binding](05-templates-and-binding.md).

### Can't bind to a property

```text
✘ [ERROR] NG8002: Can't bind to 'colspan' since it isn't a known property of 'td'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: `[name]` binds to a DOM property (or a component input) that does not exist: an attribute without a property, a typo, or a component input whose component is not imported.
Fix: use `[attr.name]` for attributes, correct the name, or import the component. See [Templates and binding](05-templates-and-binding.md#binding-to-a-property-that-does-not-exist).

### Unknown member in a template

```text
✘ [ERROR] TS2551: Property 'titel' does not exist on type 'TplTitle'. Did you mean 'title'? [plugin angular-compiler]
```

Means: the template uses a name that the component class does not have (often a typo).
Fix: use the right name, or add the field or method to the class. See [Templates and binding](05-templates-and-binding.md#a-typo-in-a-field-name).

### Assignment in a binding

```text
✘ [ERROR] NG5002: Parser Error: Bindings cannot contain assignments at column 10 in [ count = count + 1 ] in counter.ts@1:52 [plugin angular-compiler]
```

Means: `{{ }}` and `[x]="..."` may only read values.
Fix: change data in an event listener or a method. See [Templates and binding](05-templates-and-binding.md#an-assignment-in-a-binding).

### Assigning to `@let`

```text
✘ [ERROR] NG8015: Cannot assign to @let declaration 'value'. [plugin angular-compiler]
```

Means: a `@let` variable cannot get a new value.
Fix: keep changing data in a class field. See [Templates and binding](05-templates-and-binding.md#assigning-to-a-let-variable).

### Global in a template

```text
✘ [ERROR] TS2339: Property 'Math' does not exist on type 'TplPrice'. [plugin angular-compiler]
```

Means: templates see only the component's members; globals such as `Math`, `Date` or `console` are not available.
Fix: move the code into a method or field of the class. See [Templates and binding](05-templates-and-binding.md#using-a-global-such-as-math).

### Method not called in an event binding

```text
▲ [WARNING] NG8111: NG8111: Function in event binding should be invoked: search(). Find more at https://v22.angular.dev/extended-diagnostics/NG8111 [plugin angular-compiler]
```

Means: `(click)="search"` reads the method but does not call it, so nothing happens.
Fix: write `(click)="search()"`. See [Templates and binding](05-templates-and-binding.md#forgetting-the-parentheses-of-a-method-in-an-event-binding).

### No error, but wrong behavior

- `disabled="isSaving"` without brackets: the button is always disabled (the value is the text "isSaving"). Fix: `[disabled]="isSaving"`. See [Templates and binding](05-templates-and-binding.md#forgetting-the-square-brackets).
- A plain field changed in `setTimeout` (or another non-template callback): the page does not update. Fix: use a signal ([chapter 7](07-signals.md)). See [Templates and binding](05-templates-and-binding.md#a-plain-field-changed-outside-an-event).

## Chapter 6. Control flow: @if, @for, @switch

From [Control flow: @if, @for, @switch](06-control-flow.md).

### NG5002: @for loop must have a "track" expression

```text
✘ [ERROR] NG5002: @for loop must have a "track" expression [plugin angular-compiler]
```

Means: every `@for` needs a `track` expression that identifies each item. Fix: add one, usually a unique id: `@for (item of items; track item.id)`. See [Control flow](06-control-flow.md#forgetting-track).

### NG5002: @for loop expression must match the pattern

```text
✘ [ERROR] NG5002: Cannot parse expression. @for loop expression must match the pattern "<identifier> of <expression>" [plugin angular-compiler]
```

Means: `@for` only accepts `item of list` (not `in`). Fix: write `@for (item of items; track item.id)`. See [Control flow](06-control-flow.md#writing-in-instead-of-of).

### NG5002: Unexpected character "EOF" / Invalid ICU message

```text
✘ [ERROR] NG5002: Unexpected character "EOF" (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.) [plugin angular-compiler]

✘ [ERROR] NG5002: Invalid ICU message. Missing '}'. [plugin angular-compiler]
```

Means: the template has a `{` that is not part of a block or interpolation. A common cause is `} else {` without `@`. Fix: write `} @else {`, or escape a literal brace as `{{ '{' }}`. See [Control flow](06-control-flow.md#forgetting-the--before-else).

### TS2322: Type '"..."' is not assignable to type 'never' (in @switch)

```text
✘ [ERROR] TS2322: Type '"yellow"' is not assignable to type 'never'. [plugin angular-compiler]
```

Means: a `@switch` ends with `@default never;`, but one possible value has no `@case`. Fix: add the missing `@case`. See [Control flow](06-control-flow.md#missing-a-case-after-default-never).

## Chapter 7. Signals

From [Signals](07-signals.md).

### NG8109 / NG8117: a signal is not called in interpolation

```text
▲ [WARNING] NG8109: NG8109: count is a function and should be invoked: count()}. Find more at https://v22.angular.dev/extended-diagnostics/NG8109 [plugin angular-compiler]

▲ [WARNING] NG8117: NG8117: Function in text interpolation should be invoked: count(). Find more at https://v22.angular.dev/extended-diagnostics/NG8117 [plugin angular-compiler]
```

Means: the template uses a signal without `()`. The page shows `[Signal (count): 0]`. Fix: write `{{ count() }}`. See [Signals](07-signals.md#forgetting-the--when-you-read-a-signal).

### TS2540 / TS2365: assigning to a signal field

```text
✘ [ERROR] TS2540: Cannot assign to 'count' because it is a read-only property. [plugin angular-compiler]

✘ [ERROR] TS2365: Operator '+' cannot be applied to types 'WritableSignal<number>' and 'number'. [plugin angular-compiler]
```

Means: the code treats the signal box as the value (`this.count = this.count + 1`). Fix: `this.count.update((value) => value + 1)` or `this.count.set(...)`. See [Signals](07-signals.md#assigning-to-the-signal-field).

### TS2339: Property 'set' does not exist on type 'Signal<number>'

```text
✘ [ERROR] TS2339: Property 'set' does not exist on type 'Signal<number>'. [plugin angular-compiler]
```

Means: you tried to change a `computed` signal, which is read-only. Fix: change the signal it is made from, or use `linkedSignal`. See [Signals](07-signals.md#calling-set-on-a-computed-signal).

### NG0203: effect() can only be used within an injection context

```text
NG0203: effect() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

Means: `effect()` was called in a normal method, for example a click handler. Fix: create the effect in the constructor or as a field value. See [Signals](07-signals.md#creating-an-effect-in-a-normal-method).

## Chapter 8. Inputs, outputs and model

From [Inputs, outputs and model](08-inputs-outputs-model.md).

### NG8008: Required input must be specified

```text
✘ [ERROR] NG8008: Required input 'name' from component InputsUserBadge must be specified. [plugin angular-compiler]
```

Means: the child declares `input.required()`, and the parent's tag does not set it. Fix: set the input, `<app-user-badge name="Aziza" />`. See [Inputs, outputs and model](08-inputs-outputs-model.md#forgetting-a-required-input).

### NG8002: Can't bind to '...' since it isn't a known property

```text
✘ [ERROR] NG8002: Can't bind to 'nme' since it isn't a known property of 'app-user-badge'.
1. If 'app-user-badge' is an Angular component and it has 'nme' input, then verify that it is included in the '@Component.imports' of this component.
2. If 'app-user-badge' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message.
3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: the input name is wrong, or the child component is missing from the parent's `imports`. Fix: check the spelling and the `imports` list. See [Inputs, outputs and model](08-inputs-outputs-model.md#a-wrong-input-name).

### NG5002: Unsupported expression in a two-way binding

```text
✘ [ERROR] NG5002: Unsupported expression in a two-way binding [plugin angular-compiler]
```

Means: the right side of `[(x)]` cannot be written to, for example `quantity()` (a value, not the signal). Fix: pass the signal itself, `[(value)]="quantity"`. See [Inputs, outputs and model](08-inputs-outputs-model.md#calling-the-signal-in-a-two-way-binding).

### TS2339: Property 'set' does not exist on type 'InputSignal<...>'

```text
✘ [ERROR] TS2339: Property 'set' does not exist on type 'InputSignal<string>'. [plugin angular-compiler]
```

Means: a child tried to change its own input. Inputs belong to the parent. Fix: use `model()` or emit an output. See [Inputs, outputs and model](08-inputs-outputs-model.md#trying-to-change-an-input-inside-the-child).

## Chapter 9. Styling components

From [Styling components](09-styling.md).

### NG2008: Could not find stylesheet file

```text
✘ [ERROR] NG2008: Could not find stylesheet file './notice.css'. [plugin angular-compiler]
```

Means: the path in `styleUrl` points to a file that does not exist. The path starts from the folder of the component file. Fix: correct the file name or path. See [Styling components](09-styling.md#a-wrong-path-in-styleurl).

### NG1010: styleUrl must be a string

```text
✘ [ERROR] TS2322: Type 'string[]' is not assignable to type 'string'. [plugin angular-compiler]

✘ [ERROR] NG1010: styleUrl must be a string
  Value is of type '[string]'. [plugin angular-compiler]
```

Means: `styleUrl` (singular) got a list. Fix: `styleUrl: './file.css'`, or use the older `styleUrls: [...]` for a list. See [Styling components](09-styling.md#a-list-in-styleurl).

## Chapter 10. Pipes

From [Pipes](10-pipes.md).

### NG8004: No pipe found with name

```text
✘ [ERROR] NG8004: No pipe found with name 'currency'.
To fix this, import the "CurrencyPipe" class from "@angular/common" and add it to the "imports" array of the component. [plugin angular-compiler]
```

Means: the template uses a pipe that is not in the component's `imports`. Fix: import the pipe class and add it to `imports`. See [Pipes](10-pipes.md#forgetting-to-import-the-pipe).

### NG02100: InvalidPipeArgument

```text
NG02100: InvalidPipeArgument: 'NG02309: twenty is not a number' for pipe 'DecimalPipe'
```

Means: a number pipe (`number`, `percent`, `currency`) got a value that is not a number. Fix: keep the data as a number in the class. See [Pipes](10-pipes.md#giving-a-pipe-the-wrong-kind-of-value).

## Chapter 11. Directives

From [Directives](11-directives.md).

### NG8002: Can't bind to '...' since it isn't a known property of 'p' (directive not imported)

```text
✘ [ERROR] NG8002: Can't bind to 'appColorHighlight' since it isn't a known property of 'p'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: the template binds `[appColorHighlight]`, but no imported directive has that input. Usually the directive is missing from the component's `imports`. Without a binding (plain `<p appColorHighlight>`) there is no error, and nothing happens. Fix: add the directive to `imports`. See [Directives](11-directives.md#forgetting-to-import-the-directive).

### NG0201: No provider for TemplateRef found

```text
Error: NG0201: No provider for TemplateRef found. Find more at https://v22.angular.dev/errors/NG0201
```

Means: a structural directive was put on a normal element (`<button [appShowFor]="...">`) instead of an `<ng-template>`. It happens while the app runs, not at build time. Fix: write the `*` (`*appShowFor="..."`) or use `<ng-template [appShowFor]="...">`. See [Directives](11-directives.md#using-a-structural-directive-without-).

### NG5002: Can't have multiple template bindings on one element

```text
✘ [ERROR] NG5002: Can't have multiple template bindings on one element. Use only one attribute prefixed with * [plugin angular-compiler]
```

Means: one element has two attributes with `*`. Fix: keep one `*` and move the other condition to a `@if` block (or an `<ng-container>`) around the element. See [Directives](11-directives.md#two-structural-directives-on-one-element).

### NG8002 on an input of a host directive

```text
✘ [ERROR] NG8002: Can't bind to 'appTooltip' since it isn't a known property of 'button'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: the component uses `DirTooltip` through `hostDirectives`, but shows its input only under another name (`inputs: ['appTooltip: hint']`) or not at all. Fix: bind the name listed in `hostDirectives` (`hint="..."`), or add the input there. See [Directives](11-directives.md#binding-an-input-of-a-host-directive-that-the-component-does-not-show).

## Chapter 12. Content projection and queries

From [Content projection and queries](12-content-projection-and-queries.md).

### NG8001: '...' is not a known element (slot name as element)

```text
✘ [ERROR] NG8001: 'panel-title' is not a known element:
1. If 'panel-title' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
2. If 'panel-title' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. Find more at https://next.angular.dev/errors/NG8001 [plugin angular-compiler]
```

Means: the template uses a tag that is neither HTML nor an imported component, often as a slot name for `<ng-content select="panel-title">`. Fix: use an attribute selector for the slot (`select="[panel-title]"`) and a normal element with that attribute (`<h3 panel-title>`); or, if it is a component, add it to `imports`. See [Content projection and queries](12-content-projection-and-queries.md#using-an-unknown-element-as-a-slot-name).

### NG0951: Child query result is required but no value is available

```text
Error: NG0951: Child query result is required but no value is available. Find more at https://v22.angular.dev/errors/NG0951
```

Means: code read a `viewChild.required` (or `contentChild.required`) query, but no matching element exists right now: it is inside an `@if` that is false, or the code runs in the constructor before the view exists. Fix: use `.required` only for elements that are always there; otherwise use `viewChild(...)` and check for `undefined`. See [Content projection and queries](12-content-projection-and-queries.md#a-required-query-for-an-element-inside-if).

## Chapter 13. Lifecycle

From [Lifecycle](13-lifecycle.md).

### NG8118: `...` is a required `input` and does not have a value in this context

```text
✘ [ERROR] NG8118: `price` is a required `input` and does not have a value in this context. [plugin angular-compiler]
```

Means: the code reads a required input in the constructor (or a field initializer), before Angular has set it. Fix: make the value a `computed(() => ...)` that reads the input, or do one-time setup in `ngOnInit`. See [Lifecycle](13-lifecycle.md#reading-an-input-in-the-constructor).

### TS2420: Class '...' incorrectly implements interface 'OnInit'

```text
✘ [ERROR] TS2420: Class 'TmpWrong1' incorrectly implements interface 'OnInit'.
  Property 'ngOnInit' is missing in type 'TmpWrong1' but required in type 'OnInit'. [plugin angular-compiler]
```

Means: the class says `implements OnInit` but has no correctly spelled `ngOnInit` method (here it was `ngOnint`). Without `implements`, there is no error and the misspelled method never runs. Fix: spell the hook exactly. See [Lifecycle](13-lifecycle.md#a-typo-in-a-hook-name).

### NG0203: afterNextRender() can only be used within an injection context

```text
Error: NG0203: afterNextRender() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

Means: `afterNextRender` (the same goes for `afterEveryRender`, `effect` and `inject`) was called in a normal method, for example a click handler. Fix: call it in the constructor or a field initializer; for an element that appears later, put a directive on it that registers the callback in its own constructor. See [Lifecycle](13-lifecycle.md#calling-afternextrender-in-a-method).

## Chapter 14. Services and dependency injection

From [Services and dependency injection](14-services-and-dependency-injection.md).

### NG0201: No provider found for `...`

```text
ɵNotFound: NG0201: No provider found for `_DiDraftStore`. Source: DynamicTestModule. Find more at https://v22.angular.dev/errors/NG0201

ɵNotFound: NG0201: No provider found for `_DiPlainService`. Find more at https://v22.angular.dev/errors/NG0201
```

(Seen in tests; the `_` before the class name comes from the build tool.) Means: Angular walked up all injectors and found no provider for the token. Common causes: `@Service({ autoProvided: false })` or `@Injectable()` without `providedIn`, and nobody lists the class in `providers`; or an `InjectionToken` without a factory that nobody provides. Fix: use `@Service()` / `@Injectable({ providedIn: 'root' })`, or add the class or token to the `providers` of the component or of `ApplicationConfig`. Read the `Path:` part when there is one. See [Services and dependency injection](14-services-and-dependency-injection.md#a-service-that-nobody-provides).

### NG0203: The `...` token injection failed. `inject()` function must be called from an injection context

```text
Error: NG0203: The `_DiLogger` token injection failed. `inject()` function must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

Means: `inject()` was called in a method, event handler, `ngOnInit` or callback. Fix: call it in a field initializer or the constructor and keep the result in a field. See [Services and dependency injection](14-services-and-dependency-injection.md#calling-inject-in-a-method).

### NG0200: Circular dependency detected

```text
Error: NG0200: Circular dependency detected for `_DiAuthService`. Source: DynamicTestModule. Path: _DiAuthService -> _DiUserService -> _DiAuthService. Find more at https://v22.angular.dev/errors/NG0200
```

Means: two (or more) services inject each other, so Angular cannot create either first. Fix: move the shared part into a third service that both use. See [Services and dependency injection](14-services-and-dependency-injection.md#two-services-that-need-each-other).

### TS2693: '...' only refers to a type, but is being used as a value here

```text
✘ [ERROR] TS2693: 'DiPaymentApi' only refers to a type, but is being used as a value here. [plugin angular-compiler]
```

Means: an `interface` (or `type`) was passed to `inject()`. Types do not exist when the app runs. Fix: use an `InjectionToken<DiPaymentApi>` or an `abstract` class as the token. See [Services and dependency injection](14-services-and-dependency-injection.md#using-an-interface-as-a-token).

## Chapter 15. Routing

From [Routing](15-routing.md).

### NG8001: 'router-outlet' is not a known element

```text
✘ [ERROR] NG8001: 'router-outlet' is not a known element:
1. If 'router-outlet' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. Find more at https://next.angular.dev/errors/NG8001 [plugin angular-compiler]
```

Means: the component uses `<router-outlet />` but does not import `RouterOutlet`. Fix: add `RouterOutlet` (from `@angular/router`) to the component's `imports`. See [Routing](15-routing.md#forgetting-to-import-routeroutlet).

### NG8002: Can't bind to 'routerLink' since it isn't a known property of 'a'

```text
✘ [ERROR] NG8002: Can't bind to 'routerLink' since it isn't a known property of 'a'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: the template uses `[routerLink]` but the component does not import `RouterLink`. With the plain attribute `routerLink="/x"` there is no error, but the link does nothing. Fix: add `RouterLink` to `imports`. See [Routing](15-routing.md#forgetting-to-import-routerlink).

### NG04014: please provide 'pathMatch'

```text
NG04014: Invalid configuration of route '{path: "", redirectTo: "home"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.
```

Means: a redirect on the empty path would catch every URL. Fix: `{ path: '', redirectTo: 'home', pathMatch: 'full' }`. See [Routing](15-routing.md#a-redirect-on--without-pathmatch-full).

### NG04014: path cannot start with a slash

```text
NG04014: Invalid configuration of route '/about': path cannot start with a slash
```

Means: a route `path` starts with `/`. Fix: write `path: 'about'`; only links start with `/`. See [Routing](15-routing.md#starting-a-path-with-).

### NG0950: Input is required but no value is available yet (routed component)

```text
NG0950: Input "id" is required but no value is available yet. Find more at https://v22.angular.dev/errors/NG0950
```

Means: a routed component reads a required input that the router never filled. Usually `withComponentInputBinding()` is missing in `provideRouter(...)`, or the input name differs from the route parameter name. See [Routing](15-routing.md#forgetting-withcomponentinputbinding).

### NG0203: inject() must be called from an injection context (after await)

```text
NG0203: The `_RoutingProductStore` token injection failed. `inject()` function must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

Means: a guard, resolver or other function called `inject()` after an `await`. Fix: call every `inject()` at the top of the function, before the first `await`. See [Routing](15-routing.md#calling-inject-after-await).

## Chapter 16. Forms

From [Forms](16-forms.md).

### TS2339: Property 'valid' does not exist on type 'FieldTree<...>'

```text
✘ [ERROR] TS2339: Property 'valid' does not exist on type 'FieldTree<string, string, "writable">'. [plugin angular-compiler]
```

Means: a Signal Forms field was used as if it were its state. Fix: call the field first: `myForm.email().valid()`, `myForm().invalid()`. See [Forms](16-forms.md#forgetting-to-call-the-field).

### NG8002: Can't bind to 'formField' since it isn't a known property of 'input'

```text
✘ [ERROR] NG8002: Can't bind to 'formField' since it isn't a known property of 'input'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: the component does not import the `FormField` directive. Fix: `imports: [FormField]` from `@angular/forms/signals`. See [Forms](16-forms.md#forgetting-to-import-formfield).

### TS2322: Type 'WritableSignal<string | null>' is not assignable ... ([formField])

```text
✘ [ERROR] TS2322: Type 'WritableSignal<string | null>' is not assignable to type '{ (): string; set: (v: string) => void; } | { (): number | null; set: (v: number | null) => void; }'.
  Type 'WritableSignal<string | null>' is not assignable to type '{ (): string; set: (v: string) => void; }'.
    Type 'string | null' is not assignable to type 'string'.
      Type 'null' is not assignable to type 'string'. [plugin angular-compiler]
```

Means: a text input is bound to a model field that can be `null`. Fix: start text fields with `''` and type them `string` (numbers with `0`, checkboxes with `false`). See [Forms](16-forms.md#null-in-the-model).

### NG8022: Setting the 'min' attribute is not allowed on nodes using the '[formField]' directive

```text
✘ [ERROR] NG8022: Setting the 'min' attribute is not allowed on nodes using the '[formField]' directive [plugin angular-compiler]
```

Means: `[formField]` sets `min`, `max`, `value`, `readonly`, `disabled` and similar attributes itself. Fix: remove the attribute and write a rule in the schema, such as `min(path.age, 16)`. See [Forms](16-forms.md#setting-min-max-value-or-readonly-on-the-element).

### NG8002: Can't bind to 'formGroup' since it isn't a known property of 'form'

```text
✘ [ERROR] NG8002: Can't bind to 'formGroup' since it isn't a known property of 'form'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: a reactive form is used without `ReactiveFormsModule`. Fix: add `ReactiveFormsModule` (from `@angular/forms`) to `imports`. See [Forms](16-forms.md#formgroup-without-reactiveformsmodule).

### NG01352: If ngModel is used within a form tag, either the name attribute must be set ...

```text
NG01352: If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">
```

Means: an `ngModel` input inside a `<form>` has no `name`. The component fails when it is created. Fix: give each such input a unique `name`. See [Forms](16-forms.md#ngmodel-inside-a-form-without-name).

## Chapter 17. HTTP and async data

From [HTTP and async data](17-http-and-async-data.md).

### Resource value read in an error state

```text
ERROR ResourceValueError: Resource is currently in an error state (see Error.cause for details): Http failure response for /http-demo/teas.json: 500 Internal Server Error
```

**Means:** the template or code called `value()` on a resource (`httpResource`, `resource`, `rxResource`) whose loader failed. `value()` throws in the `'error'` status, even with a `defaultValue`.
**Fix:** check `hasValue()` (or `error()`) before reading `value()`, for example `@if (teas.hasValue()) { ... } @else if (teas.error()) { ... }`.
See [HTTP and async data](17-http-and-async-data.md#reading-value-when-the-resource-has-an-error).

### NG0203 for `httpResource()`, `toSignal()` or `takeUntilDestroyed()`

```text
Error: NG0203: httpResource() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

```text
Error: NG0203: toSignal() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

```text
Error: NG0203: takeUntilDestroyed() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`. Find more at https://v22.angular.dev/errors/NG0203
```

**Means:** the function was called in a normal method (for example a click handler), outside an injection context.
**Fix:** create resources and `toSignal` signals as class fields. To load something else later, change a signal that the resource reads, or call `reload()`. In a method, pass a `DestroyRef` (injected in a field) to `takeUntilDestroyed(this.destroyRef)`.
See [HTTP and async data](17-http-and-async-data.md#creating-a-resource-in-a-method), [RxJS interop](18-rxjs-interop.md#calling-tosignal-in-a-method) and [RxJS interop](18-rxjs-interop.md#takeuntildestroyed-without-a-destroyref-in-a-method).

### Changing a request in an interceptor

```text
✘ [ERROR] TS2540: Cannot assign to 'headers' because it is a read-only property. [plugin angular-compiler]
```

**Means:** an interceptor tried to change the `HttpRequest`. Requests cannot be changed.
**Fix:** make a changed copy, `request.clone({ setHeaders: { Authorization: ... } })`, and pass the copy to `next`.
See [HTTP and async data](17-http-and-async-data.md#changing-the-request-in-an-interceptor).

### No matching request in a test

```text
Error: Expected one matching request for criteria "Match URL: /api/orders", found none.
```

**Means:** `HttpTestingController.expectOne` found no open request for that URL. Common causes: the code never subscribed; the resource has not sent its request yet (call `TestBed.tick()` first); `provideHttpClient(...)` is listed after `provideHttpClientTesting()`, so the request went to the real network; or the URL (with its `?params`) is different.
**Fix:** subscribe, call `TestBed.tick()` for resources, put `provideHttpClientTesting()` last, and match the full URL.
See [HTTP and async data](17-http-and-async-data.md#providehttpclienttesting-before-providehttpclient).

### Open requests left at the end of a test

```text
Error: Expected no open requests, found 1: GET /http-demo/teas/2.json
```

**Means:** `httpTesting.verify()` found a request that the test never answered.
**Fix:** answer every request with `expectOne(...).flush(...)`, or check that the code does not send an extra request.
See [HTTP and async data](17-http-and-async-data.md#testing-http-code-without-a-network).

## Chapter 18. RxJS interop

From [RxJS interop](18-rxjs-interop.md).

### Signal from `toSignal` may be `undefined`

```text
✘ [ERROR] TS2532: Object is possibly 'undefined'. [plugin angular-compiler]
```

**Means:** a `toSignal(...)` signal without `initialValue` holds `undefined` until the Observable gives its first value, so its type includes `undefined`.
**Fix:** pass `{ initialValue: ... }` (or `requireSync: true` for Observables that give a value at once), or check for `undefined`.
See [RxJS interop](18-rxjs-interop.md#forgetting-the-initial-value).

## Chapter 19. Testing

From [Testing](19-testing.md).

### Test timed out

```text
Error: Test timed out in 5000ms.
```

**Means:** the test waited for something that never happened. A common cause: `await fixture.whenStable()` while an HTTP request (or a resource) is still open; in a test, nobody answers it unless the test calls `flush`. Another cause: `whenStable()` with Vitest fake timers turned on.
**Fix:** use `TestBed.tick()` to update the page, answer the request, then `await fixture.whenStable()`. With fake timers, wait with `await vi.advanceTimersByTimeAsync(ms)`.
See [Testing](19-testing.md#waiting-while-a-request-is-open).

### Test checks the page before it is updated

```text
AssertionError: expected 'Hello, world!' to be 'Hello, Ada!' // Object.is equality
```

**Means:** the test changed something (a click, a signal) and checked the page at once. In a zoneless app Angular updates the page a moment later.
**Fix:** `await fixture.whenStable()` between the action and `expect`.
See [Testing](19-testing.md#asserting-before-the-page-is-updated).

### Setting an input in a test with `set`

```text
✘ [ERROR] TS2339: Property 'set' does not exist on type 'InputSignal<number>'. [plugin angular-compiler]
```

**Means:** inputs are read-only signals; only the parent can set them.
**Fix:** `fixture.componentRef.setInput('stars', 3)`, or `inputBinding('stars', signal)` in `TestBed.createComponent`.
See [Testing](19-testing.md#setting-an-input-with-set).

### Required input missing

```text
Error: NG0950: Input "stars" is required but no value is available yet. Find more at https://v22.angular.dev/errors/NG0950
```

**Means:** the component has `input.required()`, and the test (or parent) did not give a value before the template read it.
**Fix:** call `fixture.componentRef.setInput(...)` before the first `await fixture.whenStable()`; in a template, bind the input.
See [Testing](19-testing.md#forgetting-a-required-input).

### Configuring `TestBed` after using it

```text
Error: Cannot configure the test module when the test module has already been instantiated. Make sure you are not using `inject` before `TestBed.configureTestingModule`.
```

**Means:** `TestBed.configureTestingModule` was called after `TestBed.inject` or `TestBed.createComponent` (or twice, when an earlier `beforeEach` already started the test app).
**Fix:** call `configureTestingModule` first, in `beforeEach` or at the start of the test.
See [Testing](19-testing.md#configuring-testbed-too-late).

## Chapter 20. Performance, @defer and zoneless

From [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md).

### NG8020: Trigger with no target can only be placed on an @defer that has a @placeholder block with exactly one root element node

```text
✘ [ERROR] NG8020: Trigger with no target can only be placed on an @defer that has a @placeholder block with exactly one root element node [plugin angular-compiler]
```

Means: `on viewport`, `on interaction` or `on hover` without a target watch the `@placeholder`, but the placeholder has more than one root element. (Without any `@placeholder`, the error is NG8019.) Fix: wrap the placeholder in one element, or name a target: `on viewport(box)`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#a-placeholder-with-two-root-elements).

### NG8010: Trigger cannot find reference

```text
✘ [ERROR] NG8010: Trigger cannot find reference "help".
Check that an element with #help exists in the same template and it's accessible from the @defer block.
Deferred blocks can only access triggers in same view, a parent embedded view or the root view of the @placeholder block. [plugin angular-compiler]
```

Means: the name in `on hover(help)` (or `on viewport(...)`, `on interaction(...)`) is not a template reference variable of this template. Fix: use the exact name, for example `#helpButton` and `on hover(helpButton)`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#a-trigger-that-names-a-reference-that-does-not-exist).

### NG02954: NgOptimizedImage ... required attributes are missing: "width", "height"

```text
ERROR RuntimeError: NG02954: The NgOptimizedImage directive (activated on an <img> element with the `ngSrc="/photos/lake.jpg"`) has detected that these required attributes are missing: "width", "height". Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the `fill` attribute.
```

Means: an `<img ngSrc>` has no size. Fix: add `width` and `height`, or `fill` (with a positioned parent). See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngsrc-without-width-and-height).

### NG02950: NgOptimizedImage ... both `src` and `ngSrc` have been set

```text
ERROR RuntimeError: NG02950: The NgOptimizedImage directive (activated on an <img> element with the `ngSrc="/photos/lake.jpg"`) has detected that both `src` and `ngSrc` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets `src` itself based on the value of `ngSrc`. To fix this, please remove the `src` attribute.
```

Means: the `<img>` has `src` and `ngSrc`. Fix: remove `src`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#ngsrc-without-width-and-height).

### ReferenceError: IntersectionObserver is not defined (in tests)

```text
ERROR ReferenceError: IntersectionObserver is not defined
```

Means: a test renders a `@defer (on viewport)` block, and jsdom (the fake browser of the tests) has no `IntersectionObserver`. Fix: use `DeferBlockBehavior.Manual`, or put in a fake with `vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver)`. See [Performance, @defer and zoneless](20-performance-defer-and-zoneless.md#triggers-when-the-block-loads).

## Chapter 21. Server rendering and hydration

From [Server rendering and hydration](21-server-rendering-and-hydration.md).

### ReferenceError: localStorage is not defined (server rendering)

```text
ERROR ReferenceError: localStorage is not defined
```

Means: code that runs during server rendering uses a browser-only object (`localStorage`, `window`, `document`, `navigator`, `location`). These do not exist on the server. Fix: use it inside `afterNextRender` (components) or behind `isPlatformBrowser(inject(PLATFORM_ID))` (services). See [Server rendering and hydration](21-server-rendering-and-hydration.md#using-a-browser-api-directly-in-a-component).

## Chapter 22. Accessibility and Angular Aria

From [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md).

### NG8002: Can't bind to 'panel' since it isn't a known property of 'button'

```text
✘ [ERROR] NG8002: Can't bind to 'panel' since it isn't a known property of 'button'. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]
```

Means: the template uses an input of an Angular Aria directive (here `[panel]` of `ngAccordionTrigger`), but the component does not import the directive. Without an input binding there is no error, and the directive silently does nothing. Fix: add the directive (here `AccordionTrigger` from `@angular/aria/accordion`) to `imports`. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#forgetting-to-import-a-directive).

### TS2740: Type 'HTMLDivElement' is missing the following properties from type 'AccordionPanel'

```text
✘ [ERROR] TS2740: Type 'HTMLDivElement' is missing the following properties from type 'AccordionPanel': _elementRef, element, _deferredContentAware, _accordionContent, and 4 more. [plugin angular-compiler]
```

Means: `#returns` on `<div ngAccordionPanel>` points to the element, but `[panel]` needs the directive. Fix: `#returns="ngAccordionPanel"`. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#a-template-reference-without-the-directives-name).

### NG8008: Required input 'value' from directive Tab must be specified

```text
✘ [ERROR] NG8008: Required input 'value' from directive Tab must be specified. [plugin angular-compiler]
```

Means: an `ngTab` has no `value`. Fix: give every `ngTab` a `value` and the matching `ngTabPanel` the same `value`. See [Accessibility and Angular Aria](22-accessibility-and-angular-aria.md#a-tab-without-value).

## Chapter 23. Animations

From [Animations](23-animations.md).

### NG05105: Unexpected synthetic property @openClose found

```text
ERROR RuntimeError: NG05105: Unexpected synthetic property @openClose found. Please make sure that:
  - Make sure `provideAnimationsAsync()`, `provideAnimations()` or `provideNoopAnimations()` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named `@openClose` defined in the `animations` field of the `@Component` decorator (see https://angular.dev/api/core/Component#animations).
```

Means: a template uses an old `@angular/animations` trigger (`[@openClose]`), but the app or test has no animations provider. Fix: add `provideAnimationsAsync()` to `app.config.ts` (or `provideNoopAnimations()` in a test), or better, rewrite the animation with CSS and `animate.enter` / `animate.leave`. See [Animations](23-animations.md#using-an-old-trigger-without-the-animations-provider).

## Chapter 24. Internationalization (i18n)

From [Internationalization (i18n)](24-i18n.md).

### NG0701: Missing locale data

```text
ERROR RuntimeError: NG0701: Missing locale data for the locale "de".
```

Means: `LOCALE_ID` is set to a locale whose data Angular does not have (only `en-US` is built in), and a pipe such as `currency` needs it. Fix: `registerLocaleData(localeDe)` with `import localeDe from '@angular/common/locales/de'`, or build with `ng build --localize`, which loads the data for you. See [Internationalization (i18n)](24-i18n.md#setting-locale_id-without-locale-data).

## Chapter 25. Security

From [Security](25-security.md).

### NG0904: unsafe value used in a resource URL context

```text
ERROR RuntimeError: NG0904: unsafe value used in a resource URL context (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss). Find more at https://v22.angular.dev/errors/NG0904
```

Means: a plain string is bound to a property that loads code, such as `<iframe [src]>`. Angular never accepts a plain string there. Fix: check every part of the URL, then build a trusted value with `DomSanitizer.bypassSecurityTrustResourceUrl()`. Never trust user input directly. See [Security](25-security.md#binding-a-plain-string-to-an-iframe).

### Sanitizer warnings in development mode

```text
WARNING: sanitizing HTML stripped some content, see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss
WARNING: sanitizing unsafe URL value javascript:alert(1) (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss)
```

Means: Angular removed something dangerous from a value bound to `[innerHTML]`, or blocked a `javascript:` URL. This is the protection working, not a bug. Fix: nothing, if the value comes from users. If you built the value yourself and it should contain that content, find out why; trust it with `DomSanitizer` only after a careful check. See [Security](25-security.md#4-smallest-example).

## Chapter 26. Build, configure, deploy and update

From [Build, configure, deploy and update](26-build-configure-deploy-update.md).

### TS2307: Cannot find module '../environment/environment'

```text
✘ [ERROR] TS2307: Cannot find module '../environment/environment' or its corresponding type declarations. [plugin angular-compiler]
```

Means: the import path is wrong. The folder that `ng generate environments` creates is `environments` (with an "s"). Fix: `import { environment } from '../environments/environment';`, always the base file. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#a-wrong-path-to-the-environment-file).

### Budget exceeded

```text
▲ [WARNING] big.css exceeded maximum budget. Budget 4.00 kB was not met by 7.40 kB with a total of 11.40 kB.
✘ [ERROR] big.css exceeded maximum budget. Budget 8.00 kB was not met by 3.40 kB with a total of 11.40 kB.
```

Means: a part of the app is bigger than a limit in the `budgets` of `angular.json` (here one component's CSS, `anyComponentStyle`). The production build fails at the error limit. Fix: make the part smaller (split the component, move shared CSS to `styles.css`, lazy-load, `@defer`), or raise the limit if the size is really needed. See [Build, configure, deploy and update](26-build-configure-deploy-update.md#a-component-style-over-budget).

## Chapter 27. Smaller topics

From [Smaller topics](27-smaller-topics.md).

### NG2011: The component appears in 'imports', but is not standalone

```text
✘ [ERROR] NG2011: The component 'ModulesOldBadge' appears in 'imports', but is not standalone and cannot be imported directly. [plugin angular-compiler]
  It can be imported using its 'ModulesBadgeModule' NgModule instead.
```

Means: a component with `standalone: false` belongs to an NgModule and cannot be imported on its own. Fix: import its NgModule instead, or make the component standalone. See [Smaller topics](27-smaller-topics.md#importing-a-non-standalone-component-directly).

### NotSupportedError: This name has already been registered

```text
NotSupportedError: This name has already been registered in the registry.
```

Means: `customElements.define()` was called twice with the same tag name (this is the jsdom text; browsers throw a similar `NotSupportedError`). Fix: check with `customElements.get('my-tag')` before you define it. See [Smaller topics](27-smaller-topics.md#defining-the-same-custom-element-twice).
