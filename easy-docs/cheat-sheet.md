# Cheat sheet

The syntax of each chapter on one page. Each line links to the chapter's example file that uses
it. Read the chapter first: this page is for remembering, not for learning.

## 1. What Angular is

[Chapter 1](01-what-is-angular.md)

- `import { Component } from '@angular/core';` — load `Component` so the file can use it ([example](examples/src/app/01-what-is-angular/hello/hello.ts))
- `@Component({ selector: 'app-hello', template: '...' })` — turn the class below into a component
- `selector: 'app-hello'` — the tag that shows the component: `<app-hello />`
- `` template: `...` `` — the component's HTML; backticks allow several lines
- `export class IntroHello {}` — the component's class; `export` lets other files use it
- `(click)="like()"` and `{{ likes }}` — call a method on click, show a field ([example](examples/src/app/01-what-is-angular/like-button/like-button.ts))

## 2. Install Angular and make your first app

[Chapter 2](02-install-and-first-app.md)

- `node --version` — check Node.js; Angular 22 needs 22.22.3+, 24.15.0+ or 26
- `npm install -g @angular/cli@22.2` — install the Angular CLI for the whole computer
- `ng new my-first-app` — create a new workspace and app
- `ng serve --open` — start the development server at `http://localhost:4200/` and open the browser
- `ng generate component welcome` (`ng g c welcome`) — create a component in `src/app/welcome/`
- `ng build` — build for production into `dist/<project>/browser/`
- `ng test --watch=false` — run all `.spec.ts` tests once
- `imports: [RouterOutlet, FirstAppWelcome],` — list the components a template uses ([example](examples/src/app/02-install-and-first-app/finished-app/finished-app.ts))

## 3. The TypeScript you need

[Chapter 3](03-typescript-you-need.md)

- `function greet(name: string): string` — typed parameter and result ([example](examples/src/app/03-typescript-you-need/first-types/greet.ts))
- `interface Product { id: number; name: string; price: number; }` — the shape of an object ([example](examples/src/app/03-typescript-you-need/interfaces/product.ts))
- `type LoadState = 'loading' | 'ready' | 'error';` — a union of allowed values ([example](examples/src/app/03-typescript-you-need/unions/status.ts))
- `nickname?: string` — an optional property; its type is `string | undefined` ([example](examples/src/app/03-typescript-you-need/optional/user.ts))
- `protected readonly title = ...` — for members the template reads, never reassigned; use `private` for members only the class code uses
- `signal<string | null>(null)` — a generic: the type in `< >` says what the signal holds ([example](examples/src/app/03-typescript-you-need/generics/generics.ts))
- `import { withTax } from './prices';` — use a name exported by another file ([example](examples/src/app/03-typescript-you-need/modules/receipt.ts))
- `findPerson(name)?.address?.city ?? 'no city'` — stop at a missing value, then use a fallback ([example](examples/src/app/03-typescript-you-need/null-checks/null-checks.ts))

## 4. Components

[Chapter 4](04-components.md)

- `@Component({ selector: 'app-x', template: '...', styles: '...' })` — a component with inline template and styles ([example](examples/src/app/04-components/user-badge/user-badge.ts))
- `templateUrl: './recipe-card.html', styleUrl: './recipe-card.css'` — template and styles in their own files ([example](examples/src/app/04-components/recipe-card/recipe-card.ts))
- `imports: [CompRecipeCard]` + `<app-recipe-card />` — use another component ([example](examples/src/app/04-components/recipe-page/recipe-page.ts))
- `selector: 'button[app-delete-button]'` — attribute selector: the component is a native button ([example](examples/src/app/04-components/selectors/delete-button.ts))
- `host: { class: 'note', role: 'note' }` — static attributes on the host element ([example](examples/src/app/04-components/host/info-note.ts))
- `:host { display: block; }` — style the host element from the component's CSS
- `schemas: [CUSTOM_ELEMENTS_SCHEMA]` — allow unknown custom elements (web components) ([example](examples/src/app/04-components/web-component/map-panel.ts))
- `class CompVoteButton extends ClickCounter` + `override` — reuse a base class in a component ([example](examples/src/app/04-components/inheritance/vote-button.ts))

## 5. Templates and binding

[Chapter 5](05-templates-and-binding.md)

