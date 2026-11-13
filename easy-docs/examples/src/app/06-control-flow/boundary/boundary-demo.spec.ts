import {TestBed} from '@angular/core/testing';
import {ControlFlowBoundaryDemo} from './boundary-demo';

describe('ControlFlowBoundaryDemo', () => {
  it('shows @error instead of the broken part, and $reset() tries again', async () => {
    const fixture = TestBed.createComponent(ControlFlowBoundaryDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.textContent).toContain('Problem: The widget could not start');
    expect(page.textContent).toContain('The rest of the page still works.');

    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.textContent).toContain('The widget works.');
    expect(page.textContent).not.toContain('Problem:');
  });
});
