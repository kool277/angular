import {TestBed} from '@angular/core/testing';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {matcherRoutes} from './matcher';

describe('a custom URL matcher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(matcherRoutes, withComponentInputBinding())],
    });
  });

  it('matches /@name and passes the name as a parameter', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/@aziza');
    expect(harness.routeNativeElement?.textContent).toBe('Profile of aziza');
  });

  it('does not match a name without @', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/aziza');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Page not found');
  });
});
