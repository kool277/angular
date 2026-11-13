import {Component} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <p class="name">{{ firstName }} {{ lastName }}</p>
    <p class="total">Total: {{ price * quantity }} UZS</p>
    <p class="initials">Initials: {{ initials() }}</p>
    <p class="nickname">Nickname: {{ nickname }}</p>
    <p class="tags">Tags: {{ tags }}</p>
  `,
})
export class TplInterpolation {
  firstName = 'Amina';
  lastName = 'Karimova';
  price = 12000;
  quantity = 3;
  nickname: string | undefined = undefined;
  tags = ['new', 'popular'];

  initials(): string {
    return this.firstName[0] + this.lastName[0];
  }
}
