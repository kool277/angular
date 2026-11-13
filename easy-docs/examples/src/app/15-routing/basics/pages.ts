import {Component} from '@angular/core';

@Component({
  template: `
    <h2>Home</h2>
    <p>Welcome to the tea shop.</p>
  `,
})
export class RoutingHome {}

@Component({
  template: `
    <h2>About</h2>
    <p>We sell tea from Uzbekistan.</p>
  `,
})
export class RoutingAbout {}
