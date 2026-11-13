import {Component} from '@angular/core';

@Component({
  selector: 'button[app-delete-button]',
  template: `🗑 Delete`,
  styles: `
    :host {
      color: white;
      background: firebrick;
    }
  `,
})
export class CompDeleteButton {}
