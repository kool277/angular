import {TestBed} from '@angular/core/testing';
import {DiCartDemo} from './cart-demo';
import {DiCartStore} from './cart-store';

describe('DiCartStore shared by two components', () => {
  it('updates the badge when the button adds an item', async () => {
    const fixture = TestBed.createComponent(DiCartDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('span')?.textContent).toBe('🛒 0');

    page.querySelector('button')!.click();
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('span')?.textContent).toBe('🛒 2');
  });

  it('is one object for the whole app', () => {
    expect(TestBed.inject(DiCartStore)).toBe(TestBed.inject(DiCartStore));
  });
});
