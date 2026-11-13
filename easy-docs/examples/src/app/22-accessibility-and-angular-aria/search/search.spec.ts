import {TestBed} from '@angular/core/testing';
import {A11yRecipeSearch} from './search';

describe('A11yRecipeSearch', () => {
  it('announces the number of results and moves the focus to them', async () => {
    const fixture = TestBed.createComponent(A11yRecipeSearch);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    document.body.appendChild(element);

    element.querySelector('input')!.value = 'm';
    element.querySelector('button')!.click();
    await fixture.whenStable();

    expect(element.querySelector('[role="status"]')!.textContent).toBe('3 recipes found');
    expect(document.activeElement).toBe(element.querySelector('h2'));
    element.remove();
  });

  it('connects the label to the input', async () => {
    const fixture = TestBed.createComponent(A11yRecipeSearch);
    await fixture.whenStable();
    const label: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    expect(label.control).toBe(fixture.nativeElement.querySelector('input'));
  });
});
