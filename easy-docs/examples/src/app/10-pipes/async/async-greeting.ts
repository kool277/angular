import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-async-greeting',
  imports: [AsyncPipe],
  template: `<p>{{ (greeting | async) ?? 'Loading…' }}</p>`,
})
export class PipesAsyncGreeting {
  // A Promise: the value arrives later.
  greeting = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Hello from the server!'), 100);
  });
}
