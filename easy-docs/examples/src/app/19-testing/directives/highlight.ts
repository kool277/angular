import {Directive, input} from '@angular/core';

@Directive({
  selector: '[appTestingHighlight]',
  host: {
    '[style.backgroundColor]': 'color() || "yellow"',
  },
})
export class TestingHighlight {
  readonly color = input('', {alias: 'appTestingHighlight'});
}