- `{{ name }}` — show a value as text ([example](examples/src/app/05-templates-and-binding/interpolation/interpolation.ts))
- `[disabled]="editing"` — set a DOM property from an expression ([example](examples/src/app/05-templates-and-binding/property-binding/profile-photo.ts))
- `[attr.colspan]="columns"` — set an HTML attribute; `null` removes it ([example](examples/src/app/05-templates-and-binding/attribute-binding/score-table.ts))
- `[class.done]="done"` / `[style.width.%]="progress"` — toggle a class / set a style with a unit ([example](examples/src/app/05-templates-and-binding/class-style/task-item.ts))
- `(input)="onInput($event)"` / `(keyup.enter)="search()"` — listen to events, with the event object or a key filter ([example](examples/src/app/05-templates-and-binding/events/search-box.ts))
- `host: { '[class.on]': 'on', '(click)': 'toggle()' }` — bindings and listeners on the host element ([example](examples/src/app/05-templates-and-binding/host-bindings/toggle-chip.ts))
- `@let total = price * quantity;` and `<input #noteInput>` — name a value / an element in the template ([example](examples/src/app/05-templates-and-binding/order-line/order-line.html))
- `<ng-container [ngTemplateOutlet]="tpl" [ngTemplateOutletContext]="{...}" />` — show a template fragment ([example](examples/src/app/05-templates-and-binding/fragments/address-list.ts))

## 6. Control flow

[Chapter 6](06-control-flow.md)

- `@if (cond) { ... } @else if (other) { ... } @else { ... }` — shows the first branch whose condition is true ([example](examples/src/app/06-control-flow/grade/grade.ts))
- `@if (user.address.city; as city) { ... }` — saves the condition value in a name ([example](examples/src/app/06-control-flow/alias/alias.ts))
- `@for (item of items; track item.id) { ... } @empty { ... }` — repeats content; `@empty` when the list is empty ([example](examples/src/app/06-control-flow/fruit-list/fruit-list.ts))
- `$index`, `$count`, `$first`, `$last`, `$even`, `$odd` — implicit variables inside `@for`
- `@switch (x) { @case ('a') { ... } @default { ... } }` — shows the case equal (`===`) to the value ([example](examples/src/app/06-control-flow/weekend/weekend.ts))
- `@default never;` — build error if a union value has no `@case` ([example](examples/src/app/06-control-flow/traffic-light/traffic-light.ts))
- `@let done = doneCount();` — a read-only name in the template ([example](examples/src/app/06-control-flow/task-list/task-list.html))
- `@boundary { ... } @error { {{ $error.message }} <button (click)="$reset()"> }` — catches errors of one part (developer preview) ([example](examples/src/app/06-control-flow/boundary/boundary-demo.ts))

## 7. Signals

[Chapter 7](07-signals.md)

- `count = signal(0)` / `count()` / `count.set(1)` / `count.update(v => v + 1)` — create, read and change a signal ([example](examples/src/app/07-signals/counter/counter.ts))
- `total = computed(() => a() + b())` — read-only signal made from other signals ([example](examples/src/app/07-signals/cart/cart.ts))
- `effect(() => localStorage.setItem('theme', this.theme()))` — side effect in the constructor ([example](examples/src/app/07-signals/theme-saver/theme-saver.ts))
- `untracked(this.userName)` — read a signal without depending on it ([example](examples/src/app/07-signals/theme-saver/theme-saver.ts))
- `linkedSignal(() => this.options()[0])` — writable value that resets when its source changes ([example](examples/src/app/07-signals/shipping/shipping-picker.ts))
- `linkedSignal<S, D>({ source, computation: (src, previous) => ... })` — keep the old choice when possible ([example](examples/src/app/07-signals/shipping/shipping-picker.ts))
- `debounced(this.query, 300)` — resource that follows a signal after it stops changing (experimental) ([example](examples/src/app/07-signals/search/search.ts))

## 8. Inputs, outputs and model

[Chapter 8](08-inputs-outputs-model.md)

- `name = input.required<string>()` / `role = input('guest')` — inputs from the parent ([example](examples/src/app/08-inputs-outputs-model/user-badge/user-badge.ts))
- `input(0, { transform: numberAttribute })`, `input(false, { transform: booleanAttribute })` — convert attribute text ([example](examples/src/app/08-inputs-outputs-model/product-card/product-card.ts))
- `input('', { alias: 'comment' })` — another name for an input in templates ([example](examples/src/app/08-inputs-outputs-model/product-card/product-card.ts))
- `rated = output<number>()` + `this.rated.emit(4)` + `(rated)="onRated($event)"` — custom event ([example](examples/src/app/08-inputs-outputs-model/star-rating/star-rating.ts))
- `value = model(1)` + `[(value)]="quantity"` — two-way binding with a signal ([example](examples/src/app/08-inputs-outputs-model/quantity/quantity-picker.ts))
- `(valueChange)="..."` — the output every model creates ([example](examples/src/app/08-inputs-outputs-model/quantity/quantity-picker.ts))
- `fixture.componentRef.setInput('name', 'Malika')` — set an input in a test ([example](examples/src/app/08-inputs-outputs-model/user-badge/user-badge.spec.ts))
- `@Input() title = ''` / `@Output() closed = new EventEmitter<void>()` — older decorator style ([example](examples/src/app/08-inputs-outputs-model/older/old-panel.ts))

