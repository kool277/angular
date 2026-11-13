import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {lazyRoutes} from './lazy.routes';

describe('lazy loaded routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideRouter(lazyRoutes)]});
  });

  it('loads a component with loadComponent', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/report');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Sales report');
  });

  it('loads child routes with loadChildren', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/admin');
    expect(harness.routeNativeElement?.textContent).toBe('Admin start page');
    await harness.navigateByUrl('/admin/users');
    expect(harness.routeNativeElement?.textContent).toBe('Admin: users');
  });
});
