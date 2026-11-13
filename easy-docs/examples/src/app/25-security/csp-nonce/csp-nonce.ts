import {Component} from '@angular/core';

@Component({
  selector: 'app-csp-badge',
  template: `<span class="badge">Secure</span>`,
  styles: `
    .badge {
      color: darkgreen;
    }
  `,
})
export class SecCspBadge {}
