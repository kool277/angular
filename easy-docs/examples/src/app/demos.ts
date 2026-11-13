// The demo pages of the guide's examples. Every chapter's demos load only when you open them.
import {Routes} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';

export interface ChapterDemos {
  chapter: string;
  demos: {name: string; path: string}[];
}

export const demoRoutes: Routes = [
  {
    path: '01/intro-hello',
    title: 'IntroHello',
    loadComponent: () => import('./01-what-is-angular/hello/hello').then((m) => m.IntroHello),
  },
  {
    path: '01/intro-like-button',
    title: 'IntroLikeButton',
    loadComponent: () =>
      import('./01-what-is-angular/like-button/like-button').then((m) => m.IntroLikeButton),
  },
  {
    path: '01/intro-greeting-card',
    title: 'IntroGreetingCard',
    loadComponent: () =>
      import('./01-what-is-angular/try-it/greeting-card').then((m) => m.IntroGreetingCard),
  },
  {
    path: '02/first-app',
    title: 'FirstApp',
    loadComponent: () =>
      import('./02-install-and-first-app/first-app/first-app').then((m) => m.FirstApp),
  },
  {
    path: '02/first-app-finished',
    title: 'FirstAppFinished',
    loadComponent: () =>
      import('./02-install-and-first-app/finished-app/finished-app').then(
        (m) => m.FirstAppFinished,
      ),
  },
  {
    path: '02/first-app-with-footer',
    title: 'FirstAppWithFooter',
    loadComponent: () =>
      import('./02-install-and-first-app/try-it/app-with-footer/app-with-footer').then(
        (m) => m.FirstAppWithFooter,
      ),
  },
  {
    path: '03/ts-cart-summary',
    title: 'TsCartSummary',
    loadComponent: () =>
      import('./03-typescript-you-need/cart/cart-summary').then((m) => m.TsCartSummary),
  },
  {
    path: '04/comp-user-badge',
    title: 'CompUserBadge',
    loadComponent: () =>
      import('./04-components/user-badge/user-badge').then((m) => m.CompUserBadge),
  },
  {
    path: '04/comp-recipe-page',
    title: 'CompRecipePage',
    loadComponent: () =>
      import('./04-components/recipe-page/recipe-page').then((m) => m.CompRecipePage),
  },
  {
    path: '04/comp-selector-demo',
    title: 'CompSelectorDemo',
    loadComponent: () =>
      import('./04-components/selectors/selector-demo').then((m) => m.CompSelectorDemo),
  },
  {
    path: '04/comp-info-note',
    title: 'CompInfoNote',
    loadComponent: () => import('./04-components/host/info-note').then((m) => m.CompInfoNote),
  },
  {
    path: '04/comp-map-panel',
    title: 'CompMapPanel',
    loadComponent: () =>
      import('./04-components/web-component/map-panel').then((m) => m.CompMapPanel),
  },
  {
    path: '04/comp-vote-button',
    title: 'CompVoteButton',
    loadComponent: () =>
      import('./04-components/inheritance/vote-button').then((m) => m.CompVoteButton),
  },
  {
    path: '04/comp-recipe-home',
    title: 'CompRecipeHome',
    loadComponent: () => import('./04-components/layout/recipe-home').then((m) => m.CompRecipeHome),
  },
  {
    path: '04/comp-contacts-page',
    title: 'CompContactsPage',
    loadComponent: () =>
      import('./04-components/try-it/contacts-page/contacts-page').then((m) => m.CompContactsPage),
  },
  {
    path: '05/tpl-greeting',
    title: 'TplGreeting',
    loadComponent: () =>
      import('./05-templates-and-binding/greeting/greeting').then((m) => m.TplGreeting),
  },
  {
    path: '05/tpl-profile-photo',
    title: 'TplProfilePhoto',
    loadComponent: () =>
      import('./05-templates-and-binding/property-binding/profile-photo').then(
        (m) => m.TplProfilePhoto,
      ),
  },
  {
    path: '05/tpl-score-table',
    title: 'TplScoreTable',
    loadComponent: () =>
      import('./05-templates-and-binding/attribute-binding/score-table').then(
        (m) => m.TplScoreTable,
      ),
  },
  {
    path: '05/tpl-task-item',
    title: 'TplTaskItem',
    loadComponent: () =>
      import('./05-templates-and-binding/class-style/task-item').then((m) => m.TplTaskItem),
  },
  {
    path: '05/tpl-search-box',
    title: 'TplSearchBox',
    loadComponent: () =>
      import('./05-templates-and-binding/events/search-box').then((m) => m.TplSearchBox),
  },
  {
    path: '05/tpl-toggle-chip',
    title: 'TplToggleChip',
    loadComponent: () =>
      import('./05-templates-and-binding/host-bindings/toggle-chip').then((m) => m.TplToggleChip),
  },
  {
    path: '05/tpl-expressions',
    title: 'TplExpressions',
    loadComponent: () =>
      import('./05-templates-and-binding/expressions/expressions').then((m) => m.TplExpressions),
  },
  {
    path: '05/tpl-greeter',
    title: 'TplGreeter',
    loadComponent: () =>
      import('./05-templates-and-binding/variables/greeter').then((m) => m.TplGreeter),
  },
  {
    path: '05/tpl-address-list',
    title: 'TplAddressList',
    loadComponent: () =>
      import('./05-templates-and-binding/fragments/address-list').then((m) => m.TplAddressList),
  },
  {
    path: '05/tpl-profile-switch',
    title: 'TplProfileSwitch',
    loadComponent: () =>
      import('./05-templates-and-binding/fragments/profile-switch').then((m) => m.TplProfileSwitch),
  },
  {
    path: '05/tpl-order-line',
    title: 'TplOrderLine',
    loadComponent: () =>
      import('./05-templates-and-binding/order-line/order-line').then((m) => m.TplOrderLine),
  },
  {
    path: '05/tpl-char-counter',
    title: 'TplCharCounter',
    loadComponent: () =>
      import('./05-templates-and-binding/try-it/char-counter').then((m) => m.TplCharCounter),
  },
  {
    path: '06/control-flow-login-status',
    title: 'ControlFlowLoginStatus',
    loadComponent: () =>
      import('./06-control-flow/login-status/login-status').then((m) => m.ControlFlowLoginStatus),
  },
  {
    path: '06/control-flow-grade',
    title: 'ControlFlowGrade',
    loadComponent: () => import('./06-control-flow/grade/grade').then((m) => m.ControlFlowGrade),
  },
  {
    path: '06/control-flow-alias',
    title: 'ControlFlowAlias',
    loadComponent: () => import('./06-control-flow/alias/alias').then((m) => m.ControlFlowAlias),
  },
  {
    path: '06/control-flow-fruit-list',
    title: 'ControlFlowFruitList',
    loadComponent: () =>
      import('./06-control-flow/fruit-list/fruit-list').then((m) => m.ControlFlowFruitList),
  },
  {
    path: '06/control-flow-traffic-light',
    title: 'ControlFlowTrafficLight',
    loadComponent: () =>
      import('./06-control-flow/traffic-light/traffic-light').then(
        (m) => m.ControlFlowTrafficLight,
      ),
  },
  {
    path: '06/control-flow-weekend',
    title: 'ControlFlowWeekend',
    loadComponent: () =>
      import('./06-control-flow/weekend/weekend').then((m) => m.ControlFlowWeekend),
  },
  {
    path: '06/control-flow-boundary-demo',
    title: 'ControlFlowBoundaryDemo',
    loadComponent: () =>
      import('./06-control-flow/boundary/boundary-demo').then((m) => m.ControlFlowBoundaryDemo),
  },
  {
    path: '06/control-flow-task-list',
    title: 'ControlFlowTaskList',
    loadComponent: () =>
      import('./06-control-flow/task-list/task-list').then((m) => m.ControlFlowTaskList),
  },
  {
    path: '06/control-flow-inbox',
    title: 'ControlFlowInbox',
    loadComponent: () => import('./06-control-flow/exercise/inbox').then((m) => m.ControlFlowInbox),
  },
  {
    path: '07/signals-counter',
    title: 'SignalsCounter',
    loadComponent: () => import('./07-signals/counter/counter').then((m) => m.SignalsCounter),
  },
  {
    path: '07/signals-theme-saver',
    title: 'SignalsThemeSaver',
    loadComponent: () =>
      import('./07-signals/theme-saver/theme-saver').then((m) => m.SignalsThemeSaver),
  },
  {
    path: '07/signals-shipping-picker',
    title: 'SignalsShippingPicker',
    loadComponent: () =>
      import('./07-signals/shipping/shipping-picker').then((m) => m.SignalsShippingPicker),
  },
  {
    path: '07/signals-search',
    title: 'SignalsSearch',
    loadComponent: () => import('./07-signals/search/search').then((m) => m.SignalsSearch),
  },
  {
    path: '07/signals-cart',
    title: 'SignalsCart',
    loadComponent: () => import('./07-signals/cart/cart').then((m) => m.SignalsCart),
  },
  {
    path: '07/signals-message-box',
    title: 'SignalsMessageBox',
    loadComponent: () =>
      import('./07-signals/exercise/message-box').then((m) => m.SignalsMessageBox),
  },
  {
    path: '08/inputs-user-badge-demo',
    title: 'InputsUserBadgeDemo',
    loadComponent: () =>
      import('./08-inputs-outputs-model/user-badge/user-badge').then((m) => m.InputsUserBadgeDemo),
  },
  {
    path: '08/inputs-product-card-demo',
    title: 'InputsProductCardDemo',
    loadComponent: () =>
      import('./08-inputs-outputs-model/product-card/product-card').then(
        (m) => m.InputsProductCardDemo,
      ),
  },
  {
    path: '08/inputs-star-rating-demo',
    title: 'InputsStarRatingDemo',
    loadComponent: () =>
      import('./08-inputs-outputs-model/star-rating/star-rating').then(
        (m) => m.InputsStarRatingDemo,
      ),
  },
  {
    path: '08/inputs-quantity-demo',
    title: 'InputsQuantityDemo',
    loadComponent: () =>
      import('./08-inputs-outputs-model/quantity/quantity-picker').then(
        (m) => m.InputsQuantityDemo,
      ),
  },
  {
    path: '08/inputs-old-panel-demo',
    title: 'InputsOldPanelDemo',
    loadComponent: () =>
      import('./08-inputs-outputs-model/older/old-panel').then((m) => m.InputsOldPanelDemo),
  },
  {
    path: '08/inputs-todo-page',
    title: 'InputsTodoPage',
    loadComponent: () =>
      import('./08-inputs-outputs-model/todo/todo-page').then((m) => m.InputsTodoPage),
  },
  {
    path: '08/inputs-like-demo',
    title: 'InputsLikeDemo',
    loadComponent: () =>
      import('./08-inputs-outputs-model/exercise/like-button').then((m) => m.InputsLikeDemo),
  },
  {
    path: '09/styling-notice-demo',
    title: 'StylingNoticeDemo',
    loadComponent: () => import('./09-styling/notice/notice').then((m) => m.StylingNoticeDemo),
  },
  {
    path: '09/styling-encapsulation-demo',
    title: 'StylingEncapsulationDemo',
    loadComponent: () =>
      import('./09-styling/encapsulation/cards').then((m) => m.StylingEncapsulationDemo),
  },
  {
    path: '09/styling-footer',
    title: 'StylingFooter',
    loadComponent: () => import('./09-styling/deep/deep-legacy').then((m) => m.StylingFooter),
  },
  {
    path: '09/styling-profile-card-demo',
    title: 'StylingProfileCardDemo',
    loadComponent: () =>
      import('./09-styling/profile-card/profile-card').then((m) => m.StylingProfileCardDemo),
  },
  {
    path: '09/styling-alert-demo',
    title: 'StylingAlertDemo',
    loadComponent: () => import('./09-styling/exercise/alert').then((m) => m.StylingAlertDemo),
  },
  {
    path: '10/pipes-receipt',
    title: 'PipesReceipt',
    loadComponent: () => import('./10-pipes/receipt/receipt').then((m) => m.PipesReceipt),
  },
  {
    path: '10/pipes-built-in',
    title: 'PipesBuiltIn',
    loadComponent: () => import('./10-pipes/built-in/built-in-pipes').then((m) => m.PipesBuiltIn),
  },
  {
    path: '10/pipes-async-greeting',
    title: 'PipesAsyncGreeting',
    loadComponent: () =>
      import('./10-pipes/async/async-greeting').then((m) => m.PipesAsyncGreeting),
  },
  {
    path: '10/pipes-initials-demo',
    title: 'PipesInitialsDemo',
    loadComponent: () =>
      import('./10-pipes/initials/initials-demo').then((m) => m.PipesInitialsDemo),
  },
  {
    path: '10/pipes-guest-list',
    title: 'PipesGuestList',
    loadComponent: () => import('./10-pipes/pure-impure/guest-list').then((m) => m.PipesGuestList),
  },
  {
    path: '10/pipes-downloads',
    title: 'PipesDownloads',
    loadComponent: () => import('./10-pipes/downloads/downloads').then((m) => m.PipesDownloads),
  },
  {
    path: '10/pipes-news-list',
    title: 'PipesNewsList',
    loadComponent: () => import('./10-pipes/exercise/news-list').then((m) => m.PipesNewsList),
  },
  {
    path: '11/dir-highlight-demo',
    title: 'DirHighlightDemo',
    loadComponent: () =>
      import('./11-directives/highlight/highlight').then((m) => m.DirHighlightDemo),
  },
  {
    path: '11/dir-color-highlight-demo',
    title: 'DirColorHighlightDemo',
    loadComponent: () =>
      import('./11-directives/color-highlight/color-highlight').then(
        (m) => m.DirColorHighlightDemo,
      ),
  },
  {
    path: '11/dir-select-on-focus-demo',
    title: 'DirSelectOnFocusDemo',
    loadComponent: () =>
      import('./11-directives/select-on-focus/select-on-focus').then((m) => m.DirSelectOnFocusDemo),
  },
  {
    path: '11/dir-show-for-demo',
    title: 'DirShowForDemo',
    loadComponent: () => import('./11-directives/show-for/show-for').then((m) => m.DirShowForDemo),
  },
  {
    path: '11/dir-icon-button-demo',
    title: 'DirIconButtonDemo',
    loadComponent: () =>
      import('./11-directives/composition/icon-button').then((m) => m.DirIconButtonDemo),
  },
  {
    path: '11/dir-user-menu',
    title: 'DirUserMenu',
    loadComponent: () =>
      import('./11-directives/click-outside/user-menu').then((m) => m.DirUserMenu),
  },
  {
    path: '11/dir-older-directives',
    title: 'DirOlderDirectives',
    loadComponent: () =>
      import('./11-directives/older/older-directives').then((m) => m.DirOlderDirectives),
  },
  {
    path: '11/dir-spoiler-demo',
    title: 'DirSpoilerDemo',
    loadComponent: () => import('./11-directives/exercise/spoiler').then((m) => m.DirSpoilerDemo),
  },
  {
    path: '12/proj-card-demo',
    title: 'ProjCardDemo',
    loadComponent: () =>
      import('./12-content-projection-and-queries/card/card').then((m) => m.ProjCardDemo),
  },
  {
    path: '12/proj-panel-demo',
    title: 'ProjPanelDemo',
    loadComponent: () =>
      import('./12-content-projection-and-queries/panel/panel').then((m) => m.ProjPanelDemo),
  },
  {
    path: '12/proj-expandable-demo',
    title: 'ProjExpandableDemo',
    loadComponent: () =>
      import('./12-content-projection-and-queries/expandable/expandable').then(
        (m) => m.ProjExpandableDemo,
      ),
  },
  {
    path: '12/proj-search-box',
    title: 'ProjSearchBox',
    loadComponent: () =>
      import('./12-content-projection-and-queries/search-box/search-box').then(
        (m) => m.ProjSearchBox,
      ),
  },
  {
    path: '12/proj-poll',
    title: 'ProjPoll',
    loadComponent: () =>
      import('./12-content-projection-and-queries/votes/votes').then((m) => m.ProjPoll),
  },
  {
    path: '12/proj-recipe-tabs',
    title: 'ProjRecipeTabs',
    loadComponent: () =>
      import('./12-content-projection-and-queries/tabs/recipe-tabs').then((m) => m.ProjRecipeTabs),
  },
  {
    path: '12/proj-old-search-box',
    title: 'ProjOldSearchBox',
    loadComponent: () =>
      import('./12-content-projection-and-queries/older/old-search-box').then(
        (m) => m.ProjOldSearchBox,
      ),
  },
  {
    path: '12/proj-alert-demo',
    title: 'ProjAlertDemo',
    loadComponent: () =>
      import('./12-content-projection-and-queries/exercise/alert-box').then((m) => m.ProjAlertDemo),
  },
  {
    path: '13/life-clock-demo',
    title: 'LifeClockDemo',
    loadComponent: () => import('./13-lifecycle/clock/clock').then((m) => m.LifeClockDemo),
  },
  {
    path: '13/life-clock-destroy-ref',
    title: 'LifeClockDestroyRef',
    loadComponent: () =>
      import('./13-lifecycle/clock/clock-destroy-ref').then((m) => m.LifeClockDestroyRef),
  },
  {
    path: '13/life-hook-log-demo',
    title: 'LifeHookLogDemo',
    loadComponent: () => import('./13-lifecycle/hook-log/hook-log').then((m) => m.LifeHookLogDemo),
  },
  {
    path: '13/life-price-tag-demo',
    title: 'LifePriceTagDemo',
    loadComponent: () =>
      import('./13-lifecycle/price-tag/price-tag').then((m) => m.LifePriceTagDemo),
  },
  {
    path: '13/life-editable-title',
    title: 'LifeEditableTitle',
    loadComponent: () =>
      import('./13-lifecycle/autofocus/editable-title').then((m) => m.LifeEditableTitle),
  },
  {
    path: '13/life-page-title-demo',
    title: 'LifePageTitleDemo',
    loadComponent: () =>
      import('./13-lifecycle/exercise/page-title').then((m) => m.LifePageTitleDemo),
  },
  {
    path: '14/di-cart-demo',
    title: 'DiCartDemo',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/cart/cart-demo').then((m) => m.DiCartDemo),
  },
  {
    path: '14/di-note-editor-demo',
    title: 'DiNoteEditorDemo',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/scoped/note-editor').then(
        (m) => m.DiNoteEditorDemo,
      ),
  },
  {
    path: '14/di-settings-view',
    title: 'DiSettingsView',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/tokens/settings-view').then(
        (m) => m.DiSettingsView,
      ),
  },
  {
    path: '14/di-provider-kinds',
    title: 'DiProviderKinds',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/provider-kinds/provider-kinds').then(
        (m) => m.DiProviderKinds,
      ),
  },
  {
    path: '14/di-checkout-page',
    title: 'DiCheckoutPage',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/context/checkout-page').then(
        (m) => m.DiCheckoutPage,
      ),
  },
  {
    path: '14/di-theme-demo',
    title: 'DiThemeDemo',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/hierarchy/theme-demo').then(
        (m) => m.DiThemeDemo,
      ),
  },
  {
    path: '14/di-modifiers-demo',
    title: 'DiModifiersDemo',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/modifiers/modifiers').then(
        (m) => m.DiModifiersDemo,
      ),
  },
  {
    path: '14/di-light-card-demo',
    title: 'DiLightCardDemo',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/lightweight/light-card').then(
        (m) => m.DiLightCardDemo,
      ),
  },
  {
    path: '14/di-report',
    title: 'DiReport',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/lazy/report').then((m) => m.DiReport),
  },
  {
    path: '14/di-recipe-list',
    title: 'DiRecipeList',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/favorites/recipe-list').then(
        (m) => m.DiRecipeList,
      ),
  },
  {
    path: '14/di-old-order-panel',
    title: 'DiOldOrderPanel',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/older/old-order-panel').then(
        (m) => m.DiOldOrderPanel,
      ),
  },
  {
    path: '14/di-counter-demo',
    title: 'DiCounterDemo',
    loadComponent: () =>
      import('./14-services-and-dependency-injection/exercise/counter').then(
        (m) => m.DiCounterDemo,
      ),
  },
  {
    path: '16/forms-signup',
    title: 'FormsSignup',
    loadComponent: () => import('./16-forms/signup/signup').then((m) => m.FormsSignup),
  },
  {
    path: '16/forms-profile',
    title: 'FormsProfile',
    loadComponent: () => import('./16-forms/profile/profile').then((m) => m.FormsProfile),
  },
  {
    path: '16/forms-registration',
    title: 'FormsRegistration',
    loadComponent: () =>
      import('./16-forms/validation/registration').then((m) => m.FormsRegistration),
  },
  {
    path: '16/forms-password',
    title: 'FormsPassword',
    loadComponent: () => import('./16-forms/cross-field/password').then((m) => m.FormsPassword),
  },
  {
    path: '16/forms-username',
    title: 'FormsUsername',
    loadComponent: () => import('./16-forms/async/username').then((m) => m.FormsUsername),
  },
  {
    path: '16/forms-order',
    title: 'FormsOrder',
    loadComponent: () => import('./16-forms/logic/order').then((m) => m.FormsOrder),
  },
  {
    path: '16/forms-contact',
    title: 'FormsContact',
    loadComponent: () => import('./16-forms/submit/contact').then((m) => m.FormsContact),
  },
  {
    path: '16/forms-party',
    title: 'FormsParty',
    loadComponent: () => import('./16-forms/schemas/party').then((m) => m.FormsParty),
  },
  {
    path: '16/forms-help-text',
    title: 'FormsHelpText',
    loadComponent: () => import('./16-forms/metadata/help-text').then((m) => m.FormsHelpText),
  },
  {
    path: '16/forms-review',
    title: 'FormsReview',
    loadComponent: () => import('./16-forms/custom-control/review').then((m) => m.FormsReview),
  },
  {
    path: '16/forms-reactive-login',
    title: 'FormsReactiveLogin',
    loadComponent: () =>
      import('./16-forms/reactive/reactive-login').then((m) => m.FormsReactiveLogin),
  },
  {
    path: '16/forms-reactive-skills',
    title: 'FormsReactiveSkills',
    loadComponent: () =>
      import('./16-forms/reactive/reactive-skills').then((m) => m.FormsReactiveSkills),
  },
  {
    path: '16/forms-template-login',
    title: 'FormsTemplateLogin',
    loadComponent: () =>
      import('./16-forms/template-driven/template-login').then((m) => m.FormsTemplateLogin),
  },
  {
    path: '16/forms-feedback',
    title: 'FormsFeedback',
    loadComponent: () => import('./16-forms/exercise/feedback').then((m) => m.FormsFeedback),
  },
  {
    path: '17/http-tea-list',
    title: 'HttpTeaList',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./17-http-and-async-data/smallest/tea-list').then((m) => m.HttpTeaList),
  },
  {
    path: '17/http-add-tea',
    title: 'HttpAddTea',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./17-http-and-async-data/client/add-tea').then((m) => m.HttpAddTea),
  },
  {
    path: '17/http-quote-box',
    title: 'HttpQuoteBox',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./17-http-and-async-data/resource/quote-box').then((m) => m.HttpQuoteBox),
  },
  {
    path: '17/http-tea-shop',
    title: 'HttpTeaShop',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./17-http-and-async-data/shop/tea-shop').then((m) => m.HttpTeaShop),
  },
  {
    path: '17/http-tea-browser',
    title: 'HttpTeaBrowser',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./17-http-and-async-data/exercise/tea-browser').then((m) => m.HttpTeaBrowser),
  },
  {
    path: '18/rx-ticker',
    title: 'RxTicker',
    providers: [provideHttpClient()],
    loadComponent: () => import('./18-rxjs-interop/ticker/ticker').then((m) => m.RxTicker),
  },
  {
    path: '18/rx-tea-search',
    title: 'RxTeaSearch',
    providers: [provideHttpClient()],
    loadComponent: () => import('./18-rxjs-interop/search/tea-search').then((m) => m.RxTeaSearch),
  },
  {
    path: '18/rx-word-demo',
    title: 'RxWordDemo',
    providers: [provideHttpClient()],
    loadComponent: () => import('./18-rxjs-interop/outputs/word-input').then((m) => m.RxWordDemo),
  },
  {
    path: '18/rx-live-price',
    title: 'RxLivePrice',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./18-rxjs-interop/live-price/live-price').then((m) => m.RxLivePrice),
  },
  {
    path: '18/rx-window-width',
    title: 'RxWindowWidth',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./18-rxjs-interop/exercise/window-width').then((m) => m.RxWindowWidth),
  },
  {
    path: '18/rx-late-listener',
    title: 'RxLateListener',
    providers: [provideHttpClient()],
    loadComponent: () =>
      import('./18-rxjs-interop/notifications/notification-list').then((m) => m.RxLateListener),
  },
  {
    path: '19/testing-greeting',
    title: 'TestingGreeting',
    loadComponent: () => import('./19-testing/greeting/greeting').then((m) => m.TestingGreeting),
  },
  {
    path: '19/testing-two-counters',
    title: 'TestingTwoCounters',
    loadComponent: () => import('./19-testing/harness/counter').then((m) => m.TestingTwoCounters),
  },
  {
    path: '19/testing-toast',
    title: 'TestingToast',
    loadComponent: () => import('./19-testing/timers/toast').then((m) => m.TestingToast),
  },
  {
    path: '19/testing-login-form',
    title: 'TestingLoginForm',
    loadComponent: () => import('./19-testing/forms/login-form').then((m) => m.TestingLoginForm),
  },
  {
    path: '19/testing-like-button',
    title: 'TestingLikeButton',
    loadComponent: () =>
      import('./19-testing/exercise/like-button').then((m) => m.TestingLikeButton),
  },
  {
    path: '20/perf-article',
    title: 'PerfArticle',
    loadComponent: () =>
      import('./20-performance-defer-and-zoneless/comments/article').then((m) => m.PerfArticle),
  },
  {
    path: '20/perf-triggers',
    title: 'PerfTriggers',
    loadComponent: () =>
      import('./20-performance-defer-and-zoneless/triggers/triggers').then((m) => m.PerfTriggers),
  },
  {
    path: '20/perf-product-page',
    title: 'PerfProductPage',
    loadComponent: () =>
      import('./20-performance-defer-and-zoneless/product-page/product-page').then(
        (m) => m.PerfProductPage,
      ),
  },
  {
    path: '20/perf-store-finder',
    title: 'PerfStoreFinder',
    loadComponent: () =>
      import('./20-performance-defer-and-zoneless/exercise/store-finder').then(
        (m) => m.PerfStoreFinder,
      ),
  },
  {
    path: '20/perf-signal-timer',
    title: 'PerfSignalTimer',
    loadComponent: () =>
      import('./20-performance-defer-and-zoneless/zoneless/timers').then((m) => m.PerfSignalTimer),
  },
  {
    path: '20/perf-plain-timer',
    title: 'PerfPlainTimer',
    loadComponent: () =>
      import('./20-performance-defer-and-zoneless/zoneless/timers').then((m) => m.PerfPlainTimer),
  },
  {
    path: '21/ssr-last-visit',
    title: 'SsrLastVisit',
    loadComponent: () =>
      import('./21-server-rendering-and-hydration/browser-only/last-visit').then(
        (m) => m.SsrLastVisit,
      ),
  },
  {
    path: '21/ssr-window-width',
    title: 'SsrWindowWidth',
    loadComponent: () =>
      import('./21-server-rendering-and-hydration/exercise/window-width').then(
        (m) => m.SsrWindowWidth,
      ),
  },
  {
    path: '22/a11y-player-controls',
    title: 'A11yPlayerControls',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/mute-button/mute-button').then(
        (m) => m.A11yPlayerControls,
      ),
  },
  {
    path: '22/a11y-recipe-search',
    title: 'A11yRecipeSearch',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/search/search').then((m) => m.A11yRecipeSearch),
  },
  {
    path: '22/a11y-recipe-tabs',
    title: 'A11yRecipeTabs',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/tabs/recipe-tabs').then((m) => m.A11yRecipeTabs),
  },
  {
    path: '22/a11y-faq',
    title: 'A11yFaq',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/accordion/faq').then((m) => m.A11yFaq),
  },
  {
    path: '22/a11y-toppings',
    title: 'A11yToppings',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/listbox/toppings').then((m) => m.A11yToppings),
  },
  {
    path: '22/a11y-note-editor',
    title: 'A11yNoteEditor',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/note-editor/note-editor').then(
        (m) => m.A11yNoteEditor,
      ),
  },
  {
    path: '22/a11y-size-picker',
    title: 'A11ySizePicker',
    loadComponent: () =>
      import('./22-accessibility-and-angular-aria/exercise/size-picker').then(
        (m) => m.A11ySizePicker,
      ),
  },
  {
    path: '23/anim-fade-note',
    title: 'AnimFadeNote',
    loadComponent: () => import('./23-animations/fade-note/fade-note').then((m) => m.AnimFadeNote),
  },
  {
    path: '23/anim-open-panel',
    title: 'AnimOpenPanel',
    loadComponent: () =>
      import('./23-animations/open-panel/open-panel').then((m) => m.AnimOpenPanel),
  },
  {
    path: '23/anim-toast-list',
    title: 'AnimToastList',
    loadComponent: () =>
      import('./23-animations/toast-list/toast-list').then((m) => m.AnimToastList),
  },
  {
    path: '23/anim-like-badge',
    title: 'AnimLikeBadge',
    loadComponent: () => import('./23-animations/exercise/like-badge').then((m) => m.AnimLikeBadge),
  },
  {
    path: '24/i18n-welcome',
    title: 'I18nWelcome',
    loadComponent: () => import('./24-i18n/welcome/welcome').then((m) => m.I18nWelcome),
  },
  {
    path: '24/i18n-ticket-summary',
    title: 'I18nTicketSummary',
    loadComponent: () =>
      import('./24-i18n/ticket-summary/ticket-summary').then((m) => m.I18nTicketSummary),
  },
  {
    path: '24/i18n-locale-prices',
    title: 'I18nLocalePrices',
    loadComponent: () =>
      import('./24-i18n/locale-prices/locale-prices').then((m) => m.I18nLocalePrices),
  },
  {
    path: '25/sec-comment-preview',
    title: 'SecCommentPreview',
    loadComponent: () =>
      import('./25-security/comment-preview/comment-preview').then((m) => m.SecCommentPreview),
  },
  {
    path: '26/build-api-banner',
    title: 'BuildApiBanner',
    loadComponent: () =>
      import('./26-build-configure-deploy-update/api-banner/api-banner').then(
        (m) => m.BuildApiBanner,
      ),
  },
  {
    path: '27/dnd-stop-list',
    title: 'DndStopList',
    loadComponent: () =>
      import('./27-smaller-topics/drag-drop/stop-list').then((m) => m.DndStopList),
  },
  {
    path: '27/dnd-plan-board',
    title: 'DndPlanBoard',
    loadComponent: () =>
      import('./27-smaller-topics/exercise/plan-board').then((m) => m.DndPlanBoard),
  },
  {
    path: '27/modules-badge-page',
    title: 'ModulesBadgePage',
    loadComponent: () =>
      import('./27-smaller-topics/ngmodules/badge-page').then((m) => m.ModulesBadgePage),
  },
];

