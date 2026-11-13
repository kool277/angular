// #docregion interface
export interface Product {
  id: number;
  name: string;
  price: number;
}
// #enddocregion interface

// #docregion use
export const tea: Product = {id: 1, name: 'Green tea', price: 3};
export const bread: Product = {id: 2, name: 'Bread', price: 1.5};

export function totalPrice(products: Product[]): number {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}
// #enddocregion use

// #docregion type-alias
export type ProductId = number;

export type Point = {
  x: number;
  y: number;
};
// #enddocregion type-alias

// #docregion find
export function findProduct(products: Product[], id: ProductId) {
  return products.find((product) => product.id === id);
}
// #enddocregion find
