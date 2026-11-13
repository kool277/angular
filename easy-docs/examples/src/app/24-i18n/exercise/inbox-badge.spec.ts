import {TestBed} from '@angular/core/testing';
import {I18nInboxBadge} from './inbox-badge';

describe('I18nInboxBadge', () => {
  it('shows the right sentence for 0, 1 and many messages', async () => {
    const fixture = TestBed.createComponent(I18nInboxBadge);
    const text = () => (fixture.nativeElement as HTMLElement).textContent?.trim();

    fixture.componentRef.setInput('unread', 0);
    await fixture.whenStable();
    expect(text()).toBe('No new messages');

    fixture.componentRef.setInput('unread', 1);
    await fixture.whenStable();
    expect(text()).toBe('One new message');

    fixture.componentRef.setInput('unread', 12);
    await fixture.whenStable();
    expect(text()).toBe('12 new messages');
  });
});
