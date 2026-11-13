import {Component, inject} from '@angular/core';
import {SHOP_SETTINGS} from './tokens';

@Component({
  selector: 'app-di-settings-view',
  template: `<p>Prices in {{ settings.currency }}, {{ settings.pageSize }} per page</p>`,
})
export class DiSettingsView {
  protected readonly settings = inject(SHOP_SETTINGS);
}
