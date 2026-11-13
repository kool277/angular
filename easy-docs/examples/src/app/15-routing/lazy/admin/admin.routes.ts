import {Routes} from '@angular/router';
import {RoutingAdminHome, RoutingAdminUsers} from './admin-pages';

export const adminRoutes: Routes = [
  {path: '', component: RoutingAdminHome},
  {path: 'users', component: RoutingAdminUsers},
];
