import {TestBed} from '@angular/core/testing';
import {ControlFlowInbox} from './inbox';

describe('ControlFlowInbox', () => {
  it('marks the first message as new', async () => {
    const fixture = TestBed.createComponent(ControlFlowInbox);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const items = page.querySelectorAll('li');
    expect(items.length).toBe(2);
    expect(items[0].querySelector('strong')?.textContent).toBe('new');
    expect(items[1].querySelector('strong')).toBeNull();
  });

  it('shows "No messages." and hides the button after "Delete all"', async () => {
    const fixture = TestBed.createComponent(ControlFlowInbox);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('li')?.textContent).toBe('No messages.');
    expect(page.querySelector('button')).toBeNull();
  });
});
