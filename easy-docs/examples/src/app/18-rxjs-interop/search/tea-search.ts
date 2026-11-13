import {HttpClient} from '@angular/common/http';
import {Component, inject, signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, switchMap} from 'rxjs';

interface Tea {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rx-tea-search',
  template: `
    <input #box placeholder="Search teas" (input)="query.set(box.value)" />
    <ul>
      @for (tea of results(); track tea.id) {
        <li>{{ tea.name }}</li>
      }
    </ul>
  `,
})
export class RxTeaSearch {
  private readonly http = inject(HttpClient);
  protected readonly query = signal('');

  // #docregion pipeline
  private readonly results$ = toObservable(this.query).pipe(
    debounceTime(300),
    switchMap((text) => this.http.get<Tea[]>('/http-demo/teas.json', {params: {q: text}})),
  );

  protected readonly results = toSignal(this.results$, {initialValue: []});
  // #enddocregion pipeline
}
