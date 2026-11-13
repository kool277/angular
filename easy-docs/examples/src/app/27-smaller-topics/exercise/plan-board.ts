import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-plan-board',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  template: `
    <div cdkDropListGroup class="board">
      <section>
        <h3>Ideas</h3>
        <ul cdkDropList [cdkDropListData]="ideas()" (cdkDropListDropped)="drop($event)">
          @for (item of ideas(); track item) {
            <li cdkDrag>{{ item }}</li>
          }
        </ul>
      </section>
      <section>
        <h3>Today</h3>
        <ul cdkDropList [cdkDropListData]="today()" (cdkDropListDropped)="drop($event)">
          @for (item of today(); track item) {
            <li cdkDrag>{{ item }}</li>
          }
        </ul>
      </section>
    </div>
  `,
})
export class DndPlanBoard {
  ideas = signal(['Registan', 'Paper mill', 'Ulugh Beg Observatory']);
  today = signal<string[]>([]);

  drop(event: CdkDragDrop<string[]>) {
    const from = [...event.previousContainer.data];
    const to = event.previousContainer === event.container ? from : [...event.container.data];
    if (from === to) {
      moveItemInArray(from, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(from, to, event.previousIndex, event.currentIndex);
    }
    this.setList(event.previousContainer.data, from);
    this.setList(event.container.data, to);
  }

  private setList(oldList: string[], newList: string[]) {
    if (oldList === this.ideas()) {
      this.ideas.set(newList);
    } else {
      this.today.set(newList);
    }
  }
}
