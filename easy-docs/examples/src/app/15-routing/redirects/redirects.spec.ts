import {TestBed} from '@angular/core/testing';
import {provideRouter, Router, withComponentInputBinding} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {redirectRoutes} from './redirect.routes';

describe('redirects and the wildcard route', () => {
  let harness: RouterTestingHarness;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(redirectRoutes, withComponentInputBinding())],
    });
    harness = await RouterTestingHarness.create();
    router = TestBed.inject(Router);
  });

  it('sends the empty path to /home', async () => {
    await harness.navigateByUrl('/');
    expect(router.url).toBe('/home');
  });

  it('sends an old link to its new place', async () => {
    await harness.navigateByUrl('/articles');
    expect(router.url).toBe('/blog');
    expect(harness.routeNativeElement?.textContent).toBe('Blog');
  });

  it('decides the target in a redirect function', async () => {
    await harness.navigateByUrl('/menu?meal=dinner');
    expect(router.url).toBe('/menu/dinner');
    await harness.navigateByUrl('/menu');
    expect(router.url).toBe('/menu/lunch');
    expect(harness.routeNativeElement?.textContent).toBe('Menu: lunch');
  });

  it('shows the not-found page for every other URL and keeps the URL', async () => {
    await harness.navigateByUrl('/no/such/page');
    expect(router.url).toBe('/no/such/page');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Page not found');
  });
});
