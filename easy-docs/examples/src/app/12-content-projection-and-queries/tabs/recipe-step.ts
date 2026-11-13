import {Component, input} from '@angular/core';

@Component({
  selector: 'app-proj-recipe-step',
  template: `<p>{{ text() }}</p>`,
})
export class ProjRecipeStep {
  static created = 0;
  readonly text = input.required<string>();

  constructor() {
    ProjRecipeStep.created++;
  }
}
