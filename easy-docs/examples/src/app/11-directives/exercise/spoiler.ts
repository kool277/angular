import {Component, Directive, signal} from '@angular/core';

@Directive({
  selector: '[appSpoiler]',
  host: {
    '[style.filter]': "hidden() ? 'blur(4px)' : null",
    '[attr.title]': "hidden() ? 'Click to show' : null",
    '(click)': 'hidden.set(false)',
  },
})
export class DirSpoiler {
  protected readonly hidden = signal(true);
}

@Component({
  selector: 'app-spoiler-demo',
  imports: [DirSpoiler],
  template: `
    <h3>The film</h3>
    <p appSpoiler>The gardener was the hero all along.</p>
  `,
})
export class DirSpoilerDemo {}
