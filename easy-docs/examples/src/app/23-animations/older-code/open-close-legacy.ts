// #docregion trigger
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-open-close-legacy',
  animations: [
    trigger('openClose', [
      state('open', style({opacity: 1, height: '120px'})),
      state('closed', style({opacity: 0.5, height: '40px'})),
      transition('open <=> closed', [animate('300ms ease-in-out')]),
    ]),
  ],
  template: `
    <button (click)="isOpen.set(!isOpen())">Toggle</button>
    <div class="box" [@openClose]="isOpen() ? 'open' : 'closed'">Box</div>
  `,
})
export class AnimOpenCloseLegacy {
  isOpen = signal(true);
}
// #enddocregion trigger
