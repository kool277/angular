// #docregion setup
import {TestBed} from '@angular/core/testing';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {basicConfig} from './basic.config';
import {RoutingBasicShell} from './basic-shell';

describe('RoutingBasicShell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: basicConfig.providers});
  });
  // #enddocregion setup

  // #docregion click-link
  it('shows the page of the link you click', async () => {
    const fixture = TestBed.createComponent(RoutingBasicShell);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('main')?.textContent).toContain('Welcome to the tea shop.');

    const aboutLink = page.querySelectorAll('a')[1];
    aboutLink.click();
    await fixture.whenStable();

    expect(router.url).toBe('/about');
    expect(page.querySelector('main')?.textContent).toContain('We sell tea from Uzbekistan.');
    expect(aboutLink.classList).toContain('active');
    expect(aboutLink.getAttribute('aria-current')).toBe('page');
    expect(TestBed.inject(Title).getTitle()).toBe('About us');
  });
  // #enddocregion click-link

  it('gives every link a real href', async () => {
    const fixture = TestBed.createComponent(RoutingBasicShell);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('a');
    expect(links[0].getAttribute('href')).toBe('/');
    expect(links[1].getAttribute('href')).toBe('/about');
  });

  it('marks Home as active only on the exact URL', async () => {
    const fixture = TestBed.createComponent(RoutingBasicShell);
    await TestBed.inject(Router).navigateByUrl('/about');
    await fixture.whenStable();
    const homeLink = (fixture.nativeElement as HTMLElement).querySelectorAll('a')[0];
    expect(homeLink.classList).not.toContain('active');
  });
});
