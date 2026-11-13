// #docregion countdown
import {Observable, Subject, filter, from, map} from 'rxjs';

/** An Observable made by hand: it counts down once per second, then completes. */
export function countdown(start: number): Observable<number> {
  return new Observable<number>((subscriber) => {
    let current = start;
    subscriber.next(current);
    const timer = setInterval(() => {
      current--;
      subscriber.next(current);
      if (current === 0) {
        subscriber.complete();
      }
    }, 1000);
    // Runs when the subscription ends: stop the timer.
    return () => clearInterval(timer);
  });
}
// #enddocregion countdown

// #docregion pipe
/** Keeps the prices below 6 and turns them into text. */
export function cheapPrices(prices: number[]): Observable<string> {
  return from(prices).pipe(
    filter((price) => price < 6),
    map((price) => `${price} €`),
  );
}
// #enddocregion pipe

// #docregion subject
/** A Subject is an Observable that you can push values into. */
export class RxChat {
  private readonly messages = new Subject<string>();
  readonly messages$ = this.messages.asObservable();

  send(text: string): void {
    this.messages.next(text);
  }
}
// #enddocregion subject
