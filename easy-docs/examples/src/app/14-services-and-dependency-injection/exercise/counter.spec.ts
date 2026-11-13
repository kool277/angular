import {TestBed} from '@angular/core/testing';
import {DiCounterDemo} from './counter';

describe('DiCounterStore', () => {
  it('is shared by the first two panels, but not by the third', async () => {
    const fixture = TestBed.createComponent(DiCounterDemo);
    await fixture.whenStable();
    const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('button');
    buttons[0].click();
    buttons[2].click();
    buttons[2].click();
    await fixture.whenStable();
    expect(Array.from(buttons).map((b) => b.textContent?.trim())).toEqual(['1', '1', '2']);
  });
});
