import {Component, model} from '@angular/core';
import {TodoFilter} from './todo';

@Component({
  selector: 'app-todo-filter',
  template: `
    @for (option of options; track option) {
      <button type="button" [class.active]="filter() === option" (click)="filter.set(option)">
        {{ option }}
      </button>
    }
  `,
  styles: `
    .active {
      font-weight: bold;
    }
  `,
})
export class InputsTodoFilter {
  readonly options: TodoFilter[] = ['all', 'open', 'done'];
  readonly filter = model<TodoFilter>('all');
}
