import {Component} from '@angular/core';
import {Cart} from './cart';

@Component({
  selector: 'app-cart-summary',
  template: `
    <p>Items: {{ cart.itemNames().join(', ') }}</p>
    <p>Total: {{ cart.total() }} UZS</p>
    <p>Status: {{ cart.state() }}</p>
  `,
})
export class TsCartSummary {
  protected readonly cart = new Cart();

  constructor() {
    this.cart.add(1, 'Green tea', 3000);
    this.cart.add(2, 'Bread', 4000, 2);
  }
}
