import {Component, input} from '@angular/core';

@Component({template: `<h2>Home</h2>`})
export class RoutingRedirectHome {}

@Component({template: `<h2>Blog</h2>`})
export class RoutingBlog {}

@Component({template: `<h2>Menu: {{ meal() }}</h2>`})
export class RoutingMenu {
  readonly meal = input.required<string>();
}

@Component({
  template: `
    <h2>Page not found</h2>
    <p>Check the address and try again.</p>
  `,
})
export class RoutingNotFound {}
