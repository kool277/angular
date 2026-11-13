import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <h2>Hello, {{ name() }}!</h2>
    <a routerLink="/hello/Bobur">Say hello to Bobur</a>
  `,
})
export class RoutingHello {
  readonly name = input.required<string>();
}
