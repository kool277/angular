import {Component} from '@angular/core';
import {Routes} from '@angular/router';

@Component({template: `<h2>Start</h2>`})
export class RoutingEventStart {}

@Component({template: `<h2>Slow page</h2>`})
export class RoutingSlowPage {}

/** A resolver that waits 50 ms, so that the navigation takes a moment. */
const wait = () => new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 50));

export const eventRoutes: Routes = [
  {path: '', component: RoutingEventStart},
  {path: 'slow', component: RoutingSlowPage, resolve: {ready: wait}},
  {path: 'old-slow', redirectTo: 'slow'},
];
