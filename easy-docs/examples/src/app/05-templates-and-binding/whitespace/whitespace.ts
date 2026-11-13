import {Component} from '@angular/core';

@Component({
  selector: 'app-whitespace',
  template: `
    <p class="collapsed">Hello world</p>
    <p class="kept">{{ first }}&ngsp;{{ second }}</p>
  `,
})
export class TplWhitespace {
  first = 'Hello';
  second = 'world';
}
