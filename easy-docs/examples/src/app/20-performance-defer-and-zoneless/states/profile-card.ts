import {Component} from '@angular/core';

@Component({
  selector: 'app-perf-profile-details',
  template: `<p>Aziz has written 12 recipes.</p>`,
})
export class PerfProfileDetails {}

@Component({
  selector: 'app-perf-profile-card',
  imports: [PerfProfileDetails],
  template: `
    <!-- #docregion blocks -->
    @defer (on idle) {
      <app-perf-profile-details />
    } @placeholder (minimum 500ms) {
      <p>Profile</p>
    } @loading (after 100ms; minimum 1s) {
      <p>Loading the profile…</p>
    } @error {
      <p>The profile could not be loaded.</p>
    }
    <!-- #enddocregion blocks -->
  `,
})
export class PerfProfileCard {}
