import {Component, DestroyRef, inject, signal} from '@angular/core';

@Component({
  selector: 'app-life-clock-destroy-ref',
  template: `<p>Seconds on this page: {{ seconds() }}</p>`,
})
export class LifeClockDestroyRef {
  protected readonly seconds = signal(0);

  constructor() {
    const timerId = setInterval(() => this.seconds.update((s) => s + 1), 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(timerId));
  }
}
