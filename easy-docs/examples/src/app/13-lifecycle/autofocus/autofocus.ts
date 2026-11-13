import {Directive, ElementRef, afterNextRender, inject} from '@angular/core';

@Directive({selector: '[appAutofocus]'})
export class LifeAutofocus {
  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef);
    afterNextRender(() => element.nativeElement.focus());
  }
}
