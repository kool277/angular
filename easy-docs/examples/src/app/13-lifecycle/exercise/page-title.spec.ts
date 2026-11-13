import {TestBed} from '@angular/core/testing';
import {LifePageTitleDemo} from './page-title';

describe('LifePageTitle', () => {
  it('follows its input and puts the old title back when it is destroyed', async () => {
    document.title = 'My app';
    const fixture = TestBed.createComponent(LifePageTitleDemo);
    await fixture.whenStable();
    expect(document.title).toBe('Inbox (3)');

    fixture.componentInstance.unread.set(4);
    await fixture.whenStable();
    expect(document.title).toBe('Inbox (4)');

    fixture.componentInstance.open.set(false);
    await fixture.whenStable();
    expect(document.title).toBe('My app');
  });
});
