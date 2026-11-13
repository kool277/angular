import {httpResource} from '@angular/common/http';
import {Component} from '@angular/core';
import {Tea} from '../tea';

@Component({
  selector: 'app-http-tea-list',
  template: `
    @if (teas.hasValue()) {
      <ul>
        @for (tea of teas.value(); track tea.id) {
          <li>{{ tea.name }}</li>
        }
      </ul>
    } @else if (teas.error()) {
      <p>Could not load the teas.</p>
    } @else if (teas.isLoading()) {
      <p>Loading…</p>
    }
  `,
})
export class HttpTeaList {
  protected readonly teas = httpResource<Tea[]>(() => '/http-demo/teas.json');
}
