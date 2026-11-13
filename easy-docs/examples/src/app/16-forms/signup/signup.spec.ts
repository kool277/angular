import {TestBed} from '@angular/core/testing';
import {FormsSignup} from './signup';

describe('FormsSignup', () => {
  // #docregion typing
  it('writes what the user types into the model', async () => {
    const fixture = TestBed.createComponent(FormsSignup);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const input = page.querySelector('input')!;

    input.value = 'aziza@example.uz';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(fixture.componentInstance.signupModel()).toEqual({email: 'aziza@example.uz'});
    expect(page.querySelector('.echo')?.textContent).toBe('Model: aziza@example.uz');
    expect(page.querySelector('.error')).toBeNull();
  });
  // #enddocregion typing

  it('writes a new model value into the input', async () => {
    const fixture = TestBed.createComponent(FormsSignup);
    await fixture.whenStable();
    fixture.componentInstance.signupModel.set({email: 'timur@example.uz'});
    await fixture.whenStable();
    const input = (fixture.nativeElement as HTMLElement).querySelector('input')!;
    expect(input.value).toBe('timur@example.uz');
  });

  it('is invalid when empty or not an email address', async () => {
    const fixture = TestBed.createComponent(FormsSignup);
    await fixture.whenStable();
    const form = fixture.componentInstance.signupForm;
    expect(form.email().invalid()).toBe(true);
    expect(
      form
        .email()
        .errors()
        .map((e) => e.kind),
    ).toEqual(['required']);

    fixture.componentInstance.signupModel.set({email: 'not-an-email'});
    expect(
      form
        .email()
        .errors()
        .map((e) => e.kind),
    ).toEqual(['email']);
    expect(form().valid()).toBe(false);
  });
});
