import {Service, signal} from '@angular/core';

/** Holds the login token. A real app sets it after the user logs in. */
@Service()
export class HttpSession {
  readonly token = signal<string | null>(null);
}
