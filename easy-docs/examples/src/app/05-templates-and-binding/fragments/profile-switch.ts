import {NgComponentOutlet} from '@angular/common';
import {Component, Type} from '@angular/core';
import {TplAdminView, TplBasicView} from './profile-views';

@Component({
  selector: 'app-profile-switch',
  imports: [NgComponentOutlet],
  template: `
    <button type="button" (click)="switchView()">Switch view</button>
    <ng-container [ngComponentOutlet]="currentView" />
  `,
})
export class TplProfileSwitch {
  currentView: Type<unknown> = TplBasicView;

  switchView(): void {
    this.currentView = this.currentView === TplBasicView ? TplAdminView : TplBasicView;
  }
}
