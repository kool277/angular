import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-testing-counter',
  template: `
    <span class="count">{{ count() }}</span>
    <button type="button" class="plus" (click)="count.set(count() + 1)">+</button>
    <button type="button" class="reset" (click)="count.set(0)">Reset</button>
  `,
})
export class TestingCounter {
  readonly count = signal(0);
}

@Component({
  selector: 'app-testing-two-counters',
  imports: [TestingCounter],
  template: `
    <app-testing-counter id="cups" />
    <app-testing-counter id="pots" />
  `,
})
export class TestingTwoCounters {}
