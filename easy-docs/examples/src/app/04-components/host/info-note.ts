import {Component} from '@angular/core';

@Component({
  selector: 'app-info-note',
  host: {
    class: 'note',
    role: 'note',
  },
  template: `ℹ Opening hours change on holidays.`,
  styles: `
    :host {
      display: block;
      padding: 8px;
      border-left: 4px solid steelblue;
    }
  `,
})
export class CompInfoNote {}
