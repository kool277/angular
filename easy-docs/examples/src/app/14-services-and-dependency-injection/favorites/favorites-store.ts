import {Service, computed, inject, signal} from '@angular/core';
import {STORAGE} from './storage';

const KEY = 'favorite-recipes';

@Service()
export class DiFavoritesStore {
  private readonly storage = inject(STORAGE);
  private readonly ids = signal<number[]>(JSON.parse(this.storage.getItem(KEY) ?? '[]'));

  readonly count = computed(() => this.ids().length);

  isFavorite(id: number): boolean {
    return this.ids().includes(id);
  }

  toggle(id: number): void {
    this.ids.update((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
    this.storage.setItem(KEY, JSON.stringify(this.ids()));
  }
}
