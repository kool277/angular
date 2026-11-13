import {Component} from '@angular/core';

@Component({
  selector: 'app-char-counter',
  template: `
    <textarea #box (input)="text = box.value" aria-label="Your message"></textarea>
    <p class="count" [class.too-long]="text.length > limit">{{ text.length }} / {{ limit }}</p>
  `,
  styles: `
    .too-long {
      color: firebrick;
      font-weight: bold;
    }
  `,
})
export class TplCharCounter {
  text = '';
  limit = 20;
}
