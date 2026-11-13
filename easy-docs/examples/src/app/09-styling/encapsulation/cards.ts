// #docregion import
import {Component, ViewEncapsulation} from '@angular/core';
// #enddocregion import

// #docregion emulated
@Component({
  selector: 'app-emulated-card',
  template: `<p class="label">Emulated</p>`,
  styles: `
    .label {
      color: blue;
    }
  `,
})
export class StylingEmulatedCard {}
// #enddocregion emulated

// #docregion none
@Component({
  selector: 'app-none-card',
  template: `<p class="label">None</p>`,
  styles: `
    .label {
      font-weight: bold;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class StylingNoneCard {}
// #enddocregion none

// #docregion shadow
@Component({
  selector: 'app-shadow-card',
  template: `<p class="label">Shadow DOM</p>`,
  styles: `
    .label {
      color: green;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class StylingShadowCard {}
// #enddocregion shadow

// #docregion demo
@Component({
  selector: 'app-encapsulation-demo',
  imports: [StylingEmulatedCard, StylingNoneCard, StylingShadowCard],
  template: `
    <app-emulated-card />
    <app-none-card />
    <app-shadow-card />
    <p class="label">Outside every card</p>
  `,
})
export class StylingEncapsulationDemo {}
// #enddocregion demo
