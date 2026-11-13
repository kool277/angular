import {Component} from '@angular/core';
import {JoinNamesImpurePipe, JoinNamesPipe} from './join-pipes';

@Component({
  selector: 'app-guest-list',
  imports: [JoinNamesPipe, JoinNamesImpurePipe],
  template: `
    <p id="pure">Pure: {{ guests | joinNames }}</p>
    <p id="impure">Impure: {{ guests | joinNamesImpure }}</p>
    <button id="push" (click)="addByPush()">Add Laylo (push)</button>
    <button id="copy" (click)="addByCopy()">Add Kamol (new array)</button>
  `,
})
export class PipesGuestList {
  guests = ['Aziz', 'Malika'];

  // #docregion add
  // Changes the same array: a pure pipe does not notice.
  addByPush() {
    this.guests.push('Laylo');
  }

  // Creates a new array: every pipe notices.
  addByCopy() {
    this.guests = [...this.guests, 'Kamol'];
  }
  // #enddocregion add
}