## 9. Styling components

[Chapter 9](09-styling.md)

- `styles: \`p { color: darkred; }\`` — inline component CSS ([example](examples/src/app/09-styling/notice/notice.ts))
- `styleUrl: './profile-card.css'` — component CSS in its own file ([example](examples/src/app/09-styling/profile-card/profile-card.ts))
- `:host { display: block; }` / `:host(.compact) { ... }` — style the component's own tag ([example](examples/src/app/09-styling/profile-card/profile-card.css))
- `encapsulation: ViewEncapsulation.None` — make the component's CSS global ([example](examples/src/app/09-styling/encapsulation/cards.ts))
- `encapsulation: ViewEncapsulation.ShadowDom` — use the browser's Shadow DOM ([example](examples/src/app/09-styling/encapsulation/cards.ts))
- `host: { '[style.--accent]': 'accent()' }` + `var(--accent)` — pass a value into CSS ([example](examples/src/app/09-styling/profile-card/profile-card.ts))
- `ng add tailwindcss` — add Tailwind CSS to a project

## 10. Pipes

[Chapter 10](10-pipes.md)

- `{{ total | currency }}` + `imports: [CurrencyPipe]` — format a value with a pipe ([example](examples/src/app/10-pipes/receipt/receipt.ts))
- `{{ opening | date: 'd MMMM y, HH:mm' : 'UTC' }}` — pipe with parameters ([example](examples/src/app/10-pipes/built-in/built-in-pipes.ts))
- `{{ distance | number: '1.0-1' }}`, `{{ share | percent }}`, `{{ price | currency: 'EUR' }}` — numbers ([example](examples/src/app/10-pipes/built-in/built-in-pipes.ts))
- `{{ opening | date: 'EEEE' : 'UTC' | uppercase }}` — chain pipes left to right ([example](examples/src/app/10-pipes/built-in/built-in-pipes.ts))
- `@for (entry of obj | keyvalue; track entry.key)` / `{{ obj | json }}` — show objects ([example](examples/src/app/10-pipes/built-in/built-in-pipes.ts))
- `{{ (promise | async) ?? 'Loading…' }}` — show a Promise or Observable value ([example](examples/src/app/10-pipes/async/async-greeting.ts))
- `@Pipe({ name: 'initials' }) class InitialsPipe implements PipeTransform { transform(v) {...} }` — custom pure pipe ([example](examples/src/app/10-pipes/initials/initials-pipe.ts))
- `@Pipe({ name: 'joinNamesImpure', pure: false })` — impure pipe (avoid) ([example](examples/src/app/10-pipes/pure-impure/join-pipes.ts))

## 11. Directives

[Chapter 11](11-directives.md)

- `@Directive({ selector: '[appHighlight]', host: { '(mouseenter)': '...', '[style.background-color]': '...' } })` — attribute directive with host listeners and bindings ([example](examples/src/app/11-directives/highlight/highlight.ts))
- `readonly appColorHighlight = input('');` + `[appColorHighlight]="color"` — input with the selector's name: one binding switches the directive on and passes a value ([example](examples/src/app/11-directives/color-highlight/color-highlight.ts))
- `inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement` — the real host element, only for DOM methods like `select()` ([example](examples/src/app/11-directives/select-on-focus/select-on-focus.ts))
- `inject(TemplateRef)`, `inject(ViewContainerRef)`, `createEmbeddedView(t)`, `clear()` — a structural directive ([example](examples/src/app/11-directives/show-for/show-for.ts))
- `*appShowFor="['admin']; role: role()"` — microsyntax: sets inputs `appShowFor` and `appShowForRole` ([example](examples/src/app/11-directives/show-for/show-for.ts))
- `hostDirectives: [{ directive: DirTooltip, inputs: ['appTooltip: hint'], outputs: [...] }]` — compose directives on a host element ([example](examples/src/app/11-directives/composition/icon-button.ts))
- `'(document:click)': 'onDocumentClick($event)'` — listen on the whole document from `host` ([example](examples/src/app/11-directives/click-outside/click-outside.ts))

## 12. Content projection and queries

[Chapter 12](12-content-projection-and-queries.md)

