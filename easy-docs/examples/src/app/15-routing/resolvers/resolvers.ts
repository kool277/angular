import {inject} from '@angular/core';
import {RedirectCommand, ResolveFn, Router} from '@angular/router';
import {Product} from '../shop/products';
import {RoutingProductStore} from './product-store';

// #docregion product
export const productResolver: ResolveFn<Product> = async (route) => {
  const store = inject(RoutingProductStore);
  const router = inject(Router);
  const product = await store.getProduct(route.paramMap.get('id') ?? '');
  return product ?? new RedirectCommand(router.parseUrl('/not-found'));
};
// #enddocregion product

// #docregion title
export const productTitleResolver: ResolveFn<string> = (route) =>
  `Product ${route.paramMap.get('id')}`;
// #enddocregion title
