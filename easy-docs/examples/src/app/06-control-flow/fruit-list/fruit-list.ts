import {Component} from '@angular/core';

interface Fruit {
  id: number;
  name: string;
}

@Component({
  selector: 'app-fruit-list',
  template: `
    <ul>
      <!-- #docregion loop -->
      @for (fruit of fruits; track fruit.id) {
        <li [class.odd]="$odd">
          {{ $index + 1 }}. {{ fruit.name }}
          @if ($first) {
            (first)
          }
          @if ($last) {
            (last of {{ $count }})
          }
        </li>
      } @empty {
        <li>No fruit left.</li>
      }
      <!-- #enddocregion loop -->
    </ul>
    <button (click)="removeFirst()">Eat the first fruit</button>
  `,
  styles: `
    .odd {
      background: #eee;
    }
  `,
})
export class ControlFlowFruitList {
  fruits: Fruit[] = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Banana'},
    {id: 3, name: 'Cherry'},
  ];

  removeFirst() {
    this.fruits = this.fruits.slice(1);
  }
}
