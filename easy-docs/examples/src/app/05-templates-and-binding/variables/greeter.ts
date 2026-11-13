import {Component} from '@angular/core';

@Component({
  selector: 'app-greeter',
  template: `
    @let fullName = firstName + ' ' + lastName;
    <h2>{{ fullName }}</h2>

    <input #nameInput placeholder="Your name" />
    <button type="button" (click)="greet(nameInput.value)">Greet</button>
    <p>{{ message }}</p>
  `,
})
export class TplGreeter {
  firstName = 'Amina';
  lastName = 'Karimova';
  message = '';

  greet(name: string): void {
    this.message = `Nice to meet you, ${name}!`;
  }
}
