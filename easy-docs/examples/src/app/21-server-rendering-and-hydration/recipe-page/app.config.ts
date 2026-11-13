import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';

export const recipeAppConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideClientHydration()],
};
