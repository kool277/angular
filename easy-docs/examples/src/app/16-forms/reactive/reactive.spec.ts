import {TestBed} from '@angular/core/testing';
import {FormsReactiveLogin} from './reactive-login';
import {FormsReactiveSkills} from './reactive-skills';

describe('reactive forms', () => {
  it('updates the FormGroup when the user types, and submits', async () => {
    const fixture = TestBed.createComponent(FormsReactiveLogin);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const [email, password] = page.querySelectorAll('input');
    const button = page.querySelector('button')!;
    expect(button.disabled).toBe(true);

    email.value = 'aziza@example.uz';
    email.dispatchEvent(new Event('input'));
    password.value = 'secret-tea';
    password.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(fixture.componentInstance.loginForm.value).toEqual({
      email: 'aziza@example.uz',
      password: 'secret-tea',
    });
    expect(button.disabled).toBe(false);
    button.click();
    await fixture.whenStable();
    expect(page.querySelector('.welcome')?.textContent).toBe('Welcome, aziza@example.uz!');
  });

  it('shows the email error after the field is left', async () => {
    const fixture = TestBed.createComponent(FormsReactiveLogin);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const email = page.querySelector('input')!;
    email.value = 'aziza';
    email.dispatchEvent(new Event('input'));
    email.dispatchEvent(new Event('blur'));
    await fixture.whenStable();
    expect(page.querySelector('.error')?.textContent).toBe('This is not an email address.');
  });

  it('adds controls to a FormArray', async () => {
    const fixture = TestBed.createComponent(FormsReactiveSkills);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('input').length).toBe(3);
    expect(fixture.componentInstance.skillsForm.getRawValue()).toEqual({
      name: '',
      skills: ['Angular', ''],
    });
  });
});
