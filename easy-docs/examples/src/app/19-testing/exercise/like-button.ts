import {Component, input, output, signal} from '@angular/core';

@Component({
  selector: 'app-testing-like-button',
  template: `
    <button type="button" (click)="like()" [disabled]="likes() >= limit()">
      {{ label() }} ({{ likes() }})
    </button>
  `,
})
export class TestingLikeButton {
  readonly label = input('Like');
  readonly limit = input(3);
  readonly liked = output<number>();
  protected readonly likes = signal(0);

  like(): void {
    this.likes.update((n) => n + 1);
    this.liked.emit(this.likes());
  }
}
