import {TestBed} from '@angular/core/testing';
import {DirSelectOnFocusDemo} from './select-on-focus';

describe('DirSelectOnFocus', () => {
  it('selects the whole text when the input gets focus', async () => {
    const fixture = TestBed.createComponent(DirSelectOnFocusDemo);
    await fixture.whenStable();
    const input = (fixture.nativeElement as HTMLElement).querySelector('input')!;
    expect(input.selectionEnd! - input.selectionStart!).toBe(0);

    input.dispatchEvent(new FocusEvent('focus'));
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(input.value.length);
  });
});
