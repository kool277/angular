import {Component, signal} from '@angular/core';
import {PerfStoreMap} from './store-map';

@Component({
  selector: 'app-perf-store-finder',
  imports: [PerfStoreMap],
  template: `
    <button type="button" (click)="showMap.set(true)">Show the map</button>

    @defer (when showMap(); prefetch on idle) {
      <app-perf-store-map />
    } @placeholder {
      <p>The map appears here.</p>
    } @loading (after 100ms; minimum 500ms) {
      <p>Loading the map…</p>
    }
  `,
})
export class PerfStoreFinder {
  readonly showMap = signal(false);
}
