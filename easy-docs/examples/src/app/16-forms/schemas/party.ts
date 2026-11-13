import {Component, signal} from '@angular/core';
import {
  apply,
  applyEach,
  applyWhen,
  form,
  FormField,
  required,
  schema,
} from '@angular/forms/signals';

// #docregion address-schema
export interface Address {
  street: string;
  city: string;
}

export const addressSchema = schema<Address>((path) => {
  required(path.street, {message: 'Enter the street.'});
  required(path.city, {message: 'Enter the city.'});
});
// #enddocregion address-schema

interface Guest {
  name: string;
}

@Component({
  selector: 'app-forms-party',
  imports: [FormField],
  template: `
    <h3>Billing address</h3>
    <input placeholder="Street" [formField]="partyForm.billing.street" />
    <input placeholder="City" [formField]="partyForm.billing.city" />

    <label>
      <input type="checkbox" [formField]="partyForm.sameAddress" /> Deliver to the same address
    </label>
    @if (!partyModel().sameAddress) {
      <h3>Delivery address</h3>
      <input placeholder="Street" [formField]="partyForm.delivery.street" />
      <input placeholder="City" [formField]="partyForm.delivery.city" />
    }

    <!-- #docregion guests -->
    <h3>Guests ({{ partyForm.guests.length }})</h3>
    @for (guest of partyForm.guests; track $index) {
      <div class="guest">
        <input placeholder="Name" [formField]="guest.name" />
        <button type="button" (click)="removeGuest($index)">Remove</button>
      </div>
    }
    <button type="button" class="add" (click)="addGuest()">Add a guest</button>
    <!-- #enddocregion guests -->
  `,
})
export class FormsParty {
  readonly partyModel = signal({
    billing: {street: '', city: ''} as Address,
    sameAddress: true,
    delivery: {street: '', city: ''} as Address,
    guests: [{name: ''}] as Guest[],
  });

  // #docregion form
  readonly partyForm = form(this.partyModel, (path) => {
    apply(path.billing, addressSchema);
    applyWhen(path.delivery, ({valueOf}) => !valueOf(path.sameAddress), addressSchema);
    applyEach(path.guests, (guest) => {
      required(guest.name, {message: 'Enter a name.'});
    });
  });
  // #enddocregion form

  // #docregion array-methods
  addGuest() {
    this.partyModel.update((m) => ({...m, guests: [...m.guests, {name: ''}]}));
  }

  removeGuest(index: number) {
    this.partyModel.update((m) => ({...m, guests: m.guests.filter((_, i) => i !== index)}));
  }
  // #enddocregion array-methods
}
