import {Component, signal} from '@angular/core';
import {Listbox, Option} from '@angular/aria/listbox';

@Component({
  selector: 'app-a11y-toppings',
  imports: [Listbox, Option],
  template: `
    <p id="toppings-label">Toppings</p>
    <ul
      ngListbox
      [(value)]="toppings"
      [multi]="true"
      selectionMode="explicit"
      aria-labelledby="toppings-label"
    >
      @for (topping of allToppings; track topping) {
        <li ngOption [value]="topping">{{ topping }}</li>
      }
    </ul>
    <p>Your choice: {{ toppings().join(', ') || 'nothing yet' }}</p>
  `,
  styles: `
    [ngOption][aria-selected='true']::before {
      content: '✓ ';
    }
  `,
})
export class A11yToppings {
  protected readonly allToppings = ['Cheese', 'Mushrooms', 'Olives', 'Peppers'];
  readonly toppings = signal<string[]>([]);
}
