import {Component} from '@angular/core';

@Component({
  selector: 'app-site-header',
  host: {role: 'banner'},
  template: `<strong>🍲 Tasty</strong> recipes from Central Asia`,
  styles: `
    :host {
      display: block;
      padding: 12px;
      background: darkgreen;
      color: white;
    }
  `,
})
export class CompSiteHeader {}
