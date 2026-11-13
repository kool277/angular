import {TestBed} from '@angular/core/testing';
import {CompSelectorDemo} from './selector-demo';

describe('CompSelectorDemo', () => {
  it('turns only the button with the attribute into a delete button', async () => {
    const fixture = TestBed.createComponent(CompSelectorDemo);
    await fixture.whenStable();

    const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('button');
    expect(buttons[0].textContent).toBe('🗑 Delete');
    expect(buttons[1].textContent).toBe('A normal button');
  });

  it('keeps the native button and its attributes', async () => {
    const fixture = TestBed.createComponent(CompSelectorDemo);
    await fixture.whenStable();

    const button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('aria-label')).toBe('Delete the photo');
  });
});
