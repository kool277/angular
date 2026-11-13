import {ApplicationConfig, Component} from '@angular/core';
import {
  provideRouter,
  RouterLink,
  RouterOutlet,
  Routes,
  withViewTransitions,
} from '@angular/router';

@Component({template: '<h2>Home</h2>'})
export class AnimHomePage {}

@Component({template: '<h2>Tickets</h2>'})
export class AnimTicketsPage {}

export const transitionRoutes: Routes = [
  {path: '', component: AnimHomePage},
  {path: 'tickets', component: AnimTicketsPage},
];

// #docregion config
export const viewTransitionsConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      transitionRoutes,
      withViewTransitions({
        onViewTransitionCreated: ({transition}) => {
          if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
            transition.skipTransition();
          }
        },
      }),
    ),
  ],
};
// #enddocregion config

@Component({
  selector: 'app-transitions-shell',
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/tickets">Tickets</a>
    </nav>
    <router-outlet />
  `,
})
export class AnimTransitionsShell {}
