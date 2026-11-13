import {TestBed} from '@angular/core/testing';
import {SignalsShippingPicker} from './shipping-picker';

describe('SignalsShippingPicker', () => {
  it('starts from the computation and can be set', () => {
    const picker = TestBed.createComponent(SignalsShippingPicker).componentInstance;
    expect(picker.selected().name).toBe('Post');

    picker.selected.set({id: 3, name: 'Pick up'});
    expect(picker.selected().name).toBe('Pick up');
  });

  it('resets the simple form, but keeps a choice that still exists', async () => {
    const fixture = TestBed.createComponent(SignalsShippingPicker);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const lines = () => Array.from(page.querySelectorAll('p')).map((p) => p.textContent);

    page.querySelectorAll('button')[1].click(); // "Courier"
    await fixture.whenStable();
    expect(lines()).toEqual(['Selected: Courier', 'Kept selection: Courier']);

    page.querySelector<HTMLButtonElement>('button.change')!.click();
    await fixture.whenStable();
    expect(lines()).toEqual(['Selected: Drone', 'Kept selection: Courier']);
  });
});
