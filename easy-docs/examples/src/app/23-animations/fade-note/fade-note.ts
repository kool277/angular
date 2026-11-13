import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-fade-note',
  templateUrl: './fade-note.html',
  styleUrl: './fade-note.css',
})
export class AnimFadeNote {
  shown = signal(false);

  toggle() {
    this.shown.update((value) => !value);
  }
}
