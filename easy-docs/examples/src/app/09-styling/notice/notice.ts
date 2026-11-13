import {Component} from '@angular/core';

@Component({
  selector: 'app-notice',
  template: `<p>The shop is closed on Sunday.</p>`,
  styles: `
    :host {
      display: block;
      border: 2px solid orange;
    }
    p {
      color: darkred;
    }
  `,
})
export class StylingNotice {}

@Component({
  selector: 'app-notice-demo',
  imports: [StylingNotice],
  template: `
    <app-notice />
    <p>This paragraph is outside the notice.</p>
  `,
})
export class StylingNoticeDemo {}
