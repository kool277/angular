import {Component} from '@angular/core';

@Component({
  selector: 'app-like-button',
  // #docregion template
  template: `
    <button type="button" (click)="like()">Like</button>
    <p>{{ likes }} people like this.</p>
  `,
  // #enddocregion template
})
export class IntroLikeButton {
  likes = 0;

  like() {
    this.likes = this.likes + 1;
  }
}
