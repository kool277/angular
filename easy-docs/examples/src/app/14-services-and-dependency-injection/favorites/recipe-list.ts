import {Component, inject} from '@angular/core';
import {DiFavoritesStore} from './favorites-store';

@Component({
  selector: 'app-di-favorites-count',
  template: `<span>♥ {{ favorites.count() }}</span>`,
})
export class DiFavoritesCount {
  protected readonly favorites = inject(DiFavoritesStore);
}

@Component({
  selector: 'app-di-recipe-list',
  imports: [DiFavoritesCount],
  template: `
    <header>Recipes <app-di-favorites-count /></header>
    <ul>
      @for (recipe of recipes; track recipe.id) {
        <li>
          {{ recipe.name }}
          <button type="button" (click)="favorites.toggle(recipe.id)">
            {{ favorites.isFavorite(recipe.id) ? '♥' : '♡' }}
          </button>
        </li>
      }
    </ul>
  `,
})
export class DiRecipeList {
  protected readonly favorites = inject(DiFavoritesStore);
  protected readonly recipes = [
    {id: 1, name: 'Plov'},
    {id: 2, name: 'Lagman'},
    {id: 3, name: 'Somsa'},
  ];
}
