// The test file that `ng new` creates (app.spec.ts), with the router added.
// In your own app, import `routes` from './app.routes' and use `App` instead of `RoutingBasicShell`.
// #docregion setup
import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {basicRoutes} from './basic.routes';
import {RoutingBasicShell} from './basic-shell';

describe('RoutingBasicShell, tested like a new app', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingBasicShell],
      providers: [provideRouter(basicRoutes)],
    }).compileComponents();
  });
  // #enddocregion setup

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RoutingBasicShell);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
