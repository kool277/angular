import {Component, Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: 'input[appSelectOnFocus]',
  host: {
    '(focus)': 'selectAll()',
  },
})
export class DirSelectOnFocus {
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);

  selectAll(): void {
    this.element.nativeElement.select();
  }
}

@Component({
  selector: 'app-select-on-focus-demo',
  imports: [DirSelectOnFocus],
  template: `
    <label>
      Share this link:
      <input appSelectOnFocus readonly value="https://example.com/invite/42" />
    </label>
  `,
})
export class DirSelectOnFocusDemo {}
