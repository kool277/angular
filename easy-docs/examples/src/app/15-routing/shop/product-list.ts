import {Component, computed, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PRODUCTS} from './products';

@Component({
  imports: [RouterLink],
  template: `
    <h2>Products</h2>
    <!-- #docregion query-links -->
    <p>
      Sort:
      <a routerLink="/products" [queryParams]="{sort: 'name'}">by name</a>
      <a routerLink="/products" [queryParams]="{sort: 'price'}">by price</a>
    </p>
    <!-- #enddocregion query-links -->
    <ul>
      @for (product of sorted(); track product.id) {
        <!-- #docregion param-link -->
        <li>
          <a [routerLink]="['/products', product.id]">{{ product.name }}</a>
        </li>
        <!-- #enddocregion param-link -->
      }
    </ul>
  `,
})
export class RoutingProductList {
  // #docregion sort-input
  /** Filled from the query parameter `?sort=...`. */
  readonly sort = input<string>();

  readonly sorted = computed(() => {
    const list = [...PRODUCTS];
    if (this.sort() === 'price') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.sort() === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  });
  // #enddocregion sort-input
}
