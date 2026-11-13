import {TestBed} from '@angular/core/testing';
import {DiThemeDemo} from './theme-demo';

describe('hierarchical injectors', () => {
  it('uses the closest provider, or the token factory at the root', async () => {
    const fixture = TestBed.createComponent(DiThemeDemo);
    await fixture.whenStable();
    const labels = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('app-di-theme-label'),
    ).map((label) => label.textContent);
    // Order in the page: outside, own template of the section, projected content.
    expect(labels).toEqual(['light', 'dark', 'dark']);
  });
});
