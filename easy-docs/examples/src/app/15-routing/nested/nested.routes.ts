import {Routes} from '@angular/router';
import {
  RoutingHelpPanel,
  RoutingProfileSettings,
  RoutingSecuritySettings,
  RoutingSettings,
} from './settings';

// #docregion routes
export const nestedRoutes: Routes = [
  {
    path: 'settings',
    component: RoutingSettings,
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: RoutingProfileSettings},
      {path: 'security', component: RoutingSecuritySettings},
    ],
  },
  {path: 'help', component: RoutingHelpPanel, outlet: 'side'},
];
// #enddocregion routes
