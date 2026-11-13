import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-a11y-player-controls',
  template: `
    <button type="button" [aria-pressed]="muted()" (click)="muted.set(!muted())">Mute</button>
    <button type="button" aria-label="Next song" (click)="song.set(song() + 1)">⏭</button>
    <p>Song {{ song() }}</p>
  `,
})
export class A11yPlayerControls {
  protected readonly muted = signal(false);
  protected readonly song = signal(1);
}
