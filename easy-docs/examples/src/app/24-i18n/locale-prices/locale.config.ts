import {registerLocaleData} from '@angular/common';
import localeUz from '@angular/common/locales/uz';
import {ApplicationConfig, LOCALE_ID} from '@angular/core';

registerLocaleData(localeUz);

export const uzbekLocaleConfig: ApplicationConfig = {
  providers: [{provide: LOCALE_ID, useValue: 'uz'}],
};
