// #docregion imports
import {Injector, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {form} from '@angular/forms/signals';
import {TestingLogin, TestingLoginForm, testingLoginSchema} from './login-form';
// #enddocregion imports

// #docregion isolated
describe('login form rules', () => {
  function createForm(value: TestingLogin) {
    const model = signal(value);
    return form(model, testingLoginSchema, {injector: TestBed.inject(Injector)});
  }

  it('needs an email address and a long enough password', () => {
    const loginForm = createForm({email: '', password: 'short'});

    expect(
      loginForm
        .email()
        .errors()
        .map((e) => e.kind),
    ).toEqual(['required']);
    expect(
      loginForm
        .password()
        .errors()
        .map((e) => e.kind),
    ).toEqual(['minLength']);
    expect(loginForm().valid()).toBe(false);

    loginForm.email().value.set('ada@example.uz');
    loginForm.password().value.set('long enough');

    expect(loginForm().valid()).toBe(true);
  });
});
// #enddocregion isolated

// #docregion component
describe('TestingLoginForm', () => {
  it('enables the button once the user typed valid values', async () => {
    const fixture = TestBed.createComponent(TestingLoginForm);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    const [emailInput, passwordInput] = page.querySelectorAll('input');
    expect(page.querySelector('button')!.disabled).toBe(true);

    emailInput.value = 'ada@example.uz';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.value = 'long enough';
    passwordInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(fixture.componentInstance.model()).toEqual({
      email: 'ada@example.uz',
      password: 'long enough',
    });
    expect(page.querySelector('button')!.disabled).toBe(false);
  });
});
// #enddocregion component
