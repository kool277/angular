import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

// #docregion shell
@Component({
  selector: 'app-routing-nested-shell',
  imports: [RouterLink, RouterOutlet],
  template: `
    <a class="open" [routerLink]="[{outlets: {side: ['help']}}]">Show help</a>
    <a class="close" [routerLink]="[{outlets: {side: null}}]">Hide help</a>
    <main>
      <router-outlet />
    </main>
    <aside>
      <router-outlet name="side" />
    </aside>
  `,
})
export class RoutingNestedShell {}
// #enddocregion shell
