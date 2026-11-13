import {TestBed} from '@angular/core/testing';
import {Title} from '@angular/platform-browser';
import {provideRouter, Router, withComponentInputBinding} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {RoutingResolvedProduct} from './pages';
import {resolverRoutes} from './resolver.routes';

describe('data resolvers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(resolverRoutes, withComponentInputBinding())],
    });
  });

  it('loads the product before the page opens', async () => {
    const harness = await RouterTestingHarness.create();
    const page = await harness.navigateByUrl('/products/honey', RoutingResolvedProduct);

    expect(page.product().name).toBe('Honey');
    expect(harness.routeNativeElement?.querySelector('p')?.textContent).toBe('7 €');
    expect(TestBed.inject(Title).getTitle()).toBe('Product honey');
  });

  it('redirects when there is no such product', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/products/coffee');
    expect(TestBed.inject(Router).url).toBe('/not-found');
    expect(harness.routeNativeElement?.textContent).toBe('Not found');
  });
});
