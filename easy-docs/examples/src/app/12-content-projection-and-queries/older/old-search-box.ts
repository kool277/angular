import {Component, ElementRef, ViewChild} from '@angular/core';

// Older style. New code uses viewChild() instead.
@Component({
  selector: 'app-proj-old-search-box',
  template: `
    <input #box type="search" />
    <button type="button" (click)="focusBox()">Start typing</button>
  `,
})
export class ProjOldSearchBox {
  @ViewChild('box') box!: ElementRef<HTMLInputElement>;

  focusBox(): void {
    this.box.nativeElement.focus();
  }
}
