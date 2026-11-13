import {Service, computed, signal} from '@angular/core';

@Service()
export class DiCartStore {
  private readonly items = signal<string[]>([]);

  readonly count = computed(() => this.items().length);

  add(item: string): void {
    this.items.update((items) => [...items, item]);
  }
}
