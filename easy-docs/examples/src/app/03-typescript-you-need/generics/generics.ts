// #docregion arrays
export const names: Array<string> = ['Amina', 'Bekzod'];
export const prices: number[] = [3, 1.5];
// #enddocregion arrays

// #docregion function
export function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}
// #enddocregion function

// #docregion signal
import {signal} from '@angular/core';

export const count = signal<number>(0);
export const selectedName = signal<string | null>(null);
// #enddocregion signal
