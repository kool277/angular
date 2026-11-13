import {TestBed} from '@angular/core/testing';
import {FormsContact} from './contact';

describe('FormsContact', () => {
  async function setup(name: string, email: string) {
    const fixture = TestBed.createComponent(FormsContact);
    await fixture.whenStable();
    fixture.componentInstance.contactModel.set({name, email});
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    return {fixture, page};
  }

  it('shows all errors when an invalid form is submitted', async () => {
    const {fixture, page} = await setup('', '');
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('.error')?.textContent).toBe('Enter an email address.');
    expect(fixture.componentInstance.contactForm.name().touched()).toBe(true);
    expect(page.querySelector('.saved')).toBeNull();
  });

  it('runs the action for a valid form and shows "Saving…" meanwhile', async () => {
    const {fixture, page} = await setup('Timur', 'timur@example.uz');
    const button = page.querySelector('button')!;
    button.click();
    await new Promise((resolve) => setTimeout(resolve, 5));
    expect(fixture.componentInstance.contactForm().submitting()).toBe(true);
    expect(button.textContent?.trim()).toBe('Saving…');

    // The fake server answers after 30 ms.
    await new Promise((resolve) => setTimeout(resolve, 50));
    await fixture.whenStable();
    expect(page.querySelector('.saved')?.textContent).toBe('Saved Timur.');
    expect(button.textContent?.trim()).toBe('Save');
  });

  it('puts a server error on the email field until the user changes it', async () => {
    const {fixture, page} = await setup('Aziza', 'taken@example.uz');
    page.querySelector('button')!.click();
    await new Promise((resolve) => setTimeout(resolve, 50));
    await fixture.whenStable();
    expect(page.querySelector('.error')?.textContent).toBe('This email address is already used.');

    const input = page.querySelectorAll('input')[1];
    input.value = 'aziza@example.uz';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(page.querySelector('.error')).toBeNull();
  });
});
