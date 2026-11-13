import {CurrencyPipe, UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-receipt',
  imports: [CurrencyPipe, UpperCasePipe],
  template: `
    <p>Shop: {{ shop | uppercase }}</p>
    <p>Total: {{ total | currency }}</p>
  `,
})
export class PipesReceipt {
  shop = 'green bazaar';
  total = 1234.5;
}
