import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms-template-login',
  imports: [FormsModule],
  template: `
    <!-- #docregion template -->
    <form #loginForm="ngForm" (ngSubmit)="logIn()">
      <label>
        Email
        <input type="email" name="email" [(ngModel)]="email" required email #emailCtrl="ngModel" />
      </label>
      @if (emailCtrl.touched && emailCtrl.invalid) {
        <p class="error">Enter a valid email address.</p>
      }
      <label>
        Password
        <input type="password" name="password" [(ngModel)]="password" required minlength="8" />
      </label>
      <button type="submit" [disabled]="loginForm.invalid">Log in</button>
    </form>
    <!-- #enddocregion template -->
    @if (welcome()) {
      <p class="welcome">{{ welcome() }}</p>
    }
  `,
})
export class FormsTemplateLogin {
  // #docregion class
  readonly email = signal('');
  readonly password = signal('');
  readonly welcome = signal('');

  logIn() {
    this.welcome.set(`Welcome, ${this.email()}!`);
  }
  // #enddocregion class
}
