import {Component} from '@angular/core';
import {ClickCounter} from './click-counter';

@Component({
  selector: 'app-vote-button',
  template: `
    <button type="button" (click)="registerClick()">Vote</button>
    <p>{{ summary() }}</p>
  `,
})
export class CompVoteButton extends ClickCounter {
  override summary(): string {
    return `${this.clicks} votes`;
  }
}
