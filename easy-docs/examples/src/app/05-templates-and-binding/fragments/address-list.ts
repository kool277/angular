import {NgTemplateOutlet} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-address-list',
  imports: [NgTemplateOutlet],
  template: `
    <ul>
      <ng-container>
        <li>Head office</li>
        <li>Warehouse</li>
      </ng-container>
    </ul>

    <ng-template #addressCard let-city="city" let-street="street">
      <p class="address">{{ street }}, {{ city }} ({{ company }})</p>
    </ng-template>

    <ng-container
      [ngTemplateOutlet]="addressCard"
      [ngTemplateOutletContext]="{city: 'Tashkent', street: 'Amir Temur 1'}"
    />
    <ng-container
      [ngTemplateOutlet]="addressCard"
      [ngTemplateOutletContext]="{city: 'Bukhara', street: 'Lyabi-Hauz 5'}"
    />
  `,
})
export class TplAddressList {
  company = 'Tasty Ltd.';
}
