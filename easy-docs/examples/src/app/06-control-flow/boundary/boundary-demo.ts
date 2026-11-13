import {Component} from '@angular/core';

// Counts how many times a widget was created.
let starts = 0;

@Component({
  selector: 'app-flaky-widget',
  template: `<p>The widget works.</p>`,
})
export class ControlFlowFlakyWidget {
  constructor() {
    starts = starts + 1;
    // The first start fails. Later starts work.
    if (starts === 1) {
      throw new Error('The widget could not start');
    }
  }
}

@Component({
  selector: 'app-boundary-demo',
  imports: [ControlFlowFlakyWidget],
  template: `
    <h2>Dashboard</h2>
    @boundary {
      <app-flaky-widget />
    } @error {
      <p>Problem: {{ $error.message }}</p>
      <button (click)="$reset()">Try again</button>
    }
    <p>The rest of the page still works.</p>
  `,
})
export class ControlFlowBoundaryDemo {}
