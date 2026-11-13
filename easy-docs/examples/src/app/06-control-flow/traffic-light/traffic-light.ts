import {Component} from '@angular/core';

type Light = 'red' | 'yellow' | 'green';

@Component({
  selector: 'app-traffic-light',
  template: `
    <!-- #docregion switch -->
    @switch (light) {
      @case ('red') {
        <p>Stop.</p>
      }
      @case ('yellow') {
        <p>Get ready.</p>
      }
      @case ('green') {
        <p>Go!</p>
      }
      @default never;
    }
    <!-- #enddocregion switch -->
    <button type="button" (click)="next()">Next light</button>
  `,
})
export class ControlFlowTrafficLight {
  light: Light = 'red';

  next() {
    if (this.light === 'red') {
      this.light = 'green';
    } else if (this.light === 'green') {
      this.light = 'yellow';
    } else {
      this.light = 'red';
    }
  }
}
