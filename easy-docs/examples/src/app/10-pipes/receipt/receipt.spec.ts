import {TestBed} from '@angular/core/testing';
import {PipesReceipt} from './receipt';

describe('PipesReceipt', () => {
  it('shows formatted values, the data itself does not change', async () => {
    const fixture = TestBed.createComponent(PipesReceipt);
    await fixture.whenStable();
    const lines = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('p')).map(
      (p) => p.textContent,
    );
    expect(lines).toEqual(['Shop: GREEN BAZAAR', 'Total: $1,234.50']);
    expect(fixture.componentInstance.shop).toBe('green bazaar');
  });
});
