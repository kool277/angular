import {Routes} from '@angular/router';
import {RoutingHello} from './hello';

export const helloRoutes: Routes = [
  {path: 'hello/:name', component: RoutingHello},
  {path: '**', redirectTo: 'hello/world'},
];
