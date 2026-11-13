// #docregion imports
import {TestBed} from '@angular/core/testing';
import {Router, provideRouter, withComponentInputBinding} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {TestingTeaMenu, TestingTeaPage, testingRoutes} from './pages';
// #enddocregion imports

describe('tea routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(testingRoutes, withComponentInputBinding())],
    });
  });

  // #docregion harness
  it('opens a tea page from a URL', async () => {
    const harness = await RouterTestingHarness.create();
    const page = await harness.navigateByUrl('/teas/mint', TestingTeaPage);

    expect(page.id()).toBe('mint');
    expect(harness.routeNativeElement?.textContent).toBe('Tea: mint');
  });

  it('follows a routerLink', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeDebugElement?.componentInstance).toBeInstanceOf(TestingTeaMenu);

    harness.routeNativeElement!.querySelector('a')!.click();
    await harness.fixture.whenStable();

    expect(TestBed.inject(Router).url).toBe('/teas/green');
    expect(harness.routeNativeElement?.textContent).toBe('Tea: green');
  });
  // #enddocregion harness
});
