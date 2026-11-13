import {TestBed} from '@angular/core/testing';
import {InputsQuantityDemo} from './quantity-picker';

describe('InputsQuantityPicker', () => {
  it('keeps the parent signal and the child model in sync both ways', async () => {
    const fixture = TestBed.createComponent(InputsQuantityDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const picker = page.querySelector('app-quantity-picker')!;

    // Child to parent: "+" in the child changes the parent's signal.
    picker.querySelectorAll('button')[1].click();
    await fixture.whenStable();
    expect(fixture.componentInstance.quantity()).toBe(3);
    expect(page.querySelector('.total')?.textContent).toBe('Total: 6 €');

    // Parent to child: the parent sets its signal, the child shows it.
    page.querySelector<HTMLButtonElement>('button.ten')!.click();
    await fixture.whenStable();
    expect(picker.querySelector('span')?.textContent).toBe('10');
  });

  it('emits valueChange when the model changes', async () => {
    const fixture = TestBed.createComponent(InputsQuantityDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const second = page.querySelectorAll('app-quantity-picker')[1];

    second.querySelectorAll('button')[0].click();
    await fixture.whenStable();
    expect(page.querySelector('.last')?.textContent).toBe('Last change: 2');
  });
});
