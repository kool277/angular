import {Service} from '@angular/core';

@Service()
export class TestingTaxRates {
  /** The real app would ask a server. */
  rateFor(country: string): number {
    return country === 'UZ' ? 0.12 : 0.2;
  }
}
