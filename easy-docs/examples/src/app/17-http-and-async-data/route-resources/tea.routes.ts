import {httpResource} from '@angular/common/http';
import {Routes, nonBlocking} from '@angular/router';
import {Tea} from '../tea';
import {HttpRouteMenuPage, HttpRouteTeaPage} from './pages';

export const teaResourceRoutes: Routes = [
  // #docregion routes
  {
    path: 'teas/:id',
    component: HttpRouteTeaPage,
    resources: (context) => ({
      tea: httpResource<Tea>(() => `/http-demo/teas/${context.params()['id']}.json`),
    }),
  },
  {
    path: 'menu',
    component: HttpRouteMenuPage,
    resources: () => ({
      teas: nonBlocking(httpResource<Tea[]>(() => '/http-demo/teas.json')),
    }),
  },
  // #enddocregion routes
];
