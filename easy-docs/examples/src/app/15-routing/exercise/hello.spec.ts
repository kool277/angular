import {TestBed} from '@angular/core/testing';
import {provideRouter, Router, withComponentInputBinding} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {helloRoutes} from './hello.routes';

describe('RoutingHello', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(helloRoutes, withComponentInputBinding())],
    });
  });

  it('greets the name from the URL', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/hello/Malika');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Hello, Malika!');
  });

  it('sends every other URL to /hello/world', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/something/else');
    expect(TestBed.inject(Router).url).toBe('/hello/world');
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Hello, world!');
  });

  it('changes the greeting when you click the link', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/hello/world');
    harness.routeNativeElement!.querySelector('a')!.click();
    await harness.fixture.whenStable();
    expect(harness.routeNativeElement?.querySelector('h2')?.textContent).toBe('Hello, Bobur!');
  });
});
