import {Component} from '@angular/core';

@Component({
  selector: 'app-user-badge',
  template: `<span class="badge">Amina K.</span>`,
  styles: `
    .badge {
      padding: 4px 8px;
      border-radius: 12px;
      background: lavender;
    }
  `,
})
export class CompUserBadge {}
