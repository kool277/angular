import {TestBed} from '@angular/core/testing';
import {outputToObservable} from '@angular/core/rxjs-interop';
import {RxWordDemo, RxWordInput} from './word-input';

describe('outputFromObservable and outputToObservable', () => {
  // #docregion helper
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  async function type(input: HTMLInputElement, text: string) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
    await vi.advanceTimersByTimeAsync(50);
  }
  // #enddocregion helper

  it('the parent gets the text once typing stops', async () => {
    const fixture = TestBed.createComponent(RxWordDemo);
    await vi.advanceTimersByTimeAsync(0);
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    await type(input, 'Gr');
    await type(input, 'Green');
    await vi.advanceTimersByTimeAsync(400);

    expect(fixture.nativeElement.querySelector('p').textContent).toBe('You stopped at: Green');
  });

  // #docregion to-observable
  it('turns the output into an Observable', async () => {
    const fixture = TestBed.createComponent(RxWordInput);
    const values: string[] = [];
    outputToObservable(fixture.componentInstance.settled).subscribe((text) => values.push(text));
    await vi.advanceTimersByTimeAsync(0);
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    await type(input, 'Mint');
    await vi.advanceTimersByTimeAsync(400);

    expect(values).toEqual(['Mint']);
  });
  // #enddocregion to-observable
});
