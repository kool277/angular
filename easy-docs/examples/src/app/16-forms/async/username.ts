import {Component, resource, signal} from '@angular/core';
import {debounce, form, FormField, required, validateAsync} from '@angular/forms/signals';

// #docregion fake-server
const TAKEN_NAMES = ['admin', 'aziza'];

/** Pretends to ask a server. The answer arrives after 50 ms. */
export function isUsernameTaken(name: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(TAKEN_NAMES.includes(name.toLowerCase())), 50);
  });
}
// #enddocregion fake-server

@Component({
  selector: 'app-forms-username',
  imports: [FormField],
  template: `
    <label>Username <input [formField]="nameForm.username" /></label>
    @if (nameForm.username().pending()) {
      <p class="pending">Checking…</p>
    } @else if (nameForm.username().getError('taken'); as error) {
      <p class="error">{{ error.message }}</p>
    }
  `,
})
export class FormsUsername {
  readonly nameModel = signal({username: ''});

  // #docregion schema
  readonly nameForm = form(this.nameModel, (path) => {
    required(path.username);
    debounce(path.username, 200);
    validateAsync(path.username, {
      params: ({value}) => (value().length >= 3 ? value() : undefined),
      factory: (username) =>
        resource({
          params: username,
          loader: ({params}) => isUsernameTaken(params),
        }),
      onSuccess: (taken) =>
        taken ? {kind: 'taken', message: 'This name is already taken.'} : undefined,
      onError: () => ({kind: 'checkFailed', message: 'Could not check the name.'}),
    });
  });
  // #enddocregion schema
}
