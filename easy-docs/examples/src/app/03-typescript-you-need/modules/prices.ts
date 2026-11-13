// #docregion exports
export const TAX_RATE = 0.12;

export function withTax(price: number): number {
  return Math.round(price * (1 + TAX_RATE) * 100) / 100;
}

function secretDiscount(price: number): number {
  return price * 0.9; // not exported: other files cannot use it
}

export function memberPrice(price: number): number {
  return withTax(secretDiscount(price));
}
// #enddocregion exports
