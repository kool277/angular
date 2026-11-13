import {TestBed} from '@angular/core/testing';
import {LifeEditableTitle} from './editable-title';

describe('LifeEditableTitle with LifeAutofocus', () => {
  it('focuses the input after Angular has rendered it', async () => {
    const fixture = TestBed.createComponent(LifeEditableTitle);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    await fixture.whenStable();
    const input = page.querySelector('input')!;
    expect(document.activeElement).toBe(input);
  });

  it('saves the new title on Enter', async () => {
    const fixture = TestBed.createComponent(LifeEditableTitle);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector('button')!.click();
    await fixture.whenStable();

    const input = page.querySelector('input')!;
    input.value = 'Party list';
    input.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    await fixture.whenStable();
    expect(page.querySelector('h2')?.textContent).toBe('Party list');
  });
});
