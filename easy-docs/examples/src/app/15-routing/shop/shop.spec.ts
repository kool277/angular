import {TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {RoutingProductDetail} from './product-detail';
import {RoutingProductList} from './product-list';
import {shopConfig} from './shop.config';

describe('shop routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: shopConfig.providers});
  });

  // #docregion harness
  it('passes the :id route parameter into the id input', async () => {
    const harness = await RouterTestingHarness.create();
    const detail = await harness.navigateByUrl('/products/honey', RoutingProductDetail);

    expect(detail.id()).toBe('honey');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Honey');
  });
  // #enddocregion harness

  it('passes the ?sort query parameter into the sort input', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/products?sort=price', RoutingProductList);
    const names = [...harness.routeNativeElement!.querySelectorAll('li')].map((li) =>
      li.textContent?.trim(),
    );
    expect(names).toEqual(['Black tea', 'Green tea', 'Honey']);
  });

  it('builds links with route and query parameters', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/products', RoutingProductList);
    const links = harness.routeNativeElement!.querySelectorAll('a');
    expect(links[1].getAttribute('href')).toBe('/products?sort=price');
    expect(links[2].getAttribute('href')).toBe('/products/green-tea');
  });

  it('shows a message for an unknown id', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/products/coffee', RoutingProductDetail);
    expect(harness.routeNativeElement?.textContent).toContain('There is no product "coffee".');
  });

  it('navigates from code with navigate() and navigateByUrl()', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/products/green-tea', RoutingProductDetail);
    const router = TestBed.inject(Router);

    harness.routeNativeElement!.querySelector<HTMLButtonElement>('button.honey')!.click();
    await harness.fixture.whenStable();
    expect(router.url).toBe('/products/honey');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Honey');

    harness.routeNativeElement!.querySelector<HTMLButtonElement>('button.back')!.click();
    await harness.fixture.whenStable();
    expect(router.url).toBe('/products?sort=price');
  });

  it('reads a snapshot once with ActivatedRoute', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/snapshot/honey?sort=name');
    expect(harness.routeNativeElement?.textContent).toBe('Product honey, sorted by name');
  });
});
