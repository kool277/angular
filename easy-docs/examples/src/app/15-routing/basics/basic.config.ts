import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {basicRoutes} from './basic.routes';

export const basicConfig: ApplicationConfig = {
  providers: [provideRouter(basicRoutes)],
};
