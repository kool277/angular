import {Component, inject} from '@angular/core';
import {THEME} from './theme';

@Component({
  selector: 'app-di-theme-label',
  template: `<span>{{ theme }}</span>`,
})
export class DiThemeLabel {
  protected readonly theme = inject(THEME);
}

@Component({
  selector: 'app-di-dark-section',
  imports: [DiThemeLabel],
  providers: [{provide: THEME, useValue: 'dark'}],
  template: ` <section>Own template: <app-di-theme-label /> Projected: <ng-content /></section> `,
})
export class DiDarkSection {}

@Component({
  selector: 'app-di-theme-demo',
  imports: [DiThemeLabel, DiDarkSection],
  template: `
    <p>Outside: <app-di-theme-label /></p>
    <app-di-dark-section>
      <app-di-theme-label />
    </app-di-dark-section>
  `,
})
export class DiThemeDemo {}
