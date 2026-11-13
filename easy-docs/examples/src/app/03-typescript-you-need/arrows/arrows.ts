// #docregion arrow
export const double = (n: number): number => n * 2;

export const isEven = (n: number) => n % 2 === 0;

export const makePoint = (x: number, y: number) => ({x, y});
// #enddocregion arrow

// #docregion callbacks
export function evenDoubles(numbers: number[]): number[] {
  return numbers.filter((n) => isEven(n)).map((n) => double(n));
}
// #enddocregion callbacks

// #docregion this
export class Timer {
  seconds = 0;

  start(): void {
    setTimeout(() => {
      // An arrow function keeps `this`: it is still the Timer.
      this.seconds = this.seconds + 1;
    }, 1000);
  }
}
// #enddocregion this
