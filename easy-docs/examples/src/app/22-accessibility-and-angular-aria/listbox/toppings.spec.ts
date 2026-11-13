import {TestBed} from '@angular/core/testing';
import {A11yToppings} from './toppings';

describe('A11yToppings', () => {
  it('selects several options with clicks', async () => {
    const fixture = TestBed.createComponent(A11yToppings);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const options = element.querySelectorAll<HTMLElement>('[ngOption]');
    expect(element.querySelector('ul')!.getAttribute('aria-multiselectable')).toBe('true');

    options[0].click();
    options[2].click();
    await fixture.whenStable();
    expect(fixture.componentInstance.toppings()).toEqual(['Cheese', 'Olives']);
    expect(options[0].getAttribute('aria-selected')).toBe('true');
    expect(options[1].getAttribute('aria-selected')).toBe('false');
    expect(element.textContent).toContain('Your choice: Cheese, Olives');
  });

  it('moves through the options with the arrow keys', async () => {
    const fixture = TestBed.createComponent(A11yToppings);
    await fixture.whenStable();
    const list: HTMLElement = fixture.nativeElement.querySelector('ul');
    list.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowDown', bubbles: true}));
    await fixture.whenStable();
    const options = list.querySelectorAll('[ngOption]');
    expect(options[1].getAttribute('tabindex')).toBe('0');
    expect(options[0].getAttribute('tabindex')).toBe('-1');
  });
});
