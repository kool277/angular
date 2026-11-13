import {Component} from '@angular/core';

@Component({
  selector: 'app-proj-alert-box',
  template: `
    <div class="alert" role="alert">
      <span class="icon"><ng-content select="[alert-icon]">ℹ</ng-content></span>
      <strong><ng-content select="[alert-title]" /></strong>
      <div class="text"><ng-content /></div>
    </div>
  `,
  styles: `
    .alert {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 4px 8px;
      padding: 8px;
      border: 1px solid orange;
    }
    .text {
      grid-column: 2;
    }
  `,
})
export class ProjAlertBox {}

@Component({
  selector: 'app-proj-alert-demo',
  imports: [ProjAlertBox],
  template: `
    <app-proj-alert-box>
      <span alert-title>Road closed</span>
      Take the bus number 51 today.
    </app-proj-alert-box>
    <app-proj-alert-box>
      <span alert-icon>⚠</span>
      <span alert-title>Storm warning</span>
      Stay at home after 6 pm.
    </app-proj-alert-box>
  `,
})
export class ProjAlertDemo {}
