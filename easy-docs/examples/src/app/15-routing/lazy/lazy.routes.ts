import {Routes} from '@angular/router';

export const lazyRoutes: Routes = [
  {
    path: 'report',
    loadComponent: () => import('./report-page'),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then((m) => m.adminRoutes),
  },
];
