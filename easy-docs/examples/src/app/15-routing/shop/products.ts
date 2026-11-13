export interface Product {
  id: string;
  name: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  {id: 'green-tea', name: 'Green tea', price: 4},
  {id: 'black-tea', name: 'Black tea', price: 3},
  {id: 'honey', name: 'Honey', price: 7},
];
