import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-open-panel',
  template: `
    <button (click)="open.set(!open())" [attr.aria-expanded]="open()">Opening hours</button>
    <div class="panel" [class.open]="open()">
      <div class="inner">
        <p>Monday to Friday: 9:00–18:00</p>
        <p>Saturday: 10:00–16:00</p>
      </div>
    </div>
  `,
  styleUrl: './open-panel.css',
})
export class AnimOpenPanel {
  open = signal(false);
}
