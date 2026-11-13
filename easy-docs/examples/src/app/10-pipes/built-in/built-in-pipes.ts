import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  KeyValuePipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    KeyValuePipe,
    LowerCasePipe,
    PercentPipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
  template: `
    <!-- #docregion text -->
    <p id="upper">{{ city | uppercase }}</p>
    <p id="lower">{{ city | lowercase }}</p>
    <p id="title">{{ 'silk road museum' | titlecase }}</p>
    <!-- #enddocregion text -->

    <!-- #docregion date -->
    <p id="date-default">{{ opening | date: undefined : 'UTC' }}</p>
    <p id="date-format">{{ opening | date: 'd MMMM y, HH:mm' : 'UTC' }}</p>
    <p id="date-short">{{ opening | date: 'shortDate' : 'UTC' }}</p>
    <!-- #enddocregion date -->

    <!-- #docregion numbers -->
    <p id="number">{{ distance | number }}</p>
    <p id="number-digits">{{ distance | number: '1.0-1' }}</p>
    <p id="percent">{{ share | percent }}</p>
    <p id="percent-digits">{{ share | percent: '1.1-1' }}</p>
    <p id="currency">{{ price | currency: 'EUR' }}</p>
    <p id="currency-code">{{ price | currency: 'UZS' : 'code' : '1.0-0' }}</p>
    <!-- #enddocregion numbers -->

    <!-- #docregion chain -->
    <p id="chain">{{ opening | date: 'EEEE' : 'UTC' | uppercase }}</p>
    <!-- #enddocregion chain -->

    <!-- #docregion objects -->
    <pre id="json">{{ ticket | json }}</pre>
    <ul>
      @for (entry of ticket | keyvalue; track entry.key) {
        <li>{{ entry.key }} = {{ entry.value }}</li>
      }
    </ul>
    <!-- #enddocregion objects -->
  `,
})
export class PipesBuiltIn {
  city = 'Bukhara';
  opening = new Date(Date.UTC(2026, 2, 21, 9, 30)); // 21 March 2026, 09:30 UTC
  distance = 1234.5678;
  share = 0.256;
  price = 42;
  ticket = {visitor: 'Aziz', adult: true, seat: 12};
}
