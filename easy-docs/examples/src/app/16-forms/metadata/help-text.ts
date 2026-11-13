import {Component, computed, signal} from '@angular/core';
import {createMetadataKey, form, FormField, metadata} from '@angular/forms/signals';

// #docregion key
export const HELP_TEXT = createMetadataKey<string>();
// #enddocregion key

@Component({
  selector: 'app-forms-help-text',
  imports: [FormField],
  template: `
    <label>Username <input [formField]="nameForm.username" /></label>
    <p class="help">{{ help() }}</p>
  `,
})
export class FormsHelpText {
  readonly nameModel = signal({username: ''});

  // #docregion form
  readonly nameForm = form(this.nameModel, (path) => {
    metadata(path.username, HELP_TEXT, ({value}) =>
      value().length < 3 ? 'At least 3 characters.' : 'Looks good.',
    );
  });

  readonly help = computed(() => this.nameForm.username().metadata(HELP_TEXT)?.() ?? '');
  // #enddocregion form
}
