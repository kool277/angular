import {Component} from '@angular/core';
import {CompContactCard} from '../contact-card/contact-card';

@Component({
  selector: 'app-contacts-page',
  imports: [CompContactCard],
  template: `
    <h2>Contacts</h2>
    <app-contact-card />
    <app-contact-card />
  `,
})
export class CompContactsPage {}
