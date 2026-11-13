import {Component} from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  // #docregion urls
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
  // #enddocregion urls
})
export class CompRecipeCard {
  name = 'Plov';
  minutes = 90;
}
