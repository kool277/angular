import {Service, inject} from '@angular/core';
import {TestingTaxRates} from './tax-rates';

@Service()
export class TestingCheckout {
  private readonly taxRates = inject(TestingTaxRates);

  /** Sum of the prices plus tax, rounded to cents. */
  total(prices: number[], country: string): number {
    const sum = prices.reduce((a, b) => a + b, 0);
    const withTax = sum * (1 + this.taxRates.rateFor(country));
    return Math.round(withTax * 100) / 100;
  }
}
