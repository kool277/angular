import {TestBed} from '@angular/core/testing';
import {TsCartSummary} from './cart-summary';

describe('TsCartSummary', () => {
  it('shows the items, the total and the state of the cart', async () => {
    const fixture = TestBed.createComponent(TsCartSummary);
    await fixture.whenStable();

    const lines = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('p'),
      (p) => p.textContent,
    );
    expect(lines).toEqual(['Items: Green tea, Bread', 'Total: 11000 UZS', 'Status: filled']);
  });
});
