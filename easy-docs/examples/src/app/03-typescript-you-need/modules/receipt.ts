// #docregion imports
import {TAX_RATE, withTax} from './prices';
// #enddocregion imports

export function receiptLine(item: string, price: number): string {
  return `${item}: ${withTax(price)} (tax ${TAX_RATE * 100}%)`;
}
