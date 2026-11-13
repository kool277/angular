import {Component, signal} from '@angular/core';
import {FormField, email, form, minLength, required, schema} from '@angular/forms/signals';

export interface TestingLogin {
  email: string;
  password: string;
}

// #docregion schema
export const testingLoginSchema = schema<TestingLogin>((path) => {
  required(path.email);
  email(path.email);
  required(path.password);
  minLength(path.password, 8);
});
// #enddocregion schema

@Component({
  selector: 'app-testing-login-form',
  imports: [FormField],
  template: `
    <input type="email" [formField]="loginForm.email" />
    <input type="password" [formField]="loginForm.password" />
    <button type="submit" [disabled]="loginForm().invalid()">Log in</button>
  `,
})
export class TestingLoginForm {
  readonly model = signal<TestingLogin>({email: '', password: ''});
  readonly loginForm = form(this.model, testingLoginSchema);
}
