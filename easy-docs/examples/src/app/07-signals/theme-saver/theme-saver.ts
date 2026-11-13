import {Component, effect, signal, untracked} from '@angular/core';

@Component({
  selector: 'app-theme-saver',
  template: `
    <p>Hello, {{ userName() }}. Theme: {{ theme() }}</p>
    <button type="button" (click)="theme.set('dark')">Dark</button>
    <button type="button" (click)="theme.set('light')">Light</button>
    <button type="button" (click)="userName.set('Guest')">Log out</button>
  `,
})
export class SignalsThemeSaver {
  readonly theme = signal('light');
  readonly userName = signal('Bobur');

  constructor() {
    // #docregion effect
    effect(() => {
      // Tracked: the effect runs again when `theme` changes.
      const theme = this.theme();
      // Not tracked: a new user name alone does not run the effect.
      const user = untracked(this.userName);
      localStorage.setItem('theme', theme);
      console.log(`Saved theme "${theme}" for ${user}`);
    });
    // #enddocregion effect
  }
}
