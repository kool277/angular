// #docregion blocking-page
import {Component, Resource, input} from '@angular/core';
import {Tea} from '../tea';

@Component({
  template: `<h2>{{ tea().name }}</h2>
    <p>{{ tea().price }} €</p>`,
})
export class HttpRouteTeaPage {
  // A blocking resource: the router binds only the loaded value.
  readonly tea = input.required<Tea>();
}
// #enddocregion blocking-page

// #docregion non-blocking-page
@Component({
  template: `
    @if (teas().hasValue()) {
      <ul>
        @for (tea of teas().value(); track tea.id) {
          <li>{{ tea.name }}</li>
        }
      </ul>
    } @else if (teas().error()) {
      <p>Could not load the menu.</p>
    } @else {
      <p>Loading the menu…</p>
    }
  `,
})
export class HttpRouteMenuPage {
  // A non-blocking resource: the router binds the whole resource.
  readonly teas = input.required<Resource<Tea[] | undefined>>();
}
// #enddocregion non-blocking-page
