import {TestBed} from '@angular/core/testing';
import {provideRouter, Router} from '@angular/router';
import {RoutingNestedShell} from './nested-shell';
import {nestedRoutes} from './nested.routes';

describe('child routes and named outlets', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideRouter(nestedRoutes)]});
    router = TestBed.inject(Router);
  });

  it('shows a child page inside the parent page', async () => {
    const fixture = TestBed.createComponent(RoutingNestedShell);
    await router.navigateByUrl('/settings');
    await fixture.whenStable();
    const main = (fixture.nativeElement as HTMLElement).querySelector('main')!;

    expect(router.url).toBe('/settings/profile');
    expect(main.querySelector('h2')?.textContent).toBe('Settings');
    expect(main.querySelector('section')?.textContent).toBe('Your name and photo.');

    main.querySelectorAll<HTMLAnchorElement>('nav a')[1].click();
    await fixture.whenStable();
    expect(router.url).toBe('/settings/security');
    expect(main.querySelector('section')?.textContent).toBe('Your password.');
  });

  it('opens and closes a page in the named outlet', async () => {
    const fixture = TestBed.createComponent(RoutingNestedShell);
    await router.navigateByUrl('/settings/security');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector<HTMLAnchorElement>('a.open')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/settings/security(side:help)');
    expect(page.querySelector('aside')?.textContent).toContain('Tip:');
    expect(page.querySelector('section')?.textContent).toBe('Your password.');

    page.querySelector<HTMLAnchorElement>('a.close')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/settings/security');
    expect(page.querySelector('aside')?.textContent?.trim()).toBe('');
  });
});
