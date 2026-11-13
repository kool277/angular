import {Component} from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
    <p>Hello, {{ name }}!</p>
    <button type="button" [disabled]="name === 'Bekzod'" (click)="name = 'Bekzod'">
      Greet Bekzod
    </button>
  `,
})
export class TplGreeting {
  name = 'Amina';
}
