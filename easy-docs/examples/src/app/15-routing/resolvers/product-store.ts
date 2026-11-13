import {Injectable} from '@angular/core';
import {Product, PRODUCTS} from '../shop/products';

/** A fake data service. It waits a moment, like a real server would. */
@Injectable({providedIn: 'root'})
export class RoutingProductStore {
  async getProduct(id: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 20));
    return PRODUCTS.find((p) => p.id === id);
  }
}
