import {Component, isDevMode} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-api-banner',
  template: `
    <p class="api">Data comes from {{ apiUrl }}</p>
    @if (devMode) {
      <p class="dev">Development mode: extra checks are on.</p>
    }
  `,
})
export class BuildApiBanner {
  apiUrl = environment.apiUrl;
  devMode = isDevMode();
}
