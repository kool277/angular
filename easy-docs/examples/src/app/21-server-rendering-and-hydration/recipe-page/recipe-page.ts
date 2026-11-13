import {httpResource} from '@angular/common/http';
import {Component} from '@angular/core';

export interface SsrRecipe {
  name: string;
  minutes: number;
}

@Component({
  selector: 'app-ssr-recipe-page',
  template: `
    @if (recipe.hasValue()) {
      <h1>{{ recipe.value().name }}</h1>
      <p>Ready in {{ recipe.value().minutes }} minutes.</p>
    } @else {
      <p>Loading…</p>
    }
  `,
})
export class SsrRecipePage {
  protected readonly recipe = httpResource<SsrRecipe>(() => '/api/recipe-of-the-day');
}
