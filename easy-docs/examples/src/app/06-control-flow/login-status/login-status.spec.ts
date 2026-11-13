import {TestBed} from '@angular/core/testing';
import {ControlFlowLoginStatus} from './login-status';

describe('ControlFlowLoginStatus', () => {
  it('shows the @else content first, then the @if content after a click', async () => {
    const fixture = TestBed.createComponent(ControlFlowLoginStatus);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('p')?.textContent).toBe('Please log in.');

    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('p')?.textContent).toBe('Welcome back!');
    // Only one of the two blocks is ever in the page.
    expect(page.querySelectorAll('p').length).toBe(1);
  });
});
