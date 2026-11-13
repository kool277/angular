import {Component, signal} from '@angular/core';
import {Listbox, Option} from '@angular/aria/listbox';

@Component({
  selector: 'app-a11y-size-picker',
  imports: [Listbox, Option],
  template: `
    <p id="size-label">Size</p>
    <div ngListbox [(value)]="size" orientation="horizontal" aria-labelledby="size-label">
      @for (option of sizes; track option) {
        <span ngOption [value]="option">{{ option }}</span>
      }
    </div>
    <p>Selected: {{ size()[0] }}</p>
  `,
  styles: `
    [ngListbox] {
      display: flex;
      gap: 8px;
    }
    [ngOption][aria-selected='true'] {
      outline: 2px solid royalblue;
    }
  `,
})
export class A11ySizePicker {
  protected readonly sizes = ['S', 'M', 'L', 'XL'];
  readonly size = signal<string[]>(['M']);
}
