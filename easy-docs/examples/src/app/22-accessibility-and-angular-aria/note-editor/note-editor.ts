import {Component, signal} from '@angular/core';
import {Toolbar, ToolbarWidget} from '@angular/aria/toolbar';

@Component({
  selector: 'app-a11y-note-editor',
  imports: [Toolbar, ToolbarWidget],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class A11yNoteEditor {
  readonly bold = signal(false);
  readonly italic = signal(false);
  protected readonly status = signal('');

  protected save(): void {
    this.status.set('Note saved.');
  }
}
