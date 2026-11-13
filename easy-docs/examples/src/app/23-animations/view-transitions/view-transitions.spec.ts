import {TestBed} from '@angular/core/testing';
import {RouterTestingHarness} from '@angular/router/testing';
import {viewTransitionsConfig} from './view-transitions.config';

describe('withViewTransitions()', () => {
  it('still navigates when the browser has no View Transitions API', async () => {
    expect('startViewTransition' in document).toBe(false);
    TestBed.configureTestingModule({providers: viewTransitionsConfig.providers});
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/tickets');
    expect(harness.routeNativeElement?.textContent).toContain('Tickets');

    await harness.navigateByUrl('/');
    expect(harness.routeNativeElement?.textContent).toContain('Home');
  });
});