- `<ng-content />` — where the parent's content goes ([example](examples/src/app/12-content-projection-and-queries/card/card.ts))
- `<ng-content select="[panel-title]" />` + `<h3 panel-title>` — named slot ([example](examples/src/app/12-content-projection-and-queries/panel/panel.ts))
- `<ng-content select="[panel-footer]">No actions.</ng-content>` — fallback content ([example](examples/src/app/12-content-projection-and-queries/panel/panel.ts))
- `<ng-container ngProjectAs="[panel-title]">` — send a group into a slot ([example](examples/src/app/12-content-projection-and-queries/panel/panel.ts))
- `box = viewChild.required<ElementRef<HTMLInputElement>>('box')` — one element of the own template ([example](examples/src/app/12-content-projection-and-queries/search-box/search-box.ts))
- `options = viewChildren(ProjVote)` + `computed(...)` — all child components, as a signal ([example](examples/src/app/12-content-projection-and-queries/votes/votes.ts))
- `more = contentChild(ProjMore)`, `tabs = contentChildren(ProjTab)` — search the projected content ([example](examples/src/app/12-content-projection-and-queries/tabs/tabs.ts))

## 13. Lifecycle

[Chapter 13](13-lifecycle.md)

- `class X implements OnInit, OnDestroy { ngOnInit() {...} ngOnDestroy() {...} }` — run code after inputs are set and before removal ([example](examples/src/app/13-lifecycle/clock/clock.ts))
- `inject(DestroyRef).onDestroy(() => clearInterval(id))` — cleanup next to the setup code ([example](examples/src/app/13-lifecycle/clock/clock-destroy-ref.ts))
- `ngOnChanges(changes: SimpleChanges<X>)` — `changes.price.previousValue` / `currentValue` / `firstChange` ([example](examples/src/app/13-lifecycle/price-tag/price-tag.ts))
- `linkedSignal({ source: this.price, computation: (price, previous) => ... })` — signal replacement for `ngOnChanges` ([example](examples/src/app/13-lifecycle/price-tag/price-tag.ts))
- `afterNextRender(() => element.nativeElement.focus())` — once, after Angular wrote the DOM; call it in a constructor ([example](examples/src/app/13-lifecycle/autofocus/autofocus.ts))
- `afterEveryRender(fn)` — after every render; `afterRenderEffect(fn)` — DOM work that follows signals
- Order: constructor → ngOnChanges → ngOnInit → ngDoCheck → ngAfterContentInit → ngAfterContentChecked → ngAfterViewInit → ngAfterViewChecked → afterNextRender → afterEveryRender ([example](examples/src/app/13-lifecycle/hook-log/hook-log.spec.ts))

## 14. Services and dependency injection

[Chapter 14](14-services-and-dependency-injection.md)

- `@Service() export class DiCartStore { ... }` + `inject(DiCartStore)` — one shared service for the app ([example](examples/src/app/14-services-and-dependency-injection/cart/cart-store.ts))
- `@Injectable({ providedIn: 'root' })` — older equivalent of `@Service()` ([example](examples/src/app/14-services-and-dependency-injection/logger/logger.ts))
- `new InjectionToken<T>('NAME', { factory: () => ... })` — key for a non-class value, with a root default ([example](examples/src/app/14-services-and-dependency-injection/tokens/tokens.ts))
- `{ provide: X, useValue | useClass | useFactory | useExisting: ... }` — the four provider kinds ([example](examples/src/app/14-services-and-dependency-injection/provider-kinds/provider-kinds.ts))
- `@Component({ providers: [DiDraftStore] })` — one service object per component instance ([example](examples/src/app/14-services-and-dependency-injection/scoped/note-editor.ts))
- `inject(X, { optional: true })` / `{ self: true }` / `{ skipSelf: true }` / `{ host: true }` — change where Angular looks ([example](examples/src/app/14-services-and-dependency-injection/modifiers/modifiers.ts))
- `injectAsync(() => import('./x').then((m) => m.X))` — load a service only when first used ([example](examples/src/app/14-services-and-dependency-injection/lazy/report.ts))
- `TestBed.configureTestingModule({ providers: [{ provide: STORAGE, useValue: fake }] })` — replace a dependency in a test ([example](examples/src/app/14-services-and-dependency-injection/favorites/recipe-list.spec.ts))

## 15. Routing

[Chapter 15](15-routing.md)

