import {TestBed} from '@angular/core/testing';
import {FormsRegistration} from './registration';

describe('FormsRegistration', () => {
  async function setup() {
    const fixture = TestBed.createComponent(FormsRegistration);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const inputs = page.querySelectorAll('input');
    const field = (i: number) => ({
      input: inputs[i],
      async type(text: string) {
        inputs[i].value = text;
        inputs[i].dispatchEvent(new Event('input'));
        inputs[i].dispatchEvent(new Event('blur'));
        await fixture.whenStable();
      },
    });
    return {fixture, page, field};
  }

  const errorsOf = (page: HTMLElement, n: number) =>
    [...page.querySelectorAll('app-forms-field-errors')[n].querySelectorAll('.error')].map(
      (p) => p.textContent,
    );

  it('shows no errors before the user touches a field', async () => {
    const {page} = await setup();
    expect(page.querySelectorAll('.error').length).toBe(0);
    expect(page.querySelector('button')!.disabled).toBe(true);
  });

  it('shows the messages of the failing rules after the field is touched', async () => {
    const {page, field} = await setup();
    await field(0).type('a b');
    expect(errorsOf(page, 0)).toEqual(['Spaces are not allowed.']);
    await field(0).type('ab');
    expect(errorsOf(page, 0)).toEqual(['Use at least 3 characters.']);
    await field(1).type('aziza');
    expect(errorsOf(page, 1)).toEqual(['This is not an email address.']);
    await field(2).type('12');
    expect(errorsOf(page, 2)).toEqual(['You must be 16 or older.']);
  });

  it('requires the phone only when "Call me" is checked', async () => {
    const {fixture, page, field} = await setup();
    const form = fixture.componentInstance.regForm;
    expect(form.phone().valid()).toBe(true);

    field(3).input.click();
    await fixture.whenStable();
    expect(
      form
        .phone()
        .errors()
        .map((e) => e.kind),
    ).toEqual(['required']);

    await field(4).type('+998 90 123');
    expect(form.phone().valid()).toBe(true);
    await field(4).type('call me');
    expect(errorsOf(page, 3)).toEqual(['Use only digits, spaces and "+".']);
  });

  it('enables the button when every field is valid', async () => {
    const {page, field} = await setup();
    await field(0).type('aziza');
    await field(1).type('aziza@example.uz');
    expect(page.querySelector('button')!.disabled).toBe(false);
  });
});
