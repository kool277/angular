import {Routes} from '@angular/router';
import {RoutingBlog, RoutingMenu, RoutingNotFound, RoutingRedirectHome} from './pages';

export const redirectRoutes: Routes = [
  // #docregion empty
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // #enddocregion empty
  {path: 'home', component: RoutingRedirectHome},
  // #docregion old-link
  {path: 'articles', redirectTo: '/blog'},
  {path: 'blog', component: RoutingBlog},
  // #enddocregion old-link
  // #docregion function
  {
    path: 'menu',
    pathMatch: 'full',
    redirectTo: ({queryParams}) =>
      queryParams['meal'] === 'dinner' ? '/menu/dinner' : '/menu/lunch',
  },
  {path: 'menu/:meal', component: RoutingMenu},
  // #enddocregion function
  // #docregion wildcard
  {path: '**', component: RoutingNotFound},
  // #enddocregion wildcard
];
