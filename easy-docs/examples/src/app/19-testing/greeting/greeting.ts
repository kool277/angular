import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-testing-greeting',
  template: `
    <h1>Hello, {{ name() }}!</h1>
    <button type="button" (click)="name.set('Ada')">Greet Ada</button>
  `,
})
export class TestingGreeting {
  readonly name = signal('world');
}
