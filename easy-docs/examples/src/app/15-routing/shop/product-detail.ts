import {Component, computed, inject, input} from '@angular/core';
import {Router} from '@angular/router';
import {PRODUCTS} from './products';

@Component({
  template: `
    @if (product(); as product) {
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }} €</p>
    } @else {
      <p>There is no product "{{ id() }}".</p>
    }
    <button class="back" (click)="backToList()">All products, cheapest first</button>
    <button class="honey" (click)="showHoney()">Show honey</button>
  `,
})
export class RoutingProductDetail {
  private readonly router = inject(Router);

  /** Filled from the route parameter `:id`. */
  readonly id = input.required<string>();
  readonly product = computed(() => PRODUCTS.find((p) => p.id === this.id()));

  // #docregion navigate
  backToList() {
    this.router.navigate(['/products'], {queryParams: {sort: 'price'}});
  }

  showHoney() {
    this.router.navigateByUrl('/products/honey');
  }
  // #enddocregion navigate
}
