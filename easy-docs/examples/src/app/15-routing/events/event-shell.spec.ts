import {TestBed} from '@angular/core/testing';
import {provideRouter, Router} from '@angular/router';
import {RoutingEventShell} from './event-shell';
import {eventRoutes} from './event.routes';

describe('RoutingEventShell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideRouter(eventRoutes)]});
  });

  it('shows "Loading…" while a navigation runs', async () => {
    const fixture = TestBed.createComponent(RoutingEventShell);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    const done = router.navigateByUrl('/slow');
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(fixture.componentInstance.isNavigating()).toBe(true);
    expect(page.querySelector('.loading')?.textContent).toBe('Loading…');

    await done;
    await fixture.whenStable();
    expect(page.querySelector('.loading')).toBeNull();
    expect(page.querySelector('h2')?.textContent).toBe('Slow page');
  });

  it('writes NavigationStart and NavigationEnd events to the log', async () => {
    const fixture = TestBed.createComponent(RoutingEventShell);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/old-slow');
    await fixture.whenStable();

    expect(fixture.componentInstance.log()).toEqual(['start /old-slow', 'end /slow']);
  });
});
