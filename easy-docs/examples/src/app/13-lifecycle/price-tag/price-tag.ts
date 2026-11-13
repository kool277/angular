import {Component, OnChanges, SimpleChanges, input, linkedSignal, signal} from '@angular/core';

// #docregion hook
@Component({
  selector: 'app-life-price-tag-hook',
  template: `<span>{{ price() }} € {{ trend }}</span>`,
})
export class LifePriceTagHook implements OnChanges {
  readonly price = input.required<number>();
  protected trend = '';

  ngOnChanges(changes: SimpleChanges<LifePriceTagHook>): void {
    const change = changes.price;
    if (change && !change.firstChange) {
      this.trend = change.currentValue > change.previousValue ? '▲' : '▼';
    }
  }
}
// #enddocregion hook

// #docregion signals
@Component({
  selector: 'app-life-price-tag',
  template: `<span>{{ price() }} € {{ trend() }}</span>`,
})
export class LifePriceTag {
  readonly price = input.required<number>();
  protected readonly trend = linkedSignal<number, string>({
    source: this.price,
    computation: (price, previous) => {
      if (!previous) {
        return '';
      }
      return price > previous.source ? '▲' : '▼';
    },
  });
}
// #enddocregion signals

@Component({
  selector: 'app-life-price-tag-demo',
  imports: [LifePriceTagHook, LifePriceTag],
  template: `
    <p>With ngOnChanges: <app-life-price-tag-hook [price]="price()" /></p>
    <p>With signals: <app-life-price-tag [price]="price()" /></p>
    <button type="button" (click)="price.set(price() + 1)">Price up</button>
    <button type="button" (click)="price.set(price() - 1)">Price down</button>
  `,
})
export class LifePriceTagDemo {
  readonly price = signal(10);
}
