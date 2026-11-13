import {TestBed} from '@angular/core/testing';
import {TplOrderLine} from './order-line';

describe('TplOrderLine', () => {
  async function setup() {
    const fixture = TestBed.createComponent(TplOrderLine);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const plus = page.querySelector<HTMLButtonElement>('[aria-label="One more"]')!;
    const minus = page.querySelector<HTMLButtonElement>('[aria-label="One less"]')!;
    return {fixture, page, plus, minus};
  }

  it('shows the total for the start quantity', async () => {
    const {page} = await setup();
    expect(page.querySelector('.total')?.textContent).toBe('Total: 3000 UZS');
    expect(page.querySelector<HTMLElement>('.stock-bar')!.style.width).toBe('20%');
  });

  it('updates the quantity, total and bar after clicks', async () => {
    const {fixture, page, plus} = await setup();

    plus.click();
    plus.click();
    await fixture.whenStable();

    expect(page.querySelector('.quantity span')?.textContent).toBe('3');
    expect(page.querySelector('.total')?.textContent).toBe('Total: 9000 UZS');
    expect(page.querySelector<HTMLElement>('.stock-bar')!.style.width).toBe('60%');
  });

  it('disables the buttons at the limits and marks the stock as sold out', async () => {
    const {fixture, page, plus, minus} = await setup();

    minus.click();
    await fixture.whenStable();
    expect(minus.disabled).toBe(true);

    for (let i = 0; i < 5; i++) {
      plus.click();
    }
    await fixture.whenStable();
    expect(plus.disabled).toBe(true);
    expect(page.querySelector('.stock')?.classList).toContain('sold-out');
  });

  it('saves the note when the user presses Enter', async () => {
    const {fixture, page} = await setup();
    expect(page.querySelector('.note')?.textContent).toBe('Your note: none');

    const input = page.querySelector('input')!;
    input.value = '  Without sugar ';
    input.dispatchEvent(new KeyboardEvent('keyup', {key: 'Enter'}));
    await fixture.whenStable();

    expect(page.querySelector('.note')?.textContent).toBe('Your note: Without sugar');
  });
});
