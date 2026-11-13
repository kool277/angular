import {Component} from '@angular/core';

@Component({
  selector: 'app-site-nav',
  host: {role: 'navigation'},
  template: `
    <a href="#soups">Soups</a>
    <a href="#rice">Rice dishes</a>
    <a href="#sweets">Sweets</a>
  `,
  styles: `
    :host {
      display: flex;
      gap: 16px;
      padding: 8px 12px;
    }
  `,
})
export class CompSiteNav {}
