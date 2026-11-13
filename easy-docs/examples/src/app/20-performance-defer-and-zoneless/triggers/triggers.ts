import {Component, signal} from '@angular/core';
import {PerfLoadedBox} from './loaded-box';

@Component({
  selector: 'app-perf-triggers',
  imports: [PerfLoadedBox],
  template: `
    <!-- #docregion idle -->
    @defer (on idle) {
      <app-perf-loaded-box name="idle" />
    }
    <!-- #enddocregion idle -->

    <!-- #docregion viewport -->
    @defer (on viewport) {
      <app-perf-loaded-box name="viewport" />
    } @placeholder {
      <p>Scroll down to load this part.</p>
    }
    <!-- #enddocregion viewport -->

    <!-- #docregion hover -->
    <button type="button" #helpButton>Help</button>
    @defer (on hover(helpButton)) {
      <app-perf-loaded-box name="hover" />
    }
    <!-- #enddocregion hover -->

    <!-- #docregion timer -->
    @defer (on timer(2s)) {
      <app-perf-loaded-box name="timer" />
    } @placeholder {
      <p>Wait two seconds…</p>
    }
    <!-- #enddocregion timer -->

    <!-- #docregion when -->
    <button type="button" (click)="showMap.set(true)">Show the map</button>
    @defer (when showMap()) {
      <app-perf-loaded-box name="when" />
    }
    <!-- #enddocregion when -->

    <!-- #docregion prefetch -->
    @defer (on interaction; prefetch on idle) {
      <app-perf-loaded-box name="interaction" />
    } @placeholder {
      <button type="button">Show more</button>
    }
    <!-- #enddocregion prefetch -->
  `,
})
export class PerfTriggers {
  readonly showMap = signal(false);
}
