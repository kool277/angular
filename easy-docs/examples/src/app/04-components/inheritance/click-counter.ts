// #docregion base
export class ClickCounter {
  clicks = 0;

  registerClick(): void {
    this.clicks = this.clicks + 1;
  }

  summary(): string {
    return `${this.clicks} clicks`;
  }
}
// #enddocregion base
