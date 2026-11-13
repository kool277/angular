import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-ssr-welcome',
  template: `
    <h1>Welcome to Tasty Recipes</h1>
    <p>We have {{ count() }} recipes for you.</p>
  `,
})
export class SsrWelcome {
  protected readonly count = signal(42);
}
