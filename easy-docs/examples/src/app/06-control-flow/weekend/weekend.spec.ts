import {TestBed} from '@angular/core/testing';
import {ControlFlowWeekend} from './weekend';

describe('ControlFlowWeekend', () => {
  it('lets two @case blocks share one content and falls back to @default', async () => {
    const fixture = TestBed.createComponent(ControlFlowWeekend);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const kind = () => page.querySelector('.kind')?.textContent;
    const [sunday, monday] = Array.from(page.querySelectorAll('button'));

    expect(kind()).toBe('Weekend. Time to rest.');
    sunday.click();
    await fixture.whenStable();
    expect(kind()).toBe('Weekend. Time to rest.');
    monday.click();
    await fixture.whenStable();
    expect(kind()).toBe('A work day.');
  });
});
