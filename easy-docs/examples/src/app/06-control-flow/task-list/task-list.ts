import {Component} from '@angular/core';

type Status = 'todo' | 'doing' | 'done';

interface Task {
  id: number;
  title: string;
  status: Status;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class ControlFlowTaskList {
  tasks: Task[] = [
    {id: 1, title: 'Buy bread', status: 'done'},
    {id: 2, title: 'Learn @for', status: 'doing'},
    {id: 3, title: 'Call grandma', status: 'todo'},
  ];
  nextId = 4;

  doneCount(): number {
    return this.tasks.filter((task) => task.status === 'done').length;
  }

  add(title: string) {
    if (title.trim() === '') {
      return;
    }
    this.tasks = [...this.tasks, {id: this.nextId, title, status: 'todo'}];
    this.nextId = this.nextId + 1;
  }

  nextStep(task: Task) {
    const status: Status = task.status === 'todo' ? 'doing' : 'done';
    this.tasks = this.tasks.map((t) => (t.id === task.id ? {...t, status} : t));
  }

  remove(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}
