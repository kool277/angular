import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-testing-rating',
  template: `
    <p>{{ label() }}: {{ stars() }} of 5</p>
    @for (star of [1, 2, 3, 4, 5]; track star) {
      <button type="button" [attr.aria-label]="star + ' stars'" (click)="rated.emit(star)">
        {{ star <= stars() ? '★' : '☆' }}
      </button>
    }
  `,
})
export class TestingRating {
  readonly label = input('Rating');
  readonly stars = input.required<number>();
  readonly rated = output<number>();
}
