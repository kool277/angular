import {Component, afterNextRender, signal} from '@angular/core';

@Component({
  selector: 'app-ssr-window-width',
  template: `<p>{{ text() }}</p>`,
})
export class SsrWindowWidth {
  protected readonly text = signal('Measuring the window…');

  constructor() {
    afterNextRender(() => {
      this.text.set(`Your window is ${window.innerWidth} pixels wide.`);
    });
  }
}
