import {TestBed} from '@angular/core/testing';
import {A11ySizePicker} from './size-picker';

describe('A11ySizePicker', () => {
  it('is a horizontal listbox with a name', async () => {
    const fixture = TestBed.createComponent(A11ySizePicker);
    await fixture.whenStable();
    const list: HTMLElement = fixture.nativeElement.querySelector('[ngListbox]');
    expect(list.getAttribute('role')).toBe('listbox');
    expect(list.getAttribute('aria-orientation')).toBe('horizontal');
    expect(list.getAttribute('aria-labelledby')).toBe('size-label');
  });

  it('selects the next size with the right arrow key', async () => {
    const fixture = TestBed.createComponent(A11ySizePicker);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    element
      .querySelector('[ngListbox]')!
      .dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true}));
    await fixture.whenStable();
    expect(fixture.componentInstance.size()).toEqual(['L']);
    expect(element.textContent).toContain('Selected: L');
  });
});