- `{ path: 'about', component: About, title: 'About us' }` — one route: a path, its component and the tab title ([example](examples/src/app/15-routing/basics/basic.routes.ts))
- `provideRouter(routes, withComponentInputBinding())` — turns the router on; route params, query params and resolved data become inputs ([example](examples/src/app/15-routing/shop/shop.config.ts))
- `<router-outlet />` and `<a routerLink="/about" routerLinkActive="active">` — where pages appear, and router links ([example](examples/src/app/15-routing/basics/basic-shell.ts))
- `[routerLink]="['/products', product.id]"` / `[queryParams]="{ sort: 'price' }"` — links with route and query parameters ([example](examples/src/app/15-routing/shop/product-list.ts))
- `inject(Router).navigate(['/products'], { queryParams })` / `navigateByUrl('/x')` — navigate from code ([example](examples/src/app/15-routing/shop/product-detail.ts))
- `{ path: '', redirectTo: 'home', pathMatch: 'full' }` and `{ path: '**', component: NotFound }` — redirect and "not found" route, last ([example](examples/src/app/15-routing/redirects/redirect.routes.ts))
- `loadComponent: () => import('./page')` / `loadChildren: () => import('./x.routes').then((m) => m.routes)` — lazy loading ([example](examples/src/app/15-routing/lazy/lazy.routes.ts))
- `canActivate: [authGuard]`, `resolve: { product: productResolver }` — guards and resolvers on a route ([example](examples/src/app/15-routing/guards/guards.ts))

## 16. Forms

[Chapter 16](16-forms.md)

- `model = signal({ email: '' }); myForm = form(this.model, (path) => { required(path.email); })` — a Signal Form with rules ([example](examples/src/app/16-forms/signup/signup.ts))
- `<input [formField]="myForm.email" />` with `imports: [FormField]` — connect a control to a field, both ways ([example](examples/src/app/16-forms/signup/signup.ts))
- `myForm.email().valid()`, `.errors()`, `.touched()`, `.dirty()`, `.pending()`; `myForm().invalid()` — call a field to read its state
- `minLength(path.x, 3, { message: '...', when: ({ valueOf }) => ... })` and `validate(path.x, ({ value }) => ...)` — built-in and custom rules ([example](examples/src/app/16-forms/validation/registration.ts))
- `validateAsync(path.x, { params, factory, onSuccess, onError })` with `debounce(path.x, 200)` — async check ([example](examples/src/app/16-forms/async/username.ts))
- `hidden(...)`, `disabled(...)`, `readonly(...)` — field logic ([example](examples/src/app/16-forms/logic/order.ts))
- `<form [formRoot]="myForm">` + `form(model, schema, { submission: { action: async (f) => ... } })` — submit ([example](examples/src/app/16-forms/submit/contact.ts))
- `new FormGroup({ email: new FormControl('', { nonNullable: true, validators: [...] }) })` / `[(ngModel)]="x" name="x"` — reactive and template-driven forms ([example](examples/src/app/16-forms/reactive/reactive-login.ts))

## 17. HTTP and async data

[Chapter 17](17-http-and-async-data.md)

- `teas = httpResource<Tea[]>(() => '/api/teas')` — load data as signals: `value()`, `hasValue()`, `isLoading()`, `error()`, `status()` ([example](examples/src/app/17-http-and-async-data/smallest/tea-list.ts))
- `this.http.get<Tea[]>(url)` — prepare a typed GET request; returns an Observable ([example](examples/src/app/17-http-and-async-data/client/tea-api.ts))
- `this.http.post<Tea>(url, body).subscribe({ next, error })` — send data; nothing happens without `subscribe` ([example](examples/src/app/17-http-and-async-data/client/add-tea.ts))
- `resource({ params: () => id(), loader: ({ params, abortSignal }) => load(params, abortSignal) })` — any Promise as signals ([example](examples/src/app/17-http-and-async-data/resource/quote-box.ts))
- `rxResource({ params, stream: ({ params }) => api.getTea(params) })` — a resource from an Observable ([example](examples/src/app/17-http-and-async-data/rx-resource/tea-detail.ts))
- `resource.reload()` — run the loader again; the old value stays during `'reloading'`
- `provideHttpClient(withInterceptors([authInterceptor]))` — configure HTTP with interceptor functions ([example](examples/src/app/17-http-and-async-data/interceptors/http.config.ts))
- `providers: [provideHttpClientTesting()]` + `TestBed.inject(HttpTestingController).expectOne(url).flush(data)` — answer requests in tests ([example](examples/src/app/17-http-and-async-data/client/tea-api.spec.ts))

## 18. RxJS interop

[Chapter 18](18-rxjs-interop.md)

