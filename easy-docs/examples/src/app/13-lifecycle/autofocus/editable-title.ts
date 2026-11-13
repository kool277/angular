import {Component, signal} from '@angular/core';
import {LifeAutofocus} from './autofocus';

@Component({
  selector: 'app-life-editable-title',
  imports: [LifeAutofocus],
  template: `
    @if (editing()) {
      <input
        appAutofocus
        [value]="title()"
        (keydown.enter)="save($event)"
        (keydown.escape)="editing.set(false)"
      />
    } @else {
      <h2>{{ title() }}</h2>
      <button type="button" (click)="editing.set(true)">Rename</button>
    }
  `,
})
export class LifeEditableTitle {
  readonly title = signal('Shopping list');
  readonly editing = signal(false);

  save(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.title.set(input.value.trim() || this.title());
    this.editing.set(false);
  }
}
