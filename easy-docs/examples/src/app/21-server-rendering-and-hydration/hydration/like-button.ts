import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-ssr-like-button',
  template: `<button type="button" (click)="likes.set(likes() + 1)">Like ({{ likes() }})</button>`,
})
export class SsrLikeButton {
  protected readonly likes = signal(0);
}
