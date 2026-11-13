import {Component, signal} from '@angular/core';
import {form, FormField, FormRoot, minLength, required} from '@angular/forms/signals';

@Component({
  selector: 'app-forms-feedback',
  imports: [FormField, FormRoot],
  template: `
    <form [formRoot]="feedbackForm">
      <label>Name <input [formField]="feedbackForm.name" /></label>
      <label>Message <textarea [formField]="feedbackForm.message"></textarea></label>
      @if (feedbackForm.message().touched() && feedbackForm.message().invalid()) {
        <p class="error">{{ feedbackForm.message().errors()[0].message }}</p>
      }
      <button type="submit" [disabled]="feedbackForm().invalid()">Send</button>
    </form>
    <ul>
      @for (item of sent(); track $index) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
})
export class FormsFeedback {
  readonly feedbackModel = signal({name: '', message: ''});
  readonly sent = signal<string[]>([]);

  readonly feedbackForm = form(
    this.feedbackModel,
    (path) => {
      required(path.name);
      required(path.message, {message: 'Write a message.'});
      minLength(path.message, 10, {message: 'Write at least 10 characters.'});
    },
    {
      submission: {
        action: async (field) => {
          const {name, message} = field().value();
          this.sent.update((list) => [...list, `${name}: ${message}`]);
          field().reset({name: '', message: ''});
          return undefined;
        },
      },
    },
  );
}
