import {Component} from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
    <p class="task" [class.done]="done" [class]="priorityClasses">Water the plants</p>
    <div class="bar" [style.width.%]="progress" [style.background-color]="barColor"></div>
    <button type="button" (click)="finish()">Finish</button>
  `,
  styles: `
    .done {
      text-decoration: line-through;
    }
    .bar {
      height: 8px;
    }
  `,
})
export class TplTaskItem {
  done = false;
  progress = 40;
  barColor = 'orange';
  priorityClasses = {urgent: true, later: false};

  finish(): void {
    this.done = true;
    this.progress = 100;
    this.barColor = 'green';
    this.priorityClasses = {urgent: false, later: false};
  }
}
