import {Component, EventEmitter, Input, Output} from '@angular/core';

// Older style. New code uses input() and output() instead.
@Component({
  selector: 'app-old-panel',
  template: `
    <h3>{{ title }}</h3>
    <button (click)="closed.emit()">Close</button>
  `,
})
export class InputsOldPanel {
  @Input() title = '';
  @Input({required: true}) id = 0;
  @Output() closed = new EventEmitter<void>();
}

@Component({
  selector: 'app-old-panel-demo',
  imports: [InputsOldPanel],
  template: `
    @if (open) {
      <app-old-panel title="News" [id]="1" (closed)="open = false" />
    }
  `,
})
export class InputsOldPanelDemo {
  open = true;
}
