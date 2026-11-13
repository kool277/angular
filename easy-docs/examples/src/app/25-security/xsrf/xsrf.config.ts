import {provideHttpClient, withXsrfConfiguration} from '@angular/common/http';
import {ApplicationConfig} from '@angular/core';

export const customXsrfConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'MUSEUM-XSRF',
        headerName: 'X-Museum-Xsrf',
      }),
    ),
  ],
};
