import {Routes} from '@angular/router';
import {RoutingProductDetail} from './product-detail';
import {RoutingProductList} from './product-list';
import {RoutingProductSnapshot} from './product-snapshot';

// #docregion routes
export const shopRoutes: Routes = [
  {path: 'products', component: RoutingProductList, title: 'Products'},
  {path: 'products/:id', component: RoutingProductDetail, title: 'Product'},
  {path: 'snapshot/:id', component: RoutingProductSnapshot},
];
// #enddocregion routes
