import {Component} from '@angular/core';

@Component({
  selector: 'app-help-link',
  template: `<a href="/help">Help</a>`,
})
export class StylingHelpLink {}

// Older code. Avoid ::ng-deep in new code.
@Component({
  selector: 'app-page-footer',
  imports: [StylingHelpLink],
  template: `<footer><app-help-link /></footer>`,
  styles: `
    a {
      color: red;
    }
    :host ::ng-deep a {
      text-decoration: none;
    }
  `,
})
export class StylingFooter {}
