import {TestBed} from '@angular/core/testing';
import {RxLivePrice} from './live-price';

describe('RxLivePrice', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('updates value() for every value of the stream', async () => {
    const fixture = TestBed.createComponent(RxLivePrice);
    const text = () => fixture.nativeElement.querySelector('p').textContent;

    await vi.advanceTimersByTimeAsync(10);
    expect(text()).toBe('Price now: 4 €');

    await vi.advanceTimersByTimeAsync(1000);
    expect(text()).toBe('Price now: 4.1 €');
  });

  it('starts a new stream when the params change', async () => {
    const fixture = TestBed.createComponent(RxLivePrice);
    await vi.advanceTimersByTimeAsync(10);

    fixture.nativeElement.querySelectorAll('button')[1].click();
    await vi.advanceTimersByTimeAsync(10);

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Price now: 5 €');
  });
});
