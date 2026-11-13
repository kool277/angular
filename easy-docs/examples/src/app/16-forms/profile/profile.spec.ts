import {TestBed} from '@angular/core/testing';
import {FormsProfile} from './profile';

describe('FormsProfile', () => {
  async function setup() {
    const fixture = TestBed.createComponent(FormsProfile);
    await fixture.whenStable();
    return {fixture, page: fixture.nativeElement as HTMLElement};
  }

  it('binds text, number, checkbox and select controls to the model', async () => {
    const {fixture, page} = await setup();
    const [name, age, newsletter] = page.querySelectorAll('input');
    const city = page.querySelector('select')!;

    name.value = 'Timur';
    name.dispatchEvent(new Event('input'));
    age.value = '31';
    age.dispatchEvent(new Event('input'));
    newsletter.click();
    city.value = 'Tashkent';
    city.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(fixture.componentInstance.profileModel()).toEqual({
      name: 'Timur',
      age: 31,
      newsletter: true,
      address: {city: 'Tashkent', street: ''},
    });
  });

  it('tracks touched and dirty for the whole form', async () => {
    const {fixture, page} = await setup();
    const state = page.querySelector('.state')!;
    expect(state.textContent).toContain('Touched: false, changed: false');

    const street = page.querySelectorAll('input')[3];
    street.value = 'Navoi 5';
    street.dispatchEvent(new Event('input'));
    street.dispatchEvent(new Event('blur'));
    await fixture.whenStable();
    expect(state.textContent).toContain('Touched: true, changed: true');
  });

  it('updates the controls when the model is set from code', async () => {
    const {fixture, page} = await setup();
    page.querySelectorAll('button')[0].click();
    await fixture.whenStable();
    expect(page.querySelector('input')!.value).toBe('Aziza');
    expect(page.querySelector('select')!.value).toBe('Samarkand');
    expect(page.querySelector('.state')?.textContent).toContain('city: Samarkand');
  });

  it('reset() clears the value and the touched and dirty state', async () => {
    const {fixture, page} = await setup();
    const name = page.querySelector('input')!;
    name.value = 'Timur';
    name.dispatchEvent(new Event('input'));
    name.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    page.querySelectorAll('button')[1].click();
    await fixture.whenStable();
    expect(name.value).toBe('');
    expect(fixture.componentInstance.profileForm().touched()).toBe(false);
    expect(fixture.componentInstance.profileForm().dirty()).toBe(false);
  });
});
