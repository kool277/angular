import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
  Injector,
} from '@angular/core';

const ALL_RECIPES = ['Plov', 'Lagman', 'Manti', 'Samsa', 'Shurpa'];

@Component({
  selector: 'app-a11y-recipe-search',
  template: `
    <form role="search" (submit)="search($event)">
      <label for="query">Recipe name</label>
      <input id="query" #query autocomplete="off" />
      <button type="submit">Search</button>
    </form>

    <p role="status">{{ status() }}</p>

    @if (searched()) {
      <h2 #resultsHeading tabindex="-1">Results</h2>
      <ul>
        @for (recipe of results(); track recipe) {
          <li>{{ recipe }}</li>
        }
      </ul>
    }
  `,
})
export class A11yRecipeSearch {
  private readonly injector = inject(Injector);
  private readonly query = viewChild.required<ElementRef<HTMLInputElement>>('query');
  private readonly resultsHeading = viewChild<ElementRef<HTMLElement>>('resultsHeading');
  protected readonly searched = signal(false);
  protected readonly results = signal<string[]>([]);
  protected readonly status = computed(() =>
    this.searched() ? `${this.results().length} recipes found` : '',
  );

  protected search(event: Event): void {
    event.preventDefault();
    const text = this.query().nativeElement.value.toLowerCase();
    this.results.set(ALL_RECIPES.filter((recipe) => recipe.toLowerCase().includes(text)));
    this.searched.set(true);
    afterNextRender(() => this.resultsHeading()?.nativeElement.focus(), {
      injector: this.injector,
    });
  }
}
