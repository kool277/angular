import {Routes} from '@angular/router';
import {RoutingResolvedProduct, RoutingResolverNotFound} from './pages';
import {productResolver, productTitleResolver} from './resolvers';

// #docregion routes
export const resolverRoutes: Routes = [
  {
    path: 'products/:id',
    component: RoutingResolvedProduct,
    resolve: {product: productResolver},
    title: productTitleResolver,
  },
  {path: 'not-found', component: RoutingResolverNotFound},
];
// #enddocregion routes
