import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-slide-note',
  template: `
    <button (click)="shown.set(!shown())">Toggle</button>
    @if (shown()) {
      <p class="note" animate.enter="slide-in">Tickets are sold out for today.</p>
    }
  `,
  styleUrl: './slide-note.css',
})
export class AnimSlideNote {
  shown = signal(false);
}
