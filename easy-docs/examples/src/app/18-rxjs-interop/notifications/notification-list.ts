// #docregion list
import {Component, DestroyRef, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RxNotifications} from './notifications';

@Component({
  selector: 'app-rx-notification-list',
  template: `
    <ul>
      @for (message of messages(); track $index) {
        <li>{{ message }}</li>
      }
    </ul>
  `,
})
export class RxNotificationList {
  private readonly notifications = inject(RxNotifications);
  protected readonly messages = signal<string[]>([]);

  // #docregion constructor
  constructor() {
    this.notifications.messages$.pipe(takeUntilDestroyed()).subscribe((message) => {
      this.messages.update((messages) => [...messages, message]);
    });
  }
  // #enddocregion constructor
}
// #enddocregion list

// #docregion late
@Component({
  selector: 'app-rx-late-listener',
  template: `
    <button type="button" (click)="startListening()">Start listening</button>
    <p>{{ last() }}</p>
  `,
})
export class RxLateListener {
  private readonly notifications = inject(RxNotifications);
  protected readonly last = signal('Not listening yet.');

  // #docregion method
  private readonly destroyRef = inject(DestroyRef);

  startListening(): void {
    this.last.set('Listening…');
    this.notifications.messages$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((message) => this.last.set(message));
  }
  // #enddocregion method
}
// #enddocregion late
