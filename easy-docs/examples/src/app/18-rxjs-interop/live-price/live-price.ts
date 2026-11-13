import {Component, inject, signal} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {RxPriceFeed} from './price-feed';

@Component({
  selector: 'app-rx-live-price',
  template: `
    <button type="button" (click)="teaId.set(1)">Green tea</button>
    <button type="button" (click)="teaId.set(3)">Mint tea</button>
    @if (price.hasValue()) {
      <p>Price now: {{ price.value() }} €</p>
    } @else {
      <p>Waiting for the first price…</p>
    }
  `,
})
export class RxLivePrice {
  private readonly feed = inject(RxPriceFeed);
  protected readonly teaId = signal(1);

  // #docregion resource
  protected readonly price = rxResource({
    params: () => this.teaId(),
    stream: ({params}) => this.feed.watch(params),
  });
  // #enddocregion resource
}
