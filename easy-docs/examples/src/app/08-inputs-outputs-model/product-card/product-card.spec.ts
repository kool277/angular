import {TestBed} from '@angular/core/testing';
import {InputsProductCardDemo} from './product-card';

describe('InputsProductCard', () => {
  it('turns attribute text into numbers and booleans, and trims the note', async () => {
    const fixture = TestBed.createComponent(InputsProductCardDemo);
    await fixture.whenStable();
    const [tea, honey] = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('app-product-card'),
    );

    expect(tea.querySelector('.price')?.textContent).toBe('3.50 €');
    expect(tea.querySelector('.sale')).not.toBeNull();
    expect(tea.querySelector('.note')?.textContent).toBe('Fresh from Fergana');

    expect(honey.querySelector('.price')?.textContent).toBe('7.00 €');
    expect(honey.querySelector('.sale')).toBeNull();
    expect(honey.querySelector('.note')?.textContent).toBe('');
  });
});
