import {Component} from '@angular/core';
import {ModulesBadgeModule} from './badge.module';

@Component({
  selector: 'app-badge-page',
  imports: [ModulesBadgeModule],
  template: `<app-old-badge label="new" />`,
})
export class ModulesBadgePage {}
