import {Component, model, signal} from '@angular/core';

@Component({
  selector: 'app-quantity-picker',
  template: `
    <button (click)="change(-1)">−</button>
    <span>{{ value() }}</span>
    <button (click)="change(1)">+</button>
  `,
})
export class InputsQuantityPicker {
  // #docregion model
  readonly value = model(1);

  change(amount: number) {
    this.value.update((old) => Math.max(0, old + amount));
  }
  // #enddocregion model
}

@Component({
  selector: 'app-quantity-demo',
  imports: [InputsQuantityPicker],
  template: `
    <!-- #docregion two-way -->
    <app-quantity-picker [(value)]="quantity" />
    <p class="total">Total: {{ quantity() * 2 }} €</p>
    <button class="ten" (click)="quantity.set(10)">Order 10</button>
    <!-- #enddocregion two-way -->
    <!-- #docregion change-event -->
    <app-quantity-picker [value]="3" (valueChange)="lastChange = $event" />
    <p class="last">Last change: {{ lastChange }}</p>
    <!-- #enddocregion change-event -->
  `,
})
export class InputsQuantityDemo {
  readonly quantity = signal(2);
  lastChange = 0;
}
