import {InjectionToken} from '@angular/core';

export const THEME = new InjectionToken<string>('THEME', {factory: () => 'light'});
