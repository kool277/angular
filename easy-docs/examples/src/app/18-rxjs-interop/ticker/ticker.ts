import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {interval} from 'rxjs';

@Component({
  selector: 'app-rx-ticker',
  template: `<p>Seconds on this page: {{ seconds() }}</p>`,
})
export class RxTicker {
  private readonly ticks$ = interval(1000);
  protected readonly seconds = toSignal(this.ticks$, {initialValue: 0});
}
