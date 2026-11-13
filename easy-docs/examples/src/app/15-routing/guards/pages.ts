import {Component, inject, input, signal} from '@angular/core';
import {Router} from '@angular/router';
import {RoutingAuth} from './auth';
import {HasUnsavedChanges} from './guards';

@Component({
  template: `
    <h2>Please log in</h2>
    <button (click)="logIn()">Log in</button>
  `,
})
export class RoutingLoginPage {
  private readonly auth = inject(RoutingAuth);
  private readonly router = inject(Router);

  /** The page to go back to, from `?returnUrl=...`. */
  readonly returnUrl = input('/');

  logIn() {
    this.auth.loggedIn.set(true);
    this.router.navigateByUrl(this.returnUrl());
  }
}

@Component({template: `<h2>Your account</h2>`})
export class RoutingAccountPage {}

// #docregion notes
@Component({
  template: `
    <h2>Notes</h2>
    <textarea #box (input)="draft.set(box.value)"></textarea>
  `,
})
export class RoutingNotesPage implements HasUnsavedChanges {
  readonly draft = signal('');

  hasUnsavedChanges() {
    return this.draft() !== '';
  }
}
// #enddocregion notes

@Component({template: `<h2>Admin dashboard</h2>`})
export class RoutingAdminDashboard {}

@Component({template: `<h2>User dashboard</h2>`})
export class RoutingUserDashboard {}
