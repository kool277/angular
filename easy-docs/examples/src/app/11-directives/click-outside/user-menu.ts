import {Component, signal} from '@angular/core';
import {DirClickOutside} from './click-outside';

@Component({
  selector: 'app-user-menu',
  imports: [DirClickOutside],
  template: `
    <div class="menu" (appClickOutside)="open.set(false)">
      <button type="button" class="toggle" (click)="open.set(!open())">Account ▾</button>
      @if (open()) {
        <ul>
          <li><button type="button">Profile</button></li>
          <li><button type="button">Settings</button></li>
          <li><button type="button">Sign out</button></li>
        </ul>
      }
    </div>
    <p>Click anywhere outside the menu to close it.</p>
  `,
  styles: `
    .menu {
      display: inline-block;
      position: relative;
    }
    ul {
      position: absolute;
      margin: 0;
      padding: 4px;
      list-style: none;
      background: white;
      border: 1px solid gray;
    }
  `,
})
export class DirUserMenu {
  readonly open = signal(false);
}