- `toSignal(obs$, { initialValue: 0 })` — Observable → signal, cleaned up automatically ([example](examples/src/app/18-rxjs-interop/ticker/ticker.ts))
- `toObservable(signal)` — signal → Observable of settled values ([example](examples/src/app/18-rxjs-interop/search/tea-search.ts))
- `obs$.pipe(debounceTime(300), switchMap((q) => http.get(...)))` — wait for typing to stop, cancel old requests ([example](examples/src/app/18-rxjs-interop/search/tea-search.ts))
- `obs$.pipe(takeUntilDestroyed()).subscribe(...)` — stop a subscription with the component; in a method pass `this.destroyRef` ([example](examples/src/app/18-rxjs-interop/notifications/notification-list.ts))
- `outputFromObservable(obs$)` — an output that fires for every value ([example](examples/src/app/18-rxjs-interop/outputs/word-input.ts))
- `outputToObservable(component.output)` — an Observable of an output's values ([example](examples/src/app/18-rxjs-interop/outputs/word-input.spec.ts))
- `new Subject<T>()`, `subject.next(v)`, `subject.asObservable()` — push events to listeners ([example](examples/src/app/18-rxjs-interop/basics/streams.ts))

## 19. Testing

[Chapter 19](19-testing.md)

- `ng test --watch=false --include='src/app/cart/**'` — run some tests once
- `const fixture = TestBed.createComponent(C); await fixture.whenStable();` — create and render a component ([example](examples/src/app/19-testing/greeting/greeting.spec.ts))
- Act → `await fixture.whenStable()` → `expect(...)` — the zoneless test pattern ([example](examples/src/app/19-testing/greeting/greeting.spec.ts))
- `fixture.componentRef.setInput('stars', 3)` — set an input in a test ([example](examples/src/app/19-testing/rating/rating.spec.ts))
- `TestBed.createComponent(C, { bindings: [inputBinding('x', sig), outputBinding('y', fn)] })` — bind inputs and outputs ([example](examples/src/app/19-testing/rating/rating.spec.ts))
- `TestBed.configureTestingModule({ providers: [{ provide: Dep, useValue: { m: vi.fn() } }] })` — replace a dependency with a fake ([example](examples/src/app/19-testing/services/checkout.spec.ts))
- `vi.useFakeTimers(); await vi.advanceTimersByTimeAsync(3000);` — move fake time forward ([example](examples/src/app/19-testing/timers/toast.spec.ts))
- `await TestbedHarnessEnvironment.loader(fixture).getHarness(MyHarness)` — use a component harness ([example](examples/src/app/19-testing/harness/counter.spec.ts))

## 20. Performance, @defer and zoneless

[Chapter 20](20-performance-defer-and-zoneless.md)

- `@defer (on interaction) { <app-x /> } @placeholder { <button>Show</button> }` — load a component's code only when the user clicks the placeholder ([example](examples/src/app/20-performance-defer-and-zoneless/comments/article.ts))
- `@placeholder (minimum 500ms)` / `@loading (after 100ms; minimum 1s)` / `@error` — what to show before, during and after a failed load ([example](examples/src/app/20-performance-defer-and-zoneless/states/profile-card.ts))
- `@defer (on hover(helpButton))` — watch another element, named with `#helpButton` ([example](examples/src/app/20-performance-defer-and-zoneless/triggers/triggers.ts))
- `@defer (when showMap(); prefetch on idle)` — download early, show when the condition is true ([example](examples/src/app/20-performance-defer-and-zoneless/exercise/store-finder.ts))
- `TestBed.configureTestingModule({ deferBlockBehavior: DeferBlockBehavior.Manual })` + `(await fixture.getDeferBlocks())[0].render(DeferBlockState.Complete)` — step through `@defer` states in a test ([example](examples/src/app/20-performance-defer-and-zoneless/states/profile-card.spec.ts))
- `this.message.set('Done')` — in a zoneless app, signals tell Angular to update the page; plain fields in timers do not ([example](examples/src/app/20-performance-defer-and-zoneless/zoneless/timers.ts))
- `<img ngSrc="/photos/lake.jpg" width="1200" height="600" priority alt="..." />` — optimized image, loaded first ([example](examples/src/app/20-performance-defer-and-zoneless/images/photos.ts))
- `{ provide: IMAGE_LOADER, useValue: (config) => url }` — build image URLs (and a `srcset`) for an image server ([example](examples/src/app/20-performance-defer-and-zoneless/product-page/image-loader.ts))

## 21. Server rendering and hydration

[Chapter 21](21-server-rendering-and-hydration.md)

