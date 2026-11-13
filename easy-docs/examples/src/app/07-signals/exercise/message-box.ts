import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-message-box',
  template: `
    <textarea #box (input)="text.set(box.value)"></textarea>
    <p [class.warning]="tooLong()">{{ remaining() }} characters left</p>
    <button [disabled]="tooLong() || text() === ''">Send</button>
  `,
  styles: `
    .warning {
      color: red;
    }
  `,
})
export class SignalsMessageBox {
  readonly limit = 20;
  readonly text = signal('');
  readonly remaining = computed(() => this.limit - this.text().length);
  readonly tooLong = computed(() => this.remaining() < 0);
}
