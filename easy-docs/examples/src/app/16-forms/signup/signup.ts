import {Component, signal} from '@angular/core';
import {email, form, FormField, required} from '@angular/forms/signals';

@Component({
  selector: 'app-forms-signup',
  imports: [FormField],
  template: `
    <label>
      Email
      <input type="email" [formField]="signupForm.email" />
    </label>
    @if (signupForm.email().invalid()) {
      <p class="error">Please enter a valid email address.</p>
    }
    <p class="echo">Model: {{ signupModel().email }}</p>
  `,
})
export class FormsSignup {
  readonly signupModel = signal({email: ''});

  readonly signupForm = form(this.signupModel, (path) => {
    required(path.email);
    email(path.email);
  });
}
