import {PLATFORM_ID} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {renderOnServer} from '../hydration/render-hydrated';
import {SsrLastVisit} from './last-visit';
import {SsrVisitStorage} from './visit-storage';

describe('SsrLastVisit', () => {
  beforeEach(() => localStorage.setItem('lastVisit', '2026-01-31'));
  afterEach(() => localStorage.clear());

  it('reads localStorage after rendering in the browser', async () => {
    const fixture = TestBed.createComponent(SsrLastVisit);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toBe('Welcome back! Your last visit: 2026-01-31');
  });

  it('renders on the server without touching localStorage', async () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem');
    const html = await renderOnServer(SsrLastVisit, 'app-ssr-last-visit');
    expect(html).toContain('<p>Welcome!</p>');
    expect(getItem).not.toHaveBeenCalled();
    getItem.mockRestore();
  });
});

describe('SsrVisitStorage', () => {
  afterEach(() => localStorage.clear());

  it('uses localStorage in the browser', () => {
    localStorage.setItem('lastVisit', '2026-02-01');
    expect(TestBed.inject(SsrVisitStorage).read()).toBe('2026-02-01');
  });

  it('returns null on the server', () => {
    localStorage.setItem('lastVisit', '2026-02-01');
    TestBed.configureTestingModule({providers: [{provide: PLATFORM_ID, useValue: 'server'}]});
    expect(TestBed.inject(SsrVisitStorage).read()).toBeNull();
  });
});
