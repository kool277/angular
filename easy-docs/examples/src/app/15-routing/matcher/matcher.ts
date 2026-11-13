import {Component, input} from '@angular/core';
import {Routes, UrlMatchResult, UrlSegment} from '@angular/router';
import {RoutingNotFound} from '../redirects/pages';

// #docregion matcher
/** Matches URLs like `/@aziza` and saves `aziza` as the parameter `username`. */
export function atUsername(segments: UrlSegment[]): UrlMatchResult | null {
  if (segments.length === 1 && /^@\w+$/.test(segments[0].path)) {
    const username = segments[0].path.slice(1);
    return {consumed: segments, posParams: {username: new UrlSegment(username, {})}};
  }
  return null;
}
// #enddocregion matcher

@Component({template: `<h2>Profile of {{ username() }}</h2>`})
export class RoutingUserProfile {
  readonly username = input.required<string>();
}

// #docregion routes
export const matcherRoutes: Routes = [
  {matcher: atUsername, component: RoutingUserProfile},
  {path: '**', component: RoutingNotFound},
];
// #enddocregion routes
