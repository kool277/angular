import {Component, signal} from '@angular/core';
import {form, FormField, minLength, required, validate} from '@angular/forms/signals';

@Component({
  selector: 'app-forms-password',
  imports: [FormField],
  template: `
    <label>Password <input type="password" [formField]="passwordForm.password" /></label>
    <label>Repeat it <input type="password" [formField]="passwordForm.confirm" /></label>
    @if (passwordForm.confirm().getError('mismatch'); as error) {
      <p class="error">{{ error.message }}</p>
    }
  `,
})
export class FormsPassword {
  readonly passwordModel = signal({password: '', confirm: ''});

  // #docregion schema
  readonly passwordForm = form(this.passwordModel, (path) => {
    required(path.password);
    minLength(path.password, 8);
    validate(path.confirm, ({value, valueOf}) => {
      if (value() !== valueOf(path.password)) {
        return {kind: 'mismatch', message: 'The two passwords are different.'};
      }
      return undefined;
    });
  });
  // #enddocregion schema
}