export const chapterDemos: ChapterDemos[] = [
  {
    chapter: '01-what-is-angular',
    demos: [
      {name: 'IntroHello', path: '/01/intro-hello'},
      {name: 'IntroLikeButton', path: '/01/intro-like-button'},
      {name: 'IntroGreetingCard', path: '/01/intro-greeting-card'},
    ],
  },
  {
    chapter: '02-install-and-first-app',
    demos: [
      {name: 'FirstApp', path: '/02/first-app'},
      {name: 'FirstAppFinished', path: '/02/first-app-finished'},
      {name: 'FirstAppWithFooter', path: '/02/first-app-with-footer'},
    ],
  },
  {
    chapter: '03-typescript-you-need',
    demos: [{name: 'TsCartSummary', path: '/03/ts-cart-summary'}],
  },
  {
    chapter: '04-components',
    demos: [
      {name: 'CompUserBadge', path: '/04/comp-user-badge'},
      {name: 'CompRecipePage', path: '/04/comp-recipe-page'},
      {name: 'CompSelectorDemo', path: '/04/comp-selector-demo'},
      {name: 'CompInfoNote', path: '/04/comp-info-note'},
      {name: 'CompMapPanel', path: '/04/comp-map-panel'},
      {name: 'CompVoteButton', path: '/04/comp-vote-button'},
      {name: 'CompRecipeHome', path: '/04/comp-recipe-home'},
      {name: 'CompContactsPage', path: '/04/comp-contacts-page'},
    ],
  },
  {
    chapter: '05-templates-and-binding',
    demos: [
      {name: 'TplGreeting', path: '/05/tpl-greeting'},
      {name: 'TplProfilePhoto', path: '/05/tpl-profile-photo'},
      {name: 'TplScoreTable', path: '/05/tpl-score-table'},
      {name: 'TplTaskItem', path: '/05/tpl-task-item'},
      {name: 'TplSearchBox', path: '/05/tpl-search-box'},
      {name: 'TplToggleChip', path: '/05/tpl-toggle-chip'},
      {name: 'TplExpressions', path: '/05/tpl-expressions'},
      {name: 'TplGreeter', path: '/05/tpl-greeter'},
      {name: 'TplAddressList', path: '/05/tpl-address-list'},
      {name: 'TplProfileSwitch', path: '/05/tpl-profile-switch'},
      {name: 'TplOrderLine', path: '/05/tpl-order-line'},
      {name: 'TplCharCounter', path: '/05/tpl-char-counter'},
    ],
  },
  {
    chapter: '06-control-flow',
    demos: [
      {name: 'ControlFlowLoginStatus', path: '/06/control-flow-login-status'},
      {name: 'ControlFlowGrade', path: '/06/control-flow-grade'},
      {name: 'ControlFlowAlias', path: '/06/control-flow-alias'},
      {name: 'ControlFlowFruitList', path: '/06/control-flow-fruit-list'},
      {name: 'ControlFlowTrafficLight', path: '/06/control-flow-traffic-light'},
      {name: 'ControlFlowWeekend', path: '/06/control-flow-weekend'},
      {name: 'ControlFlowBoundaryDemo', path: '/06/control-flow-boundary-demo'},
      {name: 'ControlFlowTaskList', path: '/06/control-flow-task-list'},
      {name: 'ControlFlowInbox', path: '/06/control-flow-inbox'},
    ],
  },
  {
    chapter: '07-signals',
    demos: [
      {name: 'SignalsCounter', path: '/07/signals-counter'},
      {name: 'SignalsThemeSaver', path: '/07/signals-theme-saver'},
      {name: 'SignalsShippingPicker', path: '/07/signals-shipping-picker'},
      {name: 'SignalsSearch', path: '/07/signals-search'},
      {name: 'SignalsCart', path: '/07/signals-cart'},
      {name: 'SignalsMessageBox', path: '/07/signals-message-box'},
    ],
  },
  {
    chapter: '08-inputs-outputs-model',
    demos: [
      {name: 'InputsUserBadgeDemo', path: '/08/inputs-user-badge-demo'},
      {name: 'InputsProductCardDemo', path: '/08/inputs-product-card-demo'},
      {name: 'InputsStarRatingDemo', path: '/08/inputs-star-rating-demo'},
      {name: 'InputsQuantityDemo', path: '/08/inputs-quantity-demo'},
      {name: 'InputsOldPanelDemo', path: '/08/inputs-old-panel-demo'},
      {name: 'InputsTodoPage', path: '/08/inputs-todo-page'},
      {name: 'InputsLikeDemo', path: '/08/inputs-like-demo'},
    ],
  },
  {
    chapter: '09-styling',
    demos: [
      {name: 'StylingNoticeDemo', path: '/09/styling-notice-demo'},
      {name: 'StylingEncapsulationDemo', path: '/09/styling-encapsulation-demo'},
      {name: 'StylingFooter', path: '/09/styling-footer'},
      {name: 'StylingProfileCardDemo', path: '/09/styling-profile-card-demo'},
      {name: 'StylingAlertDemo', path: '/09/styling-alert-demo'},
    ],
  },
  {
    chapter: '10-pipes',
    demos: [
      {name: 'PipesReceipt', path: '/10/pipes-receipt'},
      {name: 'PipesBuiltIn', path: '/10/pipes-built-in'},
      {name: 'PipesAsyncGreeting', path: '/10/pipes-async-greeting'},
      {name: 'PipesInitialsDemo', path: '/10/pipes-initials-demo'},
      {name: 'PipesGuestList', path: '/10/pipes-guest-list'},
      {name: 'PipesDownloads', path: '/10/pipes-downloads'},
      {name: 'PipesNewsList', path: '/10/pipes-news-list'},
    ],
  },
  {
    chapter: '11-directives',
    demos: [
      {name: 'DirHighlightDemo', path: '/11/dir-highlight-demo'},
      {name: 'DirColorHighlightDemo', path: '/11/dir-color-highlight-demo'},
      {name: 'DirSelectOnFocusDemo', path: '/11/dir-select-on-focus-demo'},
      {name: 'DirShowForDemo', path: '/11/dir-show-for-demo'},
      {name: 'DirIconButtonDemo', path: '/11/dir-icon-button-demo'},
      {name: 'DirUserMenu', path: '/11/dir-user-menu'},
      {name: 'DirOlderDirectives', path: '/11/dir-older-directives'},
      {name: 'DirSpoilerDemo', path: '/11/dir-spoiler-demo'},
    ],
  },
  {
    chapter: '12-content-projection-and-queries',
    demos: [
      {name: 'ProjCardDemo', path: '/12/proj-card-demo'},
      {name: 'ProjPanelDemo', path: '/12/proj-panel-demo'},
      {name: 'ProjExpandableDemo', path: '/12/proj-expandable-demo'},
      {name: 'ProjSearchBox', path: '/12/proj-search-box'},
      {name: 'ProjPoll', path: '/12/proj-poll'},
      {name: 'ProjRecipeTabs', path: '/12/proj-recipe-tabs'},
      {name: 'ProjOldSearchBox', path: '/12/proj-old-search-box'},
      {name: 'ProjAlertDemo', path: '/12/proj-alert-demo'},
    ],
  },
  {
    chapter: '13-lifecycle',
    demos: [
      {name: 'LifeClockDemo', path: '/13/life-clock-demo'},
      {name: 'LifeClockDestroyRef', path: '/13/life-clock-destroy-ref'},
      {name: 'LifeHookLogDemo', path: '/13/life-hook-log-demo'},
      {name: 'LifePriceTagDemo', path: '/13/life-price-tag-demo'},
      {name: 'LifeEditableTitle', path: '/13/life-editable-title'},
      {name: 'LifePageTitleDemo', path: '/13/life-page-title-demo'},
    ],
  },
  {
    chapter: '14-services-and-dependency-injection',
    demos: [
      {name: 'DiCartDemo', path: '/14/di-cart-demo'},
      {name: 'DiNoteEditorDemo', path: '/14/di-note-editor-demo'},
      {name: 'DiSettingsView', path: '/14/di-settings-view'},
      {name: 'DiProviderKinds', path: '/14/di-provider-kinds'},
      {name: 'DiCheckoutPage', path: '/14/di-checkout-page'},
      {name: 'DiThemeDemo', path: '/14/di-theme-demo'},
      {name: 'DiModifiersDemo', path: '/14/di-modifiers-demo'},
      {name: 'DiLightCardDemo', path: '/14/di-light-card-demo'},
      {name: 'DiReport', path: '/14/di-report'},
      {name: 'DiRecipeList', path: '/14/di-recipe-list'},
      {name: 'DiOldOrderPanel', path: '/14/di-old-order-panel'},
      {name: 'DiCounterDemo', path: '/14/di-counter-demo'},
    ],
  },
  {
    chapter: '16-forms',
    demos: [
      {name: 'FormsSignup', path: '/16/forms-signup'},
      {name: 'FormsProfile', path: '/16/forms-profile'},
      {name: 'FormsRegistration', path: '/16/forms-registration'},
      {name: 'FormsPassword', path: '/16/forms-password'},
      {name: 'FormsUsername', path: '/16/forms-username'},
      {name: 'FormsOrder', path: '/16/forms-order'},
      {name: 'FormsContact', path: '/16/forms-contact'},
      {name: 'FormsParty', path: '/16/forms-party'},
      {name: 'FormsHelpText', path: '/16/forms-help-text'},
      {name: 'FormsReview', path: '/16/forms-review'},
      {name: 'FormsReactiveLogin', path: '/16/forms-reactive-login'},
      {name: 'FormsReactiveSkills', path: '/16/forms-reactive-skills'},
      {name: 'FormsTemplateLogin', path: '/16/forms-template-login'},
      {name: 'FormsFeedback', path: '/16/forms-feedback'},
    ],
  },
  {
    chapter: '17-http-and-async-data',
    demos: [
      {name: 'HttpTeaList', path: '/17/http-tea-list'},
      {name: 'HttpAddTea', path: '/17/http-add-tea'},
      {name: 'HttpQuoteBox', path: '/17/http-quote-box'},
      {name: 'HttpTeaShop', path: '/17/http-tea-shop'},
      {name: 'HttpTeaBrowser', path: '/17/http-tea-browser'},
    ],
  },
  {
    chapter: '18-rxjs-interop',
    demos: [
      {name: 'RxTicker', path: '/18/rx-ticker'},
      {name: 'RxTeaSearch', path: '/18/rx-tea-search'},
      {name: 'RxWordDemo', path: '/18/rx-word-demo'},
      {name: 'RxLivePrice', path: '/18/rx-live-price'},
      {name: 'RxWindowWidth', path: '/18/rx-window-width'},
      {name: 'RxLateListener', path: '/18/rx-late-listener'},
    ],
  },
  {
    chapter: '19-testing',
    demos: [
      {name: 'TestingGreeting', path: '/19/testing-greeting'},
      {name: 'TestingTwoCounters', path: '/19/testing-two-counters'},
      {name: 'TestingToast', path: '/19/testing-toast'},
      {name: 'TestingLoginForm', path: '/19/testing-login-form'},
      {name: 'TestingLikeButton', path: '/19/testing-like-button'},
    ],
  },
  {
    chapter: '20-performance-defer-and-zoneless',
    demos: [
      {name: 'PerfArticle', path: '/20/perf-article'},
      {name: 'PerfTriggers', path: '/20/perf-triggers'},
      {name: 'PerfProductPage', path: '/20/perf-product-page'},
      {name: 'PerfStoreFinder', path: '/20/perf-store-finder'},
      {name: 'PerfSignalTimer', path: '/20/perf-signal-timer'},
      {name: 'PerfPlainTimer', path: '/20/perf-plain-timer'},
    ],
  },
  {
    chapter: '21-server-rendering-and-hydration',
    demos: [
      {name: 'SsrLastVisit', path: '/21/ssr-last-visit'},
      {name: 'SsrWindowWidth', path: '/21/ssr-window-width'},
    ],
  },
  {
    chapter: '22-accessibility-and-angular-aria',
    demos: [
      {name: 'A11yPlayerControls', path: '/22/a11y-player-controls'},
      {name: 'A11yRecipeSearch', path: '/22/a11y-recipe-search'},
      {name: 'A11yRecipeTabs', path: '/22/a11y-recipe-tabs'},
      {name: 'A11yFaq', path: '/22/a11y-faq'},
      {name: 'A11yToppings', path: '/22/a11y-toppings'},
      {name: 'A11yNoteEditor', path: '/22/a11y-note-editor'},
      {name: 'A11ySizePicker', path: '/22/a11y-size-picker'},
    ],
  },
  {
    chapter: '23-animations',
    demos: [
      {name: 'AnimFadeNote', path: '/23/anim-fade-note'},
      {name: 'AnimOpenPanel', path: '/23/anim-open-panel'},
      {name: 'AnimToastList', path: '/23/anim-toast-list'},
      {name: 'AnimLikeBadge', path: '/23/anim-like-badge'},
    ],
  },
  {
    chapter: '24-i18n',
    demos: [
      {name: 'I18nWelcome', path: '/24/i18n-welcome'},
      {name: 'I18nTicketSummary', path: '/24/i18n-ticket-summary'},
      {name: 'I18nLocalePrices', path: '/24/i18n-locale-prices'},
    ],
  },
  {
    chapter: '25-security',
    demos: [{name: 'SecCommentPreview', path: '/25/sec-comment-preview'}],
  },
  {
    chapter: '26-build-configure-deploy-update',
    demos: [{name: 'BuildApiBanner', path: '/26/build-api-banner'}],
  },
  {
    chapter: '27-smaller-topics',
    demos: [
      {name: 'DndStopList', path: '/27/dnd-stop-list'},
      {name: 'DndPlanBoard', path: '/27/dnd-plan-board'},
      {name: 'ModulesBadgePage', path: '/27/modules-badge-page'},
    ],
  },
];
