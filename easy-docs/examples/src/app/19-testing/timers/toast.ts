import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-testing-toast',
  template: `
    <button type="button" (click)="show('Saved!')">Save</button>
    @if (message()) {
      <p role="status">{{ message() }}</p>
    }
  `,
})
export class TestingToast {
  protected readonly message = signal('');

  show(text: string): void {
    this.message.set(text);
    setTimeout(() => this.message.set(''), 3000);
  }
}
