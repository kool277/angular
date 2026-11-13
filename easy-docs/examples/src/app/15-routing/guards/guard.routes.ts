import {Routes} from '@angular/router';
import {adminGuard, authGuard, unsavedChangesGuard} from './guards';
import {
  RoutingAccountPage,
  RoutingAdminDashboard,
  RoutingLoginPage,
  RoutingNotesPage,
  RoutingUserDashboard,
} from './pages';

export const guardRoutes: Routes = [
  {path: 'login', component: RoutingLoginPage},
  // #docregion routes
  {path: 'account', component: RoutingAccountPage, canActivate: [authGuard]},
  {path: 'notes', component: RoutingNotesPage, canDeactivate: [unsavedChangesGuard]},
  {path: 'dashboard', component: RoutingAdminDashboard, canMatch: [adminGuard]},
  {path: 'dashboard', component: RoutingUserDashboard},
  // #enddocregion routes
];
