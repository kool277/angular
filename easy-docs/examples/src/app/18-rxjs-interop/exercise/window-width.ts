import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-rx-window-width',
  template: `
    <p>The window is {{ width() }} pixels wide.</p>
    @if (width() < 600) {
      <p>Small screen layout</p>
    }
  `,
})
export class RxWindowWidth {
  protected readonly width = toSignal(
    fromEvent(window, 'resize').pipe(map(() => window.innerWidth)),
    {initialValue: window.innerWidth},
  );
}
