import {TestBed} from '@angular/core/testing';
import {RxLateListener, RxNotificationList} from './notification-list';
import {RxNotifications} from './notifications';

describe('takeUntilDestroyed', () => {
  // #docregion destroy
  it('stops listening when the component is destroyed', async () => {
    const notifications = TestBed.inject(RxNotifications);
    const fixture = TestBed.createComponent(RxNotificationList);

    notifications.send('Your tea is ready');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('li').textContent).toBe('Your tea is ready');
    expect(notifications.hasListeners).toBe(true);

    fixture.destroy();
    expect(notifications.hasListeners).toBe(false);
  });
  // #enddocregion destroy

  it('works in a method when you pass a DestroyRef', async () => {
    const notifications = TestBed.inject(RxNotifications);
    const fixture = TestBed.createComponent(RxLateListener);
    await fixture.whenStable();

    fixture.nativeElement.querySelector('button').click();
    notifications.send('Hello');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Hello');

    fixture.destroy();
    expect(notifications.hasListeners).toBe(false);
  });
});
