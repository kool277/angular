import {Component, signal} from '@angular/core';
import {outputFromObservable, toObservable} from '@angular/core/rxjs-interop';
import {debounceTime, filter} from 'rxjs';

@Component({
  selector: 'app-rx-word-input',
  template: `<input #box placeholder="Type a tea name" (input)="text.set(box.value)" />`,
})
export class RxWordInput {
  protected readonly text = signal('');

  // #docregion output
  /** Fires 300 ms after the user stops typing, with the text (never empty). */
  readonly settled = outputFromObservable(
    toObservable(this.text).pipe(
      debounceTime(300),
      filter((text) => text !== ''),
    ),
  );
  // #enddocregion output
}

@Component({
  selector: 'app-rx-word-demo',
  imports: [RxWordInput],
  template: `
    <app-rx-word-input (settled)="last.set($event)" />
    <p>You stopped at: {{ last() }}</p>
  `,
})
export class RxWordDemo {
  protected readonly last = signal('');
}
