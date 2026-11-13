// #docregion setup
import {TestBed} from '@angular/core/testing';
import {provideRouter, Router, withComponentInputBinding} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {RoutingAuth} from './auth';
import {guardRoutes} from './guard.routes';
import {RoutingAccountPage, RoutingLoginPage, RoutingNotesPage} from './pages';

describe('route guards', () => {
  let harness: RouterTestingHarness;
  let router: Router;
  let auth: RoutingAuth;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(guardRoutes, withComponentInputBinding())],
    });
    harness = await RouterTestingHarness.create();
    router = TestBed.inject(Router);
    auth = TestBed.inject(RoutingAuth);
  });
  // #enddocregion setup

  // #docregion guard-test
  it('sends a visitor who is not logged in to the login page', async () => {
    await harness.navigateByUrl('/account', RoutingLoginPage);
    expect(router.url).toBe('/login?returnUrl=%2Faccount');
  });

  it('lets a logged-in user in', async () => {
    auth.loggedIn.set(true);
    await harness.navigateByUrl('/account', RoutingAccountPage);
    expect(router.url).toBe('/account');
  });
  // #enddocregion guard-test

  it('goes back to the first page after logging in', async () => {
    await harness.navigateByUrl('/account', RoutingLoginPage);
    harness.routeNativeElement!.querySelector('button')!.click();
    await harness.fixture.whenStable();
    expect(router.url).toBe('/account');
    expect(harness.routeNativeElement?.textContent).toBe('Your account');
  });

  it('asks before leaving a page with unsaved changes', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
    const notes = await harness.navigateByUrl('/notes', RoutingNotesPage);
    notes.draft.set('Buy honey');

    const left = await router.navigateByUrl('/login');
    expect(confirmSpy).toHaveBeenCalledOnce();
    expect(left).toBe(false);
    expect(router.url).toBe('/notes');

    confirmSpy.mockReturnValue(true);
    expect(await router.navigateByUrl('/login')).toBe(true);
    expect(router.url).toBe('/login');
    confirmSpy.mockRestore();
  });

  it('does not ask when nothing changed', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm');
    await harness.navigateByUrl('/notes', RoutingNotesPage);
    expect(await router.navigateByUrl('/login')).toBe(true);
    expect(confirmSpy).not.toHaveBeenCalled();
    confirmSpy.mockRestore();
  });

  it('uses canMatch to pick one of two routes with the same path', async () => {
    await harness.navigateByUrl('/dashboard');
    expect(harness.routeNativeElement?.textContent).toBe('User dashboard');

    auth.isAdmin.set(true);
    await harness.navigateByUrl('/login');
    await harness.navigateByUrl('/dashboard');
    expect(harness.routeNativeElement?.textContent).toBe('Admin dashboard');
  });
});
