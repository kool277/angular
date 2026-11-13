import {TestBed} from '@angular/core/testing';
import {FormsFeedback} from './feedback';

describe('FormsFeedback', () => {
  async function setup() {
    const fixture = TestBed.createComponent(FormsFeedback);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const type = async (selector: string, text: string) => {
      const control = page.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)!;
      control.value = text;
      control.dispatchEvent(new Event('input'));
      control.dispatchEvent(new Event('blur'));
      await fixture.whenStable();
    };
    return {fixture, page, type};
  }

  it('disables Send until the form is valid', async () => {
    const {page, type} = await setup();
    const button = page.querySelector('button')!;
    expect(button.disabled).toBe(true);
    await type('input', 'Aziza');
    await type('textarea', 'Nice');
    expect(page.querySelector('.error')?.textContent).toBe('Write at least 10 characters.');
    expect(button.disabled).toBe(true);
    await type('textarea', 'Very nice tea!');
    expect(button.disabled).toBe(false);
  });

  it('adds the message to the list and clears the form', async () => {
    const {fixture, page, type} = await setup();
    await type('input', 'Aziza');
    await type('textarea', 'Very nice tea!');
    page.querySelector('button')!.click();
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();

    expect(page.querySelector('li')?.textContent).toBe('Aziza: Very nice tea!');
    expect(page.querySelector('input')!.value).toBe('');
    expect(fixture.componentInstance.feedbackForm().touched()).toBe(false);
  });
});
