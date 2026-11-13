import {Timer, double, evenDoubles, makePoint} from './arrows';

describe('arrow functions', () => {
  it('works like a normal function', () => {
    expect(double(21)).toBe(42);
    expect(makePoint(1, 2)).toEqual({x: 1, y: 2});
  });

  it('is handy as a callback', () => {
    expect(evenDoubles([1, 2, 3, 4])).toEqual([4, 8]);
  });

  it('keeps `this` inside a callback', () => {
    vi.useFakeTimers();
    const timer = new Timer();
    timer.start();
    vi.advanceTimersByTime(1000);
    expect(timer.seconds).toBe(1);
    vi.useRealTimers();
  });
});
