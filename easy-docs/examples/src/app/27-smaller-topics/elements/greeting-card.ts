import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  template: `
    <p>Welcome, {{ name() }}!</p>
    <button (click)="greeted.emit(name())">Say hello</button>
  `,
})
export class ElementsGreetingCard {
  name = input('guest');
  greeted = output<string>();
}
