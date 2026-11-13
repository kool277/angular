import {inject} from '@angular/core';
import {CanActivateFn, CanDeactivateFn, CanMatchFn, Router} from '@angular/router';
import {RoutingAuth} from './auth';

// #docregion can-activate
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(RoutingAuth);
  const router = inject(Router);
  if (auth.loggedIn()) {
    return true;
  }
  return router.createUrlTree(['/login'], {queryParams: {returnUrl: state.url}});
};
// #enddocregion can-activate

// #docregion can-deactivate
export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (!component.hasUnsavedChanges()) {
    return true;
  }
  return confirm('You have unsaved changes. Leave anyway?');
};
// #enddocregion can-deactivate

// #docregion can-match
export const adminGuard: CanMatchFn = () => inject(RoutingAuth).isAdmin();
// #enddocregion can-match
