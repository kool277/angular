import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signals-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <button type="button" (click)="increment()">+1</button>
    <button type="button" (click)="reset()">Reset</button>
  `,
})
export class SignalsCounter {
  readonly count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }

  reset() {
    this.count.set(0);
  }
}
