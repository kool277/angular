import {Component, OnDestroy, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-life-clock',
  template: `<p>Seconds on this page: {{ seconds() }}</p>`,
})
export class LifeClock implements OnInit, OnDestroy {
  protected readonly seconds = signal(0);
  private timerId = 0;

  ngOnInit(): void {
    this.timerId = setInterval(() => this.seconds.update((s) => s + 1), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }
}

@Component({
  selector: 'app-life-clock-demo',
  imports: [LifeClock],
  template: `
    <button type="button" (click)="visible.set(!visible())">Show or hide the clock</button>
    @if (visible()) {
      <app-life-clock />
    }
  `,
})
export class LifeClockDemo {
  readonly visible = signal(true);
}
