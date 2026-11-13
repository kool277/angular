import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-map-panel',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<city-map city="Samarkand"></city-map>`,
})
export class CompMapPanel {}
