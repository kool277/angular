import {Component, contentChild} from '@angular/core';

// #docregion token
export abstract class DiCardHeaderToken {}

@Component({
  selector: 'app-di-card-header',
  providers: [{provide: DiCardHeaderToken, useExisting: DiCardHeader}],
  template: `<h3><ng-content /></h3>`,
})
export class DiCardHeader extends DiCardHeaderToken {}

@Component({
  selector: 'app-di-light-card',
  template: `
    @if (!header()) {
      <h3>Untitled</h3>
    }
    <ng-content />
  `,
})
export class DiLightCard {
  protected readonly header = contentChild(DiCardHeaderToken);
}
// #enddocregion token

@Component({
  selector: 'app-di-light-card-demo',
  imports: [DiLightCard, DiCardHeader],
  template: `
    <app-di-light-card>
      <app-di-card-header>Plov</app-di-card-header>
      <p>Rice and meat.</p>
    </app-di-light-card>
    <app-di-light-card>
      <p>A card without a header.</p>
    </app-di-light-card>
  `,
})
export class DiLightCardDemo {}
