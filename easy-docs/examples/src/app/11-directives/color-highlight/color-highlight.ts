import {Component, Directive, input, signal} from '@angular/core';

@Directive({
  selector: '[appColorHighlight]',
  host: {
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
    '[style.background-color]': 'hovered() ? color() : null',
  },
})
export class DirColorHighlight {
  // #docregion inputs
  readonly appColorHighlight = input('');
  readonly defaultColor = input('yellow');
  // #enddocregion inputs

  protected readonly hovered = signal(false);

  protected color(): string {
    return this.appColorHighlight() || this.defaultColor();
  }
}

@Component({
  selector: 'app-color-highlight-demo',
  imports: [DirColorHighlight],
  template: `
    <!-- #docregion usage -->
    <p [appColorHighlight]="favorite()">Uses the chosen color.</p>
    <p appColorHighlight defaultColor="lightblue">No color chosen: light blue.</p>
    <p appColorHighlight>No color at all: yellow.</p>
    <button type="button" (click)="favorite.set('pink')">Choose pink</button>
    <!-- #enddocregion usage -->
  `,
})
export class DirColorHighlightDemo {
  readonly favorite = signal('lightgreen');
}