- `ng new my-app --ssr` / `ng add @angular/ssr` — create an app with server rendering, or add it to an existing app
- `renderApplication(bootstrap, { document, url })` — render an app to an HTML string on the server ([example](examples/src/app/21-server-rendering-and-hydration/render-to-string/render-welcome.ts))
- `providers: [provideClientHydration()]` — turn on hydration, event replay and incremental hydration ([example](examples/src/app/21-server-rendering-and-hydration/hydration/app.config.ts))
- `@defer (on viewport; hydrate on viewport) { ... }` — render on the server, hydrate in the browser when visible ([example](examples/src/app/21-server-rendering-and-hydration/incremental/news-page.ts))
- `afterNextRender(() => { ...window... })` — browser-only code in a component ([example](examples/src/app/21-server-rendering-and-hydration/exercise/window-width.ts))
- `isPlatformBrowser(inject(PLATFORM_ID))` — check in a service whether the code runs in the browser ([example](examples/src/app/21-server-rendering-and-hydration/browser-only/visit-storage.ts))
- `mergeApplicationConfig(appConfig, { providers: [provideServerRendering()] })` — build the server config from the app config ([example](examples/src/app/21-server-rendering-and-hydration/recipe-page/render-recipe-page.ts))

## 22. Accessibility and Angular Aria

[Chapter 22](22-accessibility-and-angular-aria.md)

- `<button type="button" [aria-pressed]="muted()">Mute</button>` — a toggle button that screen readers understand ([example](examples/src/app/22-accessibility-and-angular-aria/mute-button/mute-button.ts))
- `<button type="button" aria-label="Next song">⏭</button>` — give an icon button an accessible name ([example](examples/src/app/22-accessibility-and-angular-aria/mute-button/mute-button.ts))
- `<p role="status">{{ status() }}</p>` — a live region: screen readers read its new text ([example](examples/src/app/22-accessibility-and-angular-aria/search/search.ts))
- `<div ngTabs><ul ngTabList [(selectedTab)]="tab"><li ngTab value="a">…</li></ul><div ngTabPanel value="a"><ng-template ngTabContent>…</ng-template></div></div>` — accessible tabs ([example](examples/src/app/22-accessibility-and-angular-aria/tabs/recipe-tabs.html))
- `<button ngAccordionTrigger [panel]="p">…</button><div ngAccordionPanel #p="ngAccordionPanel">` — one accordion section ([example](examples/src/app/22-accessibility-and-angular-aria/accordion/faq.html))
- `<ul ngListbox [(value)]="items" [multi]="true"><li ngOption [value]="x">` — a listbox; `value` is always an array ([example](examples/src/app/22-accessibility-and-angular-aria/listbox/toppings.ts))
- `<div ngToolbar aria-label="…"><button ngToolbarWidget>` — a toolbar with one Tab stop and arrow keys ([example](examples/src/app/22-accessibility-and-angular-aria/note-editor/note-editor.html))
- `[inert] { display: none; }` — hide the tab panels that Angular Aria marks as inactive ([example](examples/src/app/22-accessibility-and-angular-aria/tabs/recipe-tabs.css))

## 23. Animations

[Chapter 23](23-animations.md)

- `<p animate.enter="fade-in" animate.leave="fade-out">` — add a CSS class while an element appears; play a class before it is removed ([example](examples/src/app/23-animations/fade-note/fade-note.html))
- `.fade-in { animation: fade-in 300ms ease-out; }` + `@keyframes fade-in { from {...} to {...} }` — a keyframe animation in plain CSS ([example](examples/src/app/23-animations/fade-note/fade-note.css))
- `@starting-style { .slide-in { opacity: 0; } }` — the "before" state for a transition on enter ([example](examples/src/app/23-animations/fade-note/slide-note.css))
- `[class.open]="open()"` + `transition: grid-template-rows 300ms` — animate a change of state with a class ([example](examples/src/app/23-animations/open-panel/open-panel.css))
- `(animate.leave)="slideAway($event)"` … `event.animationComplete()` — animate leaving with your own code ([example](examples/src/app/23-animations/toast-list/toast-list.ts))
- `@media (prefers-reduced-motion: reduce) { ... }` — less motion for users who ask for it ([example](examples/src/app/23-animations/open-panel/open-panel.css))
- `provideRouter(routes, withViewTransitions())` — animated page changes (developer preview) ([example](examples/src/app/23-animations/view-transitions/view-transitions.config.ts))

## 24. Internationalization (i18n)

[Chapter 24](24-i18n.md)

