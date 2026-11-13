import {httpResource} from '@angular/common/http';
import {Component, signal} from '@angular/core';
import {Tea} from '../tea';

@Component({
  selector: 'app-http-tea-browser',
  template: `
    <button type="button" (click)="id.set(id() - 1)" [disabled]="id() === 1">Previous</button>
    <span>Tea {{ id() }}</span>
    <button type="button" (click)="id.set(id() + 1)">Next</button>

    @if (tea.hasValue()) {
      <h2>{{ tea.value().name }}</h2>
    } @else if (tea.error()) {
      <p>There is no tea number {{ id() }}.</p>
      <button type="button" (click)="tea.reload()">Retry</button>
    } @else {
      <p>Loading…</p>
    }
  `,
})
export class HttpTeaBrowser {
  protected readonly id = signal(1);
  protected readonly tea = httpResource<Tea>(() => `/http-demo/teas/${this.id()}.json`);
}
