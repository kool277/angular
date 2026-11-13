import {TestBed} from '@angular/core/testing';
import {SignalsCart} from './cart';

describe('SignalsCart', () => {
  async function setup() {
    const fixture = TestBed.createComponent(SignalsCart);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const text = (selector: string) => page.querySelector(selector)?.textContent?.trim();
    return {fixture, page, text};
  }

  it('derives the count, the total and the delivery message', async () => {
    const {text} = await setup();
    expect(text('h2')).toBe('Cart (6 items)');
    expect(text('.total')).toBe('Total: 14 €');
    expect(text('.delivery')).toBe('Spend 16 € more for free delivery.');
  });

  it('updates every computed value after one change', async () => {
    const {fixture, page, text} = await setup();
    page.querySelector<HTMLButtonElement>('button.backpack')!.click();
    await fixture.whenStable();
    expect(text('h2')).toBe('Cart (7 items)');
    expect(text('.total')).toBe('Total: 39 €');
    expect(text('.delivery')).toBe('Free delivery!');
  });

  it('removes a line when its quantity reaches zero', async () => {
    const {fixture, text} = await setup();
    fixture.componentInstance.changeQuantity(1, -2);
    await fixture.whenStable();
    expect(fixture.componentInstance.lines().map((line) => line.name)).toEqual(['Pen']);
    expect(text('h2')).toBe('Cart (4 items)');
    expect(text('.total')).toBe('Total: 6 €');
  });
});
