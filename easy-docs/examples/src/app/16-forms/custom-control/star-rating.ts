import {Component, input, model, output} from '@angular/core';
import {FormValueControl} from '@angular/forms/signals';

// #docregion control
@Component({
  selector: 'app-forms-star-rating',
  template: `
    @for (star of stars; track star) {
      <button
        type="button"
        [class.on]="star <= value()"
        [disabled]="disabled()"
        [attr.aria-label]="star + ' stars'"
        (click)="choose(star)"
      >
        ★
      </button>
    }
  `,
  styles: `
    .on {
      color: orange;
    }
  `,
})
export class FormsStarRating implements FormValueControl<number> {
  readonly value = model(0);
  readonly disabled = input(false);
  readonly touch = output<void>();

  readonly stars = [1, 2, 3, 4, 5];

  choose(star: number) {
    this.value.set(star);
    this.touch.emit();
  }
}
// #enddocregion control
