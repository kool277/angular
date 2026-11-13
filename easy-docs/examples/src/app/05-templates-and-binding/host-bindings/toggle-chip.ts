import {Component} from '@angular/core';

@Component({
  selector: 'app-toggle-chip',
  host: {
    role: 'switch',
    tabindex: '0',
    '[attr.aria-checked]': 'on',
    '[class.on]': 'on',
    '(click)': 'toggle()',
    '(keydown.enter)': 'toggle()',
  },
  template: `Notifications: {{ on ? 'on' : 'off' }}`,
  styles: `
    :host {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 16px;
      background: lightgray;
      cursor: pointer;
    }
    :host(.on) {
      background: lightgreen;
    }
  `,
})
export class TplToggleChip {
  on = false;

  toggle(): void {
    this.on = !this.on;
  }
}
