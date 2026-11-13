import {TestBed} from '@angular/core/testing';
import {FormsHelpText} from './help-text';

describe('FormsHelpText', () => {
  it('shows help text that the schema computes from the value', async () => {
    const fixture = TestBed.createComponent(FormsHelpText);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.help')?.textContent).toBe('At least 3 characters.');

    fixture.componentInstance.nameModel.set({username: 'malika'});
    await fixture.whenStable();
    expect(page.querySelector('.help')?.textContent).toBe('Looks good.');
  });
});
