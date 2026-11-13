import {Service} from '@angular/core';
import {Subject} from 'rxjs';

@Service()
export class RxNotifications {
  private readonly messages = new Subject<string>();
  readonly messages$ = this.messages.asObservable();

  send(text: string): void {
    this.messages.next(text);
  }

  /** True while someone is subscribed. Tests use it to check clean-up. */
  get hasListeners(): boolean {
    return this.messages.observed;
  }
}
