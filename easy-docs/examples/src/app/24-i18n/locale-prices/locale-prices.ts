import {CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';
import {Component, inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-locale-prices',
  imports: [CurrencyPipe, DatePipe, DecimalPipe],
  template: `
    <p class="locale">Locale: {{ locale }}</p>
    <p class="number">{{ visitors | number }}</p>
    <p class="price">{{ price | currency: 'UZS' : 'symbol' : '1.0-0' }}</p>
    <p class="date">{{ opening | date: 'longDate' : 'UTC' }}</p>
    <!-- #docregion override -->
    <p class="price-us">{{ price | currency: 'UZS' : 'code' : '1.0-0' : 'en-US' }}</p>
    <!-- #enddocregion override -->
  `,
})
export class I18nLocalePrices {
  locale = inject(LOCALE_ID);
  visitors = 1234567.5;
  price = 45000;
  opening = new Date(Date.UTC(2026, 2, 21));
}
