// Fix 3 (forms): a [formField] <select> resyncs when the text of an option changes.
import {Component, ElementRef, signal, viewChild} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormField, form} from '@angular/forms/signals';

@Component({
  imports: [FormField],
  template: `
    <select #select [formField]="f">
      <option>one</option>
      <option>{{ label() }}</option>
    </select>
  `,
})
class OptionTextSelect {
  readonly f = form(signal('two'));
  readonly select = viewChild.required<ElementRef<HTMLSelectElement>>('select');
  readonly label = signal('pending');
}

describe('fix 3: select and option text', () => {
  it('selects the option whose text starts to match the value', async () => {
    const fixture = TestBed.createComponent(OptionTextSelect);
    await fixture.whenStable();
    expect(fixture.componentInstance.select().nativeElement.value).toBe('');

    fixture.componentInstance.label.set('two');
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve)); // let the MutationObserver run

    expect(fixture.componentInstance.select().nativeElement.value).toBe('two'); // stock: ''
  });
});
