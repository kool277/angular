import {NgClass, NgStyle} from '@angular/common';
import {Component, signal} from '@angular/core';

// Older style. New code uses [class.x], [class], [style.x] and [style] bindings.
@Component({
  selector: 'app-older-directives',
  imports: [NgClass, NgStyle],
  template: `
    <p [ngClass]="{done: done(), urgent: !done()}">Pay the bills</p>
    <p [ngStyle]="{'font-size.px': size()}">Big text</p>
  `,
})
export class DirOlderDirectives {
  readonly done = signal(false);
  readonly size = signal(20);
}

// The same result with plain bindings.
@Component({
  selector: 'app-newer-bindings',
  template: `
    <p [class]="{done: done(), urgent: !done()}">Pay the bills</p>
    <p [style.font-size.px]="size()">Big text</p>
  `,
})
export class DirNewerBindings {
  readonly done = signal(false);
  readonly size = signal(20);
}
