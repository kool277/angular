import {Component, input} from '@angular/core';

@Component({
  selector: 'app-perf-loaded-box',
  template: `<p>Loaded: {{ name() }}</p>`,
})
export class PerfLoadedBox {
  readonly name = input.required<string>();
}
