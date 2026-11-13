import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

// #docregion settings
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h2>Settings</h2>
    <nav>
      <a routerLink="profile" routerLinkActive="active">Profile</a>
      <a routerLink="security" routerLinkActive="active">Security</a>
    </nav>
    <section>
      <router-outlet />
    </section>
  `,
})
export class RoutingSettings {}
// #enddocregion settings

@Component({template: `<p>Your name and photo.</p>`})
export class RoutingProfileSettings {}

@Component({template: `<p>Your password.</p>`})
export class RoutingSecuritySettings {}

@Component({template: `<p>Tip: you can change your settings at any time.</p>`})
export class RoutingHelpPanel {}
