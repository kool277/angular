import {Component} from '@angular/core';

@Component({
  selector: 'app-contact-card',
  host: {class: 'card'},
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class CompContactCard {
  name = 'Bekzod Usmonov';
  phone = '+998 90 123 45 67';
}
