import {TestBed} from '@angular/core/testing';
import {FormsOrder} from './order';

describe('FormsOrder', () => {
  async function setup() {
    const fixture = TestBed.createComponent(FormsOrder);
    await fixture.whenStable();
    return {fixture, page: fixture.nativeElement as HTMLElement};
  }

  it('makes the order number read-only', async () => {
    const {page} = await setup();
    expect(page.querySelector('input')!.readOnly).toBe(true);
  });

  it('shows the gift message only for gifts, and only then requires it', async () => {
    const {fixture, page} = await setup();
    const form = fixture.componentInstance.orderForm;
    expect(page.textContent).not.toContain('Gift message');
    expect(form().valid()).toBe(true);

    page.querySelectorAll('input')[1].click();
    await fixture.whenStable();
    expect(page.textContent).toContain('Gift message');
    expect(form().valid()).toBe(false);
    expect(page.querySelector('button')!.disabled).toBe(true);
  });

  it('disables the coupon below 10 € and says why', async () => {
    const {fixture, page} = await setup();
    const coupon = () => page.querySelectorAll('input')[3];
    expect(coupon().disabled).toBe(true);
    expect(page.querySelector('.reason')?.textContent).toBe('Coupons start at 10 €.');

    fixture.componentInstance.orderModel.update((m) => ({...m, total: 12}));
    await fixture.whenStable();
    expect(coupon().disabled).toBe(false);
    expect(page.querySelector('.reason')).toBeNull();
  });
});
