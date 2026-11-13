import {Component, input, output} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-todo-item',
  template: `
    <label [class.done]="todo().done">
      <input type="checkbox" [checked]="todo().done" (change)="toggled.emit(todo().id)" />
      {{ todo().title }}
    </label>
    <button (click)="removed.emit(todo().id)">Delete</button>
  `,
  styles: `
    .done {
      text-decoration: line-through;
    }
  `,
})
export class InputsTodoItem {
  readonly todo = input.required<Todo>();
  readonly toggled = output<number>();
  readonly removed = output<number>();
}
