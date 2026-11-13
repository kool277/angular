import {Component, signal} from '@angular/core';
import {form, FormField, min} from '@angular/forms/signals';
import {FormsStarRating} from './star-rating';

// #docregion usage
@Component({
  selector: 'app-forms-review',
  imports: [FormField, FormsStarRating],
  template: `
    <app-forms-star-rating [formField]="reviewForm.stars" />
    @if (reviewForm.stars().invalid()) {
      <p class="error">{{ reviewForm.stars().errors()[0].message }}</p>
    }
  `,
})
export class FormsReview {
  readonly reviewModel = signal({stars: 0});
  readonly reviewForm = form(this.reviewModel, (path) => {
    min(path.stars, 1, {message: 'Choose at least one star.'});
  });
}
// #enddocregion usage
