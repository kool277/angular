import {Component, inject} from '@angular/core';
import {DiCartStore} from './cart-store';

@Component({
  selector: 'app-di-add-button',
  template: `<button type="button" (click)="cart.add('Tea')">Add tea</button>`,
})
export class DiAddButton {
  protected readonly cart = inject(DiCartStore);
}

@Component({
  selector: 'app-di-cart-badge',
  template: `<span>🛒 {{ cart.count() }}</span>`,
})
export class DiCartBadge {
  protected readonly cart = inject(DiCartStore);
}

@Component({
  selector: 'app-di-cart-demo',
  imports: [DiAddButton, DiCartBadge],
  template: `
    <header><app-di-cart-badge /></header>
    <main><app-di-add-button /></main>
  `,
})
export class DiCartDemo {}
