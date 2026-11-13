import {Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    @for (star of stars; track star) {
      <button type="button" (click)="rate(star)">{{ star }}★</button>
    }
  `,
})
export class InputsStarRating {
  readonly stars = [1, 2, 3, 4, 5];
  // #docregion output
  readonly rated = output<number>();

  rate(star: number) {
    this.rated.emit(star);
  }
  // #enddocregion output
}

@Component({
  selector: 'app-star-rating-demo',
  imports: [InputsStarRating],
  template: `
    <!-- #docregion listen -->
    <app-star-rating (rated)="onRated($event)" />
    <p>{{ message() }}</p>
    <!-- #enddocregion listen -->
  `,
})
export class InputsStarRatingDemo {
  readonly message = signal('Please rate this book.');

  onRated(stars: number) {
    this.message.set(`Thank you for ${stars} stars!`);
  }
}
