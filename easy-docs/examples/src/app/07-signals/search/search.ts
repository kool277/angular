import {Component, computed, debounced, signal} from '@angular/core';

const CITIES = ['Andijan', 'Bukhara', 'Fergana', 'Khiva', 'Namangan', 'Samarkand', 'Tashkent'];

@Component({
  selector: 'app-search',
  template: `
    <input #box placeholder="Search a city" (input)="query.set(box.value)" />
    @if (settledQuery.isLoading()) {
      <p class="status">Waiting for you to stop typing…</p>
    }
    <ul>
      @for (city of results(); track city) {
        <li>{{ city }}</li>
      }
    </ul>
  `,
})
export class SignalsSearch {
  readonly query = signal('');

  // Follows `query`, but only after it has not changed for 300 ms.
  readonly settledQuery = debounced(this.query, 300);

  readonly results = computed(() => {
    const text = this.settledQuery.value().toLowerCase();
    return CITIES.filter((city) => city.toLowerCase().includes(text));
  });
}
