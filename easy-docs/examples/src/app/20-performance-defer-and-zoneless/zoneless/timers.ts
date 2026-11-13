import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-perf-plain-timer',
  template: `<p>{{ message }}</p>`,
})
export class PerfPlainTimer {
  protected message = 'Waiting…';

  constructor() {
    setTimeout(() => {
      this.message = 'Done'; // Angular is not told about this change.
    }, 300);
  }
}

@Component({
  selector: 'app-perf-signal-timer',
  template: `<p>{{ message() }}</p>`,
})
export class PerfSignalTimer {
  protected readonly message = signal('Waiting…');

  constructor() {
    setTimeout(() => {
      this.message.set('Done'); // Setting a signal tells Angular.
    }, 300);
  }
}
