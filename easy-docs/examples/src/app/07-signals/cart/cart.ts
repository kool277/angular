import {Component, computed, signal} from '@angular/core';

interface CartLine {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
})
export class SignalsCart {
  // #docregion state
  readonly lines = signal<CartLine[]>([
    {id: 1, name: 'Notebook', price: 4, quantity: 2},
    {id: 2, name: 'Pen', price: 1.5, quantity: 4},
  ]);

  readonly itemCount = computed(() => this.lines().reduce((sum, line) => sum + line.quantity, 0));
  readonly total = computed(() =>
    this.lines().reduce((sum, line) => sum + line.price * line.quantity, 0),
  );
  readonly freeDelivery = computed(() => this.total() >= 30);
  // #enddocregion state

  // #docregion change
  changeQuantity(id: number, change: number) {
    this.lines.update((lines) =>
      lines
        .map((line) => (line.id === id ? {...line, quantity: line.quantity + change} : line))
        .filter((line) => line.quantity > 0),
    );
  }
  // #enddocregion change

  addBackpack() {
    this.lines.update((lines) => [...lines, {id: 3, name: 'Backpack', price: 25, quantity: 1}]);
  }
}
