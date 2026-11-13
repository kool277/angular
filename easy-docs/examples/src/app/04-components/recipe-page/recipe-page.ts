import {Component} from '@angular/core';
import {CompRecipeCard} from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-page',
  imports: [CompRecipeCard],
  template: `
    <h1>Today's recipes</h1>
    <app-recipe-card />
    <app-recipe-card />
  `,
})
export class CompRecipePage {}
