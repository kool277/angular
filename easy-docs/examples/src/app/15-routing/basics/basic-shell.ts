import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-routing-basic-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <!-- #docregion links -->
      <a
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: true}"
        ariaCurrentWhenActive="page"
      >
        Home
      </a>
      <a routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">About</a>
      <!-- #enddocregion links -->
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: `
    .active {
      font-weight: bold;
    }
  `,
})
export class RoutingBasicShell {}
