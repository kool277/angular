import {Component, Directive, input, output, signal} from '@angular/core';

// #docregion parts
@Directive({
  selector: '[appTooltip]',
  host: {
    '[attr.title]': 'appTooltip()',
    '[attr.aria-label]': 'appTooltip()',
  },
})
export class DirTooltip {
  readonly appTooltip = input('');
}

@Directive({
  selector: '[appPressEffect]',
  host: {
    '[class.pressed]': 'down()',
    '(pointerdown)': 'down.set(true)',
    '(pointerup)': 'release()',
    '(pointerleave)': 'down.set(false)',
  },
})
export class DirPressEffect {
  protected readonly down = signal(false);
  readonly pressed = output<void>();

  protected release(): void {
    if (this.down()) {
      this.down.set(false);
      this.pressed.emit();
    }
  }
}
// #enddocregion parts

// #docregion component
@Component({
  selector: 'button[appIconButton]',
  hostDirectives: [
    {directive: DirTooltip, inputs: ['appTooltip: hint']},
    {directive: DirPressEffect, outputs: ['pressed']},
  ],
  host: {type: 'button'},
  template: `{{ icon() }}`,
  styles: `
    :host(.pressed) {
      transform: scale(0.9);
    }
  `,
})
export class DirIconButton {
  readonly icon = input.required<string>();
}
// #enddocregion component

@Component({
  selector: 'app-icon-button-demo',
  imports: [DirIconButton],
  template: `
    <!-- #docregion usage -->
    <button appIconButton icon="🗑" hint="Delete" (pressed)="deleted.set(true)"></button>
    <button appIconButton icon="✎" hint="Edit"></button>
    @if (deleted()) {
      <p>Deleted.</p>
    }
    <!-- #enddocregion usage -->
  `,
})
export class DirIconButtonDemo {
  readonly deleted = signal(false);
}
