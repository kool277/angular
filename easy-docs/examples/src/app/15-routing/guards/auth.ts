import {Injectable, signal} from '@angular/core';

/** A fake login service. A real app would ask a server. */
@Injectable({providedIn: 'root'})
export class RoutingAuth {
  readonly loggedIn = signal(false);
  readonly isAdmin = signal(false);
}
