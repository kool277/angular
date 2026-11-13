import {TestBed} from '@angular/core/testing';
import {RxTicker} from './ticker';

describe('RxTicker', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('shows the initial value, then a new value every second', async () => {
    const fixture = TestBed.createComponent(RxTicker);
    await vi.advanceTimersByTimeAsync(0);
    expect(fixture.nativeElement.textContent).toBe('Seconds on this page: 0');

    // interval gives 0 after 1 s, 1 after 2 s, 2 after 3 s.
    await vi.advanceTimersByTimeAsync(3500);
    expect(fixture.nativeElement.textContent).toBe('Seconds on this page: 2');
  });
});
