import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-stop-list',
  imports: [CdkDropList, CdkDrag],
  template: `
    <h2>Tour stops</h2>
    <ol cdkDropList (cdkDropListDropped)="drop($event)" class="stops">
      @for (stop of stops(); track stop) {
        <li cdkDrag class="stop">{{ stop }}</li>
      }
    </ol>
  `,
  styles: `
    .stop {
      padding: 8px;
      margin-bottom: 4px;
      background: #f1f4f8;
      cursor: move;
    }
    .cdk-drag-preview {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.2);
    }
    .cdk-drag-placeholder {
      opacity: 0.3;
    }
  `,
})
export class DndStopList {
  stops = signal(['Registan', 'Gur-e-Amir', 'Bibi-Khanym Mosque', 'Siab Bazaar']);

  drop(event: CdkDragDrop<string[]>) {
    this.stops.update((stops) => {
      const copy = [...stops];
      moveItemInArray(copy, event.previousIndex, event.currentIndex);
      return copy;
    });
  }
}
