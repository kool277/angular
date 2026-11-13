import {TestBed} from '@angular/core/testing';
import {LifeClockDemo} from './clock';
import {LifeClockDestroyRef} from './clock-destroy-ref';

/** Returns the id of the timer that the clock started (the one with a 1000 ms delay). */
function clockTimerId(start: {mock: {calls: unknown[][]; results: {value: unknown}[]}}): unknown {
  const index = start.mock.calls.findIndex((call: unknown[]) => call[1] === 1000);
  return start.mock.results[index]?.value;
}

describe('LifeClock', () => {
  afterEach(() => vi.restoreAllMocks());

  it('starts a timer in ngOnInit and stops it in ngOnDestroy', async () => {
    const start = vi.spyOn(globalThis, 'setInterval');
    const stop = vi.spyOn(globalThis, 'clearInterval');
    const fixture = TestBed.createComponent(LifeClockDemo);
    await fixture.whenStable();
    const id = clockTimerId(start);
    expect(id).toBeDefined();
    expect(stop).not.toHaveBeenCalledWith(id);

    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    expect(stop).toHaveBeenCalledWith(id);
  });

  it('counts the seconds', async () => {
    vi.useFakeTimers();
    try {
      const fixture = TestBed.createComponent(LifeClockDemo);
      await vi.advanceTimersByTimeAsync(3500);
      expect((fixture.nativeElement as HTMLElement).querySelector('p')?.textContent).toBe(
        'Seconds on this page: 3',
      );
    } finally {
      vi.useRealTimers();
    }
  });
});

describe('LifeClockDestroyRef', () => {
  afterEach(() => vi.restoreAllMocks());

  it('stops its timer through DestroyRef.onDestroy', async () => {
    const start = vi.spyOn(globalThis, 'setInterval');
    const stop = vi.spyOn(globalThis, 'clearInterval');
    const fixture = TestBed.createComponent(LifeClockDestroyRef);
    await fixture.whenStable();
    const id = clockTimerId(start);
    expect(id).toBeDefined();
    fixture.destroy();
    expect(stop).toHaveBeenCalledWith(id);
  });
});
