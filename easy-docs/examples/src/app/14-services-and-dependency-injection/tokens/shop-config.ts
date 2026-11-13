import {ApplicationConfig} from '@angular/core';
import {API_URL, SHOP_SETTINGS} from './tokens';

export const shopConfig: ApplicationConfig = {
  providers: [
    {provide: API_URL, useValue: 'https://api.example.com'},
    {provide: SHOP_SETTINGS, useValue: {currency: 'EUR', pageSize: 20}},
  ],
};
