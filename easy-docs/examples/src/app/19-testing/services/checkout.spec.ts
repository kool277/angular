// #docregion imports
import {TestBed} from '@angular/core/testing';
import {TestingCheckout} from './checkout';
import {TestingTaxRates} from './tax-rates';
// #enddocregion imports

describe('TestingCheckout', () => {
  // #docregion real
  it('adds the tax with the real tax rates', () => {
    const checkout = TestBed.inject(TestingCheckout);
    expect(checkout.total([10, 5], 'UZ')).toBe(16.8);
  });
  // #enddocregion real

  // #docregion fake
  it('uses a fake tax-rate service', () => {
    const rateFor = vi.fn(() => 0.5);
    TestBed.configureTestingModule({
      providers: [{provide: TestingTaxRates, useValue: {rateFor}}],
    });
    const checkout = TestBed.inject(TestingCheckout);

    expect(checkout.total([10], 'XX')).toBe(15);
    expect(rateFor).toHaveBeenCalledWith('XX');
  });
  // #enddocregion fake

  // #docregion spy
  it('can spy on a real service', () => {
    const rates = TestBed.inject(TestingTaxRates);
    const spy = vi.spyOn(rates, 'rateFor').mockReturnValue(0);

    expect(TestBed.inject(TestingCheckout).total([2, 3], 'UZ')).toBe(5);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  // #enddocregion spy
});
