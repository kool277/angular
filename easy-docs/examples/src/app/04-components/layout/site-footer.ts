import {Component} from '@angular/core';

@Component({
  selector: 'app-site-footer',
  host: {role: 'contentinfo'},
  template: `© 2026 Tasty`,
  styles: `
    :host {
      display: block;
      padding: 12px;
      color: gray;
    }
  `,
})
export class CompSiteFooter {}
