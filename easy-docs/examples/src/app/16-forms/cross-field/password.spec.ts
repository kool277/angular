import {TestBed} from '@angular/core/testing';
import {FormsPassword} from './password';

describe('FormsPassword', () => {
  it('checks the second field against the first, whichever one changes', async () => {
    const fixture = TestBed.createComponent(FormsPassword);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const model = fixture.componentInstance.passwordModel;

    model.set({password: 'samarkand', confirm: 'samarkand'});
    await fixture.whenStable();
    expect(page.querySelector('.error')).toBeNull();

    // Change only the first field: the error appears on the second one.
    model.update((m) => ({...m, password: 'bukhara1'}));
    await fixture.whenStable();
    expect(page.querySelector('.error')?.textContent).toBe('The two passwords are different.');
    expect(fixture.componentInstance.passwordForm.password().valid()).toBe(true);
  });
});
