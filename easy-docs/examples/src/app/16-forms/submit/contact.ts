import {Component, signal} from '@angular/core';
import {email, form, FormField, FormRoot, required} from '@angular/forms/signals';
import {Contact, saveContact} from './fake-server';

@Component({
  selector: 'app-forms-contact',
  imports: [FormField, FormRoot],
  template: `
    <!-- #docregion template -->
    <form [formRoot]="contactForm">
      <label>Name <input [formField]="contactForm.name" /></label>
      <label>Email <input type="email" [formField]="contactForm.email" /></label>
      @for (error of contactForm.email().errors(); track error.kind) {
        @if (contactForm.email().touched()) {
          <p class="error">{{ error.message }}</p>
        }
      }
      <button type="submit" [disabled]="contactForm().submitting()">
        {{ contactForm().submitting() ? 'Saving…' : 'Save' }}
      </button>
    </form>
    <!-- #enddocregion template -->
    @if (saved()) {
      <p class="saved">Saved {{ saved() }}.</p>
    }
  `,
})
export class FormsContact {
  readonly contactModel = signal<Contact>({name: '', email: ''});
  readonly saved = signal('');

  // #docregion form
  readonly contactForm = form(
    this.contactModel,
    (path) => {
      required(path.name);
      required(path.email, {message: 'Enter an email address.'});
      email(path.email, {message: 'This is not an email address.'});
    },
    {
      submission: {
        action: async (field) => {
          const result = await saveContact(field().value());
          if (!result.ok) {
            return {
              kind: 'emailTaken',
              message: 'This email address is already used.',
              fieldTree: field.email,
            };
          }
          this.saved.set(field.name().value());
          return undefined;
        },
      },
    },
  );
  // #enddocregion form
}
