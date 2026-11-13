import {Component, Service, inject, signal} from '@angular/core';

@Service()
export class DiCounterStore {
  readonly value = signal(0);
}

@Component({
  selector: 'app-di-counter-panel',
  template: `
    <button type="button" (click)="counter.value.set(counter.value() + 1)">
      {{ counter.value() }}
    </button>
  `,
})
export class DiCounterPanel {
  protected readonly counter = inject(DiCounterStore);
}

@Component({
  selector: 'app-di-own-counter-panel',
  imports: [DiCounterPanel],
  providers: [DiCounterStore],
  template: `<app-di-counter-panel />`,
})
export class DiOwnCounterPanel {}

@Component({
  selector: 'app-di-counter-demo',
  imports: [DiCounterPanel, DiOwnCounterPanel],
  template: `
    <app-di-counter-panel />
    <app-di-counter-panel />
    <app-di-own-counter-panel />
  `,
})
export class DiCounterDemo {}
