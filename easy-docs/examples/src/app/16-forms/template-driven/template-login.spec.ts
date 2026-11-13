import {TestBed} from '@angular/core/testing';
import {FormsTemplateLogin} from './template-login';

describe('FormsTemplateLogin', () => {
  async function setup() {
    const fixture = TestBed.createComponent(FormsTemplateLogin);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const [email, password] = page.querySelectorAll('input');
    return {fixture, page, email, password};
  }

  it('writes typed text into the signals and submits', async () => {
    const {fixture, page, email, password} = await setup();
    email.value = 'timur@example.uz';
    email.dispatchEvent(new Event('input'));
    password.value = 'green-tea-1';
    password.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(fixture.componentInstance.email()).toBe('timur@example.uz');
    const button = page.querySelector('button')!;
    expect(button.disabled).toBe(false);
    button.click();
    await fixture.whenStable();
    expect(page.querySelector('.welcome')?.textContent).toBe('Welcome, timur@example.uz!');
  });

  it('shows an error for a wrong email after the field is left', async () => {
    const {fixture, page, email} = await setup();
    email.value = 'timur';
    email.dispatchEvent(new Event('input'));
    email.dispatchEvent(new Event('blur'));
    await fixture.whenStable();
    expect(page.querySelector('.error')?.textContent).toBe('Enter a valid email address.');
    expect(page.querySelector('button')!.disabled).toBe(true);
  });
});
