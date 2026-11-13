import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {provideRouter, withComponentInputBinding, withRouterResources} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {HttpRouteMenuPage, HttpRouteTeaPage} from './pages';
import {teaResourceRoutes} from './tea.routes';

describe('route resources', () => {
  let httpTesting: HttpTestingController;

  // #docregion setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(teaResourceRoutes, withComponentInputBinding(), withRouterResources()),
        provideHttpClientTesting(),
      ],
    });
    httpTesting = TestBed.inject(HttpTestingController);
  });
  // #enddocregion setup

  afterEach(() => httpTesting.verify());

  /** Lets the navigation start, so that the resources send their requests. */
  async function letTheRouterStart() {
    await new Promise((resolve) => setTimeout(resolve));
    TestBed.tick();
  }

  it('waits for a blocking resource before it opens the page', async () => {
    const harness = await RouterTestingHarness.create();
    const navigation = harness.navigateByUrl('/teas/2', HttpRouteTeaPage);
    await letTheRouterStart();

    // The page is not open yet: the router waits for the data.
    expect(harness.routeNativeElement).toBeNull();

    httpTesting.expectOne('/http-demo/teas/2.json').flush({id: 2, name: 'Black tea', price: 3});
    const page = await navigation;

    expect(page.tea().name).toBe('Black tea');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Black tea');
  });

  it('opens the page at once for a non-blocking resource', async () => {
    const harness = await RouterTestingHarness.create();
    const navigation = harness.navigateByUrl('/menu', HttpRouteMenuPage);
    await letTheRouterStart();
    expect(harness.routeNativeElement?.textContent).toContain('Loading the menu…');

    httpTesting.expectOne('/http-demo/teas.json').flush([{id: 1, name: 'Green tea', price: 4}]);
    await navigation;
    await harness.fixture.whenStable();

    expect(harness.routeNativeElement?.querySelector('li')?.textContent).toBe('Green tea');
  });
});
