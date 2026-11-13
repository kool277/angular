// #docregion inspector
import {Component, Directive, InjectionToken, inject} from '@angular/core';
import {THEME} from '../hierarchy/theme';

// No provider anywhere gives a value for this token.
export const BETA_FEATURES = new InjectionToken<boolean>('BETA_FEATURES');

@Component({
  selector: 'app-di-theme-inspector',
  providers: [{provide: THEME, useValue: 'contrast'}],
  template: `
    <p>default: {{ own }}</p>
    <p>self: {{ onlyHere }}</p>
    <p>skipSelf: {{ fromParent }}</p>
    <p>optional: {{ beta ?? 'not provided' }}</p>
  `,
})
export class DiThemeInspector {
  protected readonly own = inject(THEME);
  protected readonly onlyHere = inject(THEME, {self: true});
  protected readonly fromParent = inject(THEME, {skipSelf: true});
  protected readonly beta = inject(BETA_FEATURES, {optional: true});
}
// #enddocregion inspector

// #docregion host
@Directive({selector: '[appThemeProbe]', host: {'[attr.data-theme]': 'theme'}})
export class DiThemeProbe {
  protected readonly theme = inject(THEME, {host: true, optional: true}) ?? 'none';
}

@Component({
  selector: 'app-di-plain-card',
  imports: [DiThemeProbe],
  template: `<div appThemeProbe>Plain card</div>`,
})
export class DiPlainCard {}

@Component({
  selector: 'app-di-themed-card',
  imports: [DiThemeProbe],
  viewProviders: [{provide: THEME, useValue: 'card'}],
  template: `<div appThemeProbe>Themed card</div>`,
})
export class DiThemedCard {}
// #enddocregion host

// #docregion demo
@Component({
  selector: 'app-di-modifiers-demo',
  imports: [DiThemeInspector, DiPlainCard, DiThemedCard],
  providers: [{provide: THEME, useValue: 'dark'}],
  template: `
    <app-di-theme-inspector />
    <app-di-plain-card />
    <app-di-themed-card />
  `,
})
export class DiModifiersDemo {}
// #enddocregion demo
