import {Component} from '@angular/core';

@Component({
  selector: 'app-weekend',
  template: `
    <p>Today is {{ day }}.</p>
    <!-- #docregion switch -->
    @switch (day) {
      @case ('Saturday')
      @case ('Sunday') {
        <p class="kind">Weekend. Time to rest.</p>
      }
      @default {
        <p class="kind">A work day.</p>
      }
    }
    <!-- #enddocregion switch -->
    <button (click)="day = 'Sunday'">Sunday</button>
    <button (click)="day = 'Monday'">Monday</button>
  `,
})
export class ControlFlowWeekend {
  day = 'Saturday';
}