- `<h1 i18n="Description@@customId">Text</h1>` / `i18n-title title="..."` — mark element text and attributes for translation ([example](examples/src/app/24-i18n/welcome/welcome.ts))
- `` $localize`:description@@id:Text` `` — mark text in TypeScript code ([example](examples/src/app/24-i18n/welcome/welcome.ts))
- `{count(), plural, =0 {...} =1 {...} other {{{ count() }} ...}}` — plural ICU expression; always end with `other` ([example](examples/src/app/24-i18n/ticket-summary/ticket-summary.ts))
- `{kind(), select, adult {...} child {...} other {...}}` — select ICU expression ([example](examples/src/app/24-i18n/ticket-summary/ticket-summary.ts))
- `registerLocaleData(localeUz)` + `{ provide: LOCALE_ID, useValue: 'uz' }` — format numbers, dates and money for a locale ([example](examples/src/app/24-i18n/locale-prices/locale.config.ts))
- `{{ price | currency: 'UZS' : 'code' : '1.0-0' : 'en-US' }}` — override the locale for one value ([example](examples/src/app/24-i18n/locale-prices/locale-prices.ts))
- `ng extract-i18n --output-path src/locale` / `ng build --localize` — extract texts; build one app per language
- `"i18n": { "sourceLocale": "en-US", "locales": { "uz": "src/locale/messages.uz.xlf" } }` — languages in `angular.json` ([example](examples/src/app/24-i18n/config/angular-i18n.json))

## 25. Security

[Chapter 25](25-security.md)

- `{{ value }}` shows text; `[innerHTML]="value"` is sanitized; `[href]` gets `unsafe:` for `javascript:` URLs ([example](examples/src/app/25-security/comment-preview/comment-preview.ts))
- `inject(DomSanitizer).bypassSecurityTrustResourceUrl(url)` — trust a URL you built from checked parts only ([example](examples/src/app/25-security/trusted-video/trusted-video.ts))
- `sanitizer.sanitize(SecurityContext.HTML, html)` — clean HTML in code before a DOM API uses it ([example](examples/src/app/25-security/exercise/html-cleaner.ts))
- `{ provide: CSP_NONCE, useValue: nonce }` or `<app-root ngCspNonce="...">` — let a strict CSP accept Angular's styles ([example](examples/src/app/25-security/csp-nonce/csp-nonce.spec.ts))
- `"security": { "autoCsp": true }` in `angular.json` — CSP with script hashes for static hosting
- `provideHttpClient(withXsrfConfiguration({ cookieName, headerName }))` — XSRF cookie and header names ([example](examples/src/app/25-security/xsrf/xsrf.config.ts))

## 26. Build, configure, deploy and update

[Chapter 26](26-build-configure-deploy-update.md)

- `ng build` / `ng build -c development` — production build into `dist/<project>/browser/`; debuggable development build
- `ng generate environments` + `import { environment } from '../environments/environment'` — per-build settings, swapped by `fileReplacements` ([example](examples/src/app/26-build-configure-deploy-update/api-banner/api-banner.ts))
- `isDevMode()` — `true` in development builds and tests ([example](examples/src/app/26-build-configure-deploy-update/api-banner/api-banner.ts))
- `{ "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" }` — a size budget ([example](examples/src/app/26-build-configure-deploy-update/config/budgets.json))
- `ng serve --open --port 4300 --proxy-config src/proxy.conf.json` — common development server options
- `ng build --base-href /museum/` — app in a sub-folder; configure the server to fall back to `index.html`
- `provideAppInitializer(() => inject(BuildConfigStore).load())` — load runtime settings before the app starts ([example](examples/src/app/26-build-configure-deploy-update/runtime-config/runtime-config.ts))
- `ng version` / `ng update @angular/core@N @angular/cli@N` — check versions; update one major version at a time

## 27. Smaller topics

[Chapter 27](27-smaller-topics.md)

- `customElements.define('museum-greeting', createCustomElement(Cmp, { injector }))` — a component as a custom element ([example](examples/src/app/27-smaller-topics/elements/define-elements.ts))
- `ng add @angular/pwa` + `provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() })` — offline caching ([example](examples/src/app/27-smaller-topics/service-worker/sw.config.ts))
- `inject(SwUpdate).versionUpdates` (`VERSION_READY`) — learn that a new version is ready ([example](examples/src/app/27-smaller-topics/service-worker/update-banner.ts))
- `ng generate web-worker app` — a background thread; `worker.postMessage(data)` / `onmessage`
- `@NgModule({ declarations, imports, exports })` with `standalone: false` — read older code ([example](examples/src/app/27-smaller-topics/ngmodules/badge.module.ts))
- `<ol cdkDropList (cdkDropListDropped)="drop($event)">` + `<li cdkDrag>` + `moveItemInArray(list, from, to)` — sortable list ([example](examples/src/app/27-smaller-topics/drag-drop/stop-list.ts))
- `cdkDropListGroup` + `[cdkDropListData]` + `transferArrayItem(...)` — move items between lists ([example](examples/src/app/27-smaller-topics/exercise/plan-board.ts))
