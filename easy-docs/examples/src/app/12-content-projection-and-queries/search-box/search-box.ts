import {Component, ElementRef, viewChild} from '@angular/core';

@Component({
  selector: 'app-proj-search-box',
  template: `
    <input #box type="search" placeholder="Search recipes" />
    <button type="button" (click)="focusBox()">Start typing</button>
  `,
})
export class ProjSearchBox {
  private readonly box = viewChild.required<ElementRef<HTMLInputElement>>('box');

  focusBox(): void {
    this.box().nativeElement.focus();
  }
}
