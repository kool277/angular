import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';
import {authInterceptor} from './auth-interceptor';
import {logInterceptor} from './request-log';

export const httpAppConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([authInterceptor, logInterceptor]))],
};
