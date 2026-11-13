import {Component, input} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `<strong>{{ title() }}</strong> {{ text() }}`,
  styles: `
    :host {
      display: block;
      padding: 8px;
      background: lightblue;
    }
    :host(.danger) {
      background: pink;
    }
    strong {
      text-transform: uppercase;
    }
  `,
})
export class StylingAlert {
  readonly title = input('Note');
  readonly text = input('');
}

@Component({
  selector: 'app-alert-demo',
  imports: [StylingAlert],
  template: `
    <app-alert text="Lessons start at nine." />
    <app-alert class="danger" title="Warning" text="The road is closed." />
    <strong>Not inside an alert</strong>
  `,
})
export class StylingAlertDemo {}
