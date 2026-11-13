import {Routes} from '@angular/router';
import {RoutingAbout, RoutingHome} from './pages';

export const basicRoutes: Routes = [
  {path: '', component: RoutingHome, title: 'Home'},
  {path: 'about', component: RoutingAbout, title: 'About us'},
];
