import {InjectionToken} from '@angular/core';

// #docregion tokens
export const API_URL = new InjectionToken<string>('API_URL');

export interface DiShopSettings {
  currency: string;
  pageSize: number;
}

export const SHOP_SETTINGS = new InjectionToken<DiShopSettings>('SHOP_SETTINGS', {
  factory: () => ({currency: 'UZS', pageSize: 10}),
});
// #enddocregion tokens
