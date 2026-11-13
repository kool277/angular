import {
  animate,
  animation,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import {Component, signal} from '@angular/core';

// #docregion reusable
export const fadeSlideIn = animation([
  style({opacity: 0, transform: 'translateY(16px)'}),
  animate('{{ time }}', style({opacity: 1, transform: 'none'})),
]);
// #enddocregion reusable

@Component({
  selector: 'app-legacy-list',
  // #docregion sequence
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [stagger(60, [useAnimation(fadeSlideIn, {params: {time: '250ms'}})])], {
          optional: true,
        }),
      ]),
    ]),
  ],
  // #enddocregion sequence
  template: `
    <button (click)="cities.set(['Samarkand', 'Bukhara', 'Khiva'])">Load</button>
    <ul [@listAnimation]="cities().length">
      @for (city of cities(); track city) {
        <li>{{ city }}</li>
      }
    </ul>
  `,
})
export class AnimLegacyList {
  cities = signal<string[]>([]);
}
