import {TestBed} from '@angular/core/testing';
import {FormsParty} from './party';

describe('FormsParty', () => {
  async function setup() {
    const fixture = TestBed.createComponent(FormsParty);
    await fixture.whenStable();
    return {fixture, form: fixture.componentInstance.partyForm};
  }

  it('applies the same reusable schema to the billing address', async () => {
    const {fixture, form} = await setup();
    expect(form.billing.city().errors()[0].message).toBe('Enter the city.');
    fixture.componentInstance.partyModel.update((m) => ({
      ...m,
      billing: {street: 'Amir Temur 1', city: 'Tashkent'},
      guests: [{name: 'Aziza'}],
    }));
    expect(form().valid()).toBe(true);
  });

  it('checks the delivery address only when it is different', async () => {
    const {fixture, form} = await setup();
    expect(form.delivery().valid()).toBe(true);
    fixture.componentInstance.partyModel.update((m) => ({...m, sameAddress: false}));
    expect(form.delivery.street().errors()[0].message).toBe('Enter the street.');
  });

  it('adds and removes guests, with a rule for each one', async () => {
    const {fixture, form} = await setup();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector<HTMLButtonElement>('button.add')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('.guest').length).toBe(2);
    expect(form.guests.length).toBe(2);
    expect(form.guests[1]!.name().errors()[0].message).toBe('Enter a name.');

    page.querySelectorAll<HTMLButtonElement>('.guest button')[0].click();
    await fixture.whenStable();
    expect(page.querySelectorAll('.guest').length).toBe(1);
    expect(page.querySelector('h3:last-of-type')?.textContent).toBe('Guests (1)');
  });
});
