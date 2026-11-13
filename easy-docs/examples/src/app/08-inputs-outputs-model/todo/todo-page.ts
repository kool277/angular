import {Component, computed, signal} from '@angular/core';
import {Todo, TodoFilter} from './todo';
import {InputsTodoFilter} from './todo-filter';
import {InputsTodoItem} from './todo-item';

@Component({
  selector: 'app-todo-page',
  imports: [InputsTodoFilter, InputsTodoItem],
  template: `
    <app-todo-filter [(filter)]="filter" />
    <ul>
      @for (todo of visible(); track todo.id) {
        <li>
          <app-todo-item [todo]="todo" (toggled)="toggle($event)" (removed)="remove($event)" />
        </li>
      } @empty {
        <li>No tasks here.</li>
      }
    </ul>
    <p>Showing {{ visible().length }} of {{ todos().length }} ({{ filter() }})</p>
  `,
})
export class InputsTodoPage {
  readonly todos = signal<Todo[]>([
    {id: 1, title: 'Water the plants', done: false},
    {id: 2, title: 'Pay the bills', done: true},
    {id: 3, title: 'Read chapter 8', done: false},
  ]);
  readonly filter = signal<TodoFilter>('all');

  readonly visible = computed(() => {
    const filter = this.filter();
    if (filter === 'open') {
      return this.todos().filter((todo) => !todo.done);
    }
    if (filter === 'done') {
      return this.todos().filter((todo) => todo.done);
    }
    return this.todos();
  });

  toggle(id: number) {
    this.todos.update((todos) =>
      todos.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo)),
    );
  }

  remove(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
