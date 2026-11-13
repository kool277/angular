import {Component, inject, input} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {HttpTeaApi} from '../client/tea-api';

@Component({
  selector: 'app-http-rx-tea-detail',
  template: `
    @if (tea.hasValue()) {
      <h2>{{ tea.value().name }}</h2>
      <p>{{ tea.value().price }} €</p>
    } @else if (tea.isLoading()) {
      <p>Loading…</p>
    }
  `,
})
export class HttpRxTeaDetail {
  readonly id = input.required<number>();
  private readonly api = inject(HttpTeaApi);

  // #docregion rx-resource
  protected readonly tea = rxResource({
    params: () => this.id(),
    stream: ({params}) => this.api.getTea(params),
  });
  // #enddocregion rx-resource
}
