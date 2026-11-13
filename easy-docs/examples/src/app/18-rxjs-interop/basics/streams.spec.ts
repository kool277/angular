import {RxChat, cheapPrices, countdown} from './streams';

describe('Observable basics', () => {
  afterEach(() => vi.useRealTimers());

  // #docregion subscribe
  it('countdown gives values over time and then completes', () => {
    vi.useFakeTimers();
    const values: number[] = [];
    let done = false;

    const subscription = countdown(3).subscribe({
      next: (value) => values.push(value),
      complete: () => (done = true),
    });
    expect(values).toEqual([3]);

    vi.advanceTimersByTime(3000);
    expect(values).toEqual([3, 2, 1, 0]);
    expect(done).toBe(true);
    subscription.unsubscribe();
  });
  // #enddocregion subscribe

  it('unsubscribe stops the values', () => {
    vi.useFakeTimers();
    const values: number[] = [];
    const subscription = countdown(5).subscribe((value) => values.push(value));

    vi.advanceTimersByTime(1000);
    subscription.unsubscribe();
    vi.advanceTimersByTime(5000);

    expect(values).toEqual([5, 4]);
  });

  it('pipe with filter and map changes the values', () => {
    const values: string[] = [];
    cheapPrices([3, 8, 5]).subscribe((text) => values.push(text));
    expect(values).toEqual(['3 €', '5 €']);
  });

  it('a Subject sends a value to every subscriber', () => {
    const chat = new RxChat();
    const first: string[] = [];
    const second: string[] = [];
    chat.messages$.subscribe((text) => first.push(text));
    chat.send('Hello');
    chat.messages$.subscribe((text) => second.push(text));
    chat.send('Tea?');

    expect(first).toEqual(['Hello', 'Tea?']);
    expect(second).toEqual(['Tea?']);
  });
});
