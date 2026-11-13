import {TestBed} from '@angular/core/testing';
import {CompRecipeHome} from './recipe-home';

describe('CompRecipeHome', () => {
  it('builds the page from smaller components', async () => {
    const fixture = TestBed.createComponent(CompRecipeHome);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    const children = Array.from(host.children, (child) => child.tagName.toLowerCase());
    expect(children).toEqual(['app-site-header', 'app-site-nav', 'main', 'app-site-footer']);
    expect(host.querySelectorAll('main app-recipe-card').length).toBe(2);
  });

  it('gives the landmark components their roles', async () => {
    const fixture = TestBed.createComponent(CompRecipeHome);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('[role=banner]')?.textContent).toContain('Tasty');
    expect(host.querySelectorAll('[role=navigation] a').length).toBe(3);
    expect(host.querySelector('[role=contentinfo]')?.textContent).toBe('© 2026 Tasty');
  });
});
