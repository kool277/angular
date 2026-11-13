import {Component, Directive, signal} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
    '[style.background-color]': "hovered() ? 'yellow' : null",
  },
})
export class DirHighlight {
  protected readonly hovered = signal(false);
}

@Component({
  selector: 'app-highlight-demo',
  imports: [DirHighlight],
  template: `
    <p appHighlight>Point at this line.</p>
    <p appHighlight>And at this one.</p>
    <p>This line has no directive.</p>
  `,
})
export class DirHighlightDemo {}
