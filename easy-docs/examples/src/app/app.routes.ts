import {Routes} from '@angular/router';
import {DemoIndex} from './demo-index';
import {demoRoutes} from './demos';

export const routes: Routes = [
  {path: '', component: DemoIndex, title: 'Easy Angular examples'},
  ...demoRoutes,
  {path: '**', redirectTo: ''},
];
