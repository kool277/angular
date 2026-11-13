import {Component, computed, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-routing-event-shell',
  imports: [RouterOutlet],
  template: `
    @if (isNavigating()) {
      <p class="loading">Loading…</p>
    }
    <router-outlet />
    <ol class="log">
      @for (line of log(); track $index) {
        <li>{{ line }}</li>
      }
    </ol>
  `,
})
export class RoutingEventShell {
  private readonly router = inject(Router);

  // #docregion loading
  readonly isNavigating = computed(() => this.router.currentNavigation() !== null);
  // #enddocregion loading

  // #docregion events
  readonly log = signal<string[]>([]);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.log.update((lines) => [...lines, `start ${event.url}`]);
      }
      if (event instanceof NavigationEnd) {
        this.log.update((lines) => [...lines, `end ${event.urlAfterRedirects}`]);
      }
    });
  }
  // #enddocregion events
}
