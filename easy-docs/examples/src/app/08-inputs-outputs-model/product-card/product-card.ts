import {booleanAttribute, Component, computed, input, numberAttribute} from '@angular/core';

// #docregion trim
function trimText(value: string | undefined): string {
  return value?.trim() ?? '';
}
// #enddocregion trim

@Component({
  selector: 'app-product-card',
  template: `
    <h3>{{ name() }}</h3>
    <p class="price">{{ priceText() }}</p>
    @if (onSale()) {
      <p class="sale">On sale!</p>
    }
    <p class="note">{{ note() }}</p>
  `,
})
export class InputsProductCard {
  // #docregion inputs
  readonly name = input.required<string>();
  readonly price = input(0, {transform: numberAttribute});
  readonly onSale = input(false, {transform: booleanAttribute});
  readonly note = input('', {transform: trimText, alias: 'comment'});

  readonly priceText = computed(() => `${this.price().toFixed(2)} €`);
  // #enddocregion inputs
}

@Component({
  selector: 'app-product-card-demo',
  imports: [InputsProductCard],
  template: `
    <!-- #docregion usage -->
    <app-product-card name="Green tea" price="3.5" onSale comment="  Fresh from Fergana  " />
    <app-product-card name="Honey" [price]="7" />
    <!-- #enddocregion usage -->
  `,
})
export class InputsProductCardDemo {}
