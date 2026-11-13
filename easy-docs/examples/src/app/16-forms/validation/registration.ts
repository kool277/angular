import {Component, signal} from '@angular/core';
import {
  email,
  form,
  FormField,
  min,
  minLength,
  pattern,
  required,
  validate,
} from '@angular/forms/signals';
import {FormsFieldErrors} from './field-errors';

@Component({
  selector: 'app-forms-registration',
  imports: [FormField, FormsFieldErrors],
  template: `
    <!-- #docregion template -->
    <label>Username <input [formField]="regForm.username" /></label>
    <app-forms-field-errors [state]="regForm.username()" />
    <!-- #enddocregion template -->

    <label>Email <input type="email" [formField]="regForm.email" /></label>
    <app-forms-field-errors [state]="regForm.email()" />

    <label>Age <input type="number" [formField]="regForm.age" /></label>
    <app-forms-field-errors [state]="regForm.age()" />

    <label><input type="checkbox" [formField]="regForm.callMe" /> Call me</label>
    <label>Phone <input type="tel" [formField]="regForm.phone" /></label>
    <app-forms-field-errors [state]="regForm.phone()" />

    <button [disabled]="regForm().invalid()">Register</button>
  `,
})
export class FormsRegistration {
  readonly regModel = signal({username: '', email: '', age: 18, callMe: false, phone: ''});

  // #docregion schema
  readonly regForm = form(this.regModel, (path) => {
    required(path.username, {message: 'Choose a username.'});
    minLength(path.username, 3, {message: 'Use at least 3 characters.'});
    validate(path.username, ({value}) => {
      if (value().includes(' ')) {
        return {kind: 'noSpaces', message: 'Spaces are not allowed.'};
      }
      return undefined;
    });

    required(path.email, {message: 'Enter your email address.'});
    email(path.email, {message: 'This is not an email address.'});

    min(path.age, 16, {message: 'You must be 16 or older.'});

    required(path.phone, {
      message: 'Enter a phone number, so that we can call you.',
      when: ({valueOf}) => valueOf(path.callMe),
    });
    pattern(path.phone, /^\+?[0-9 ]*$/, {message: 'Use only digits, spaces and "+".'});
  });
  // #enddocregion schema
}
