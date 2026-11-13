// #docregion counter
export class Counter {
  count = 0;
  step: number;

  constructor(step: number) {
    this.step = step;
  }

  increase(): void {
    this.count = this.count + this.step;
  }
}
// #enddocregion counter
