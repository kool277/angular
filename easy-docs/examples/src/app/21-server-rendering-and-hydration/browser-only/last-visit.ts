import {Component, afterNextRender, inject, signal} from '@angular/core';
import {SsrVisitStorage} from './visit-storage';

@Component({
  selector: 'app-ssr-last-visit',
  template: `<p>{{ message() }}</p>`,
})
export class SsrLastVisit {
  protected readonly message = signal('Welcome!');

  constructor() {
    const storage = inject(SsrVisitStorage);
    afterNextRender(() => {
      const lastVisit = storage.read();
      if (lastVisit) {
        this.message.set(`Welcome back! Your last visit: ${lastVisit}`);
      }
      storage.save(new Date().toISOString().slice(0, 10));
    });
  }
}
