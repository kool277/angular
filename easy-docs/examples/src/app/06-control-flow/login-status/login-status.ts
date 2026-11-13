import {Component} from '@angular/core';

@Component({
  selector: 'app-login-status',
  template: `
    @if (loggedIn) {
      <p>Welcome back!</p>
    } @else {
      <p>Please log in.</p>
    }
    <button type="button" (click)="toggle()">Log in / Log out</button>
  `,
})
export class ControlFlowLoginStatus {
  loggedIn = false;

  toggle() {
    this.loggedIn = !this.loggedIn;
  }
}
