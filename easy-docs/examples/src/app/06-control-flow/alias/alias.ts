import {Component} from '@angular/core';

@Component({
  selector: 'app-alias',
  template: `
    @if (user.address.city; as city) {
      <p>{{ user.name }} lives in {{ city }}.</p>
    }
  `,
})
export class ControlFlowAlias {
  user = {name: 'Aziza', address: {city: 'Samarkand'}};
}
