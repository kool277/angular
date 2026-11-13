import {Component, input} from '@angular/core';
import {RouterLink, Routes} from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `<a routerLink="/teas/green">Green tea</a>`,
})
export class TestingTeaMenu {}

@Component({
  template: `<h2>Tea: {{ id() }}</h2>`,
})
export class TestingTeaPage {
  readonly id = input.required<string>();
}

export const testingRoutes: Routes = [
  {path: '', component: TestingTeaMenu},
  {path: 'teas/:id', component: TestingTeaPage},
];
