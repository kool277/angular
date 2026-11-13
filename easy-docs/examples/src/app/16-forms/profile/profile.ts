import {Component, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';

// #docregion model
export interface Profile {
  name: string;
  age: number;
  newsletter: boolean;
  address: {
    city: string;
    street: string;
  };
}

const emptyProfile: Profile = {
  name: '',
  age: 0,
  newsletter: false,
  address: {city: '', street: ''},
};
// #enddocregion model

@Component({
  selector: 'app-forms-profile',
  imports: [FormField],
  template: `
    <!-- #docregion template -->
    <label>Name <input [formField]="profileForm.name" /></label>
    <label>Age <input type="number" [formField]="profileForm.age" /></label>
    <label><input type="checkbox" [formField]="profileForm.newsletter" /> Send me news</label>
    <label>
      City
      <select [formField]="profileForm.address.city">
        <option value="">Choose…</option>
        <option value="Tashkent">Tashkent</option>
        <option value="Samarkand">Samarkand</option>
      </select>
    </label>
    <label>Street <input [formField]="profileForm.address.street" /></label>
    <!-- #enddocregion template -->

    <!-- #docregion state -->
    <p class="state">
      Touched: {{ profileForm().touched() }}, changed: {{ profileForm().dirty() }}, city:
      {{ profileForm.address.city().value() || 'none' }}
    </p>
    <!-- #enddocregion state -->
    <button type="button" (click)="loadExample()">Load example</button>
    <button type="button" (click)="clear()">Clear</button>
  `,
})
export class FormsProfile {
  // #docregion form
  readonly profileModel = signal<Profile>(emptyProfile);
  readonly profileForm = form(this.profileModel);
  // #enddocregion form

  // #docregion update
  loadExample() {
    this.profileModel.set({
      name: 'Aziza',
      age: 28,
      newsletter: true,
      address: {city: 'Samarkand', street: 'Registan 1'},
    });
  }

  clear() {
    this.profileForm().reset(emptyProfile);
  }
  // #enddocregion update
}
