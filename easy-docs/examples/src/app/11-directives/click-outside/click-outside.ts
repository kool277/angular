import {Directive, ElementRef, inject, output} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class DirClickOutside {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly appClickOutside = output<void>();

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;
    if (!this.element.nativeElement.contains(target)) {
      this.appClickOutside.emit();
    }
  }
}
