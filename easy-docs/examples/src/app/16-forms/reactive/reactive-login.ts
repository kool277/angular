import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms-reactive-login',
  imports: [ReactiveFormsModule],
  template: `
    <!-- #docregion template -->
    <form [formGroup]="loginForm" (ngSubmit)="logIn()">
      <label>Email <input type="email" formControlName="email" /></label>
      @if (loginForm.controls.email.touched && loginForm.controls.email.hasError('email')) {
        <p class="error">This is not an email address.</p>
      }
      <label>Password <input type="password" formControlName="password" /></label>
      <button type="submit" [disabled]="loginForm.invalid">Log in</button>
    </form>
    <!-- #enddocregion template -->
    @if (welcome()) {
      <p class="welcome">{{ welcome() }}</p>
    }
  `,
})
export class FormsReactiveLogin {
  // #docregion form
  readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  readonly welcome = signal('');

  logIn() {
    const {email} = this.loginForm.getRawValue(); // type: { email: string; password: string }
    this.welcome.set(`Welcome, ${email}!`);
  }
  // #enddocregion form
}
