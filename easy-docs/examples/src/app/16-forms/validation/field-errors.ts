import {Component, input} from '@angular/core';
import {ReadonlyFieldState} from '@angular/forms/signals';

/** Shows the error messages of one field, after the user has left it. */
@Component({
  selector: 'app-forms-field-errors',
  template: `
    @if (state().touched()) {
      @for (error of state().errors(); track error.kind) {
        <p class="error">{{ error.message }}</p>
      }
    }
  `,
  styles: `
    .error {
      color: darkred;
    }
  `,
})
export class FormsFieldErrors {
  readonly state = input.required<ReadonlyFieldState<unknown>>();
}
