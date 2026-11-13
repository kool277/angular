import {Component} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  template: `<p>🔧 Admin tools: users, reports, settings</p>`,
})
export class TplAdminView {}

@Component({
  selector: 'app-basic-view',
  template: `<p>👋 Your profile and your orders</p>`,
})
export class TplBasicView {}
