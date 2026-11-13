import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {shopRoutes} from './shop.routes';

export const shopConfig: ApplicationConfig = {
  providers: [provideRouter(shopRoutes, withComponentInputBinding())],
};
