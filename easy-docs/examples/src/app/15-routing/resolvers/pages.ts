import {Component, input} from '@angular/core';
import {Product} from '../shop/products';

// #docregion page
@Component({
  template: `
    <h2>{{ product().name }}</h2>
    <p>{{ product().price }} €</p>
  `,
})
export class RoutingResolvedProduct {
  /** Filled from `resolve: { product: ... }`. */
  readonly product = input.required<Product>();
}
// #enddocregion page

@Component({template: `<h2>Not found</h2>`})
export class RoutingResolverNotFound {}
