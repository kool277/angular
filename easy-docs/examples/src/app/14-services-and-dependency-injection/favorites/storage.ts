import {InjectionToken} from '@angular/core';

export const STORAGE = new InjectionToken<Storage>('STORAGE', {
  factory: () => localStorage,
});
