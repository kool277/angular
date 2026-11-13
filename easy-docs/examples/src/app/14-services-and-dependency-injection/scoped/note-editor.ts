import {Component, inject, input, signal} from '@angular/core';
import {DiDraftStore} from './draft-store';

// #docregion editor
@Component({
  selector: 'app-di-note-editor',
  providers: [DiDraftStore],
  template: `
    <label>
      {{ title() }}
      <textarea [value]="draft.text()" (input)="update($event)"></textarea>
    </label>
    <small>{{ draft.text().length }} characters</small>
  `,
})
export class DiNoteEditor {
  readonly title = input.required<string>();
  protected readonly draft = inject(DiDraftStore);

  update(event: Event): void {
    this.draft.text.set((event.target as HTMLTextAreaElement).value);
  }
}
// #enddocregion editor

@Component({
  selector: 'app-di-note-editor-demo',
  imports: [DiNoteEditor],
  template: `
    <app-di-note-editor title="Shopping" />
    @if (showWork()) {
      <app-di-note-editor title="Work" />
    }
  `,
})
export class DiNoteEditorDemo {
  readonly showWork = signal(true);
}
