import {TestBed} from '@angular/core/testing';
import {DiModifiersDemo} from './modifiers';

describe('resolution modifiers', () => {
  async function render() {
    const fixture = TestBed.createComponent(DiModifiersDemo);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('changes where inject() looks', async () => {
    const page = await render();
    const lines = Array.from(page.querySelectorAll('app-di-theme-inspector p')).map(
      (p) => p.textContent,
    );
    expect(lines).toEqual([
      'default: contrast',
      'self: contrast',
      'skipSelf: dark',
      'optional: not provided',
    ]);
  });

  it('host stops the search at the component whose template uses the directive', async () => {
    const page = await render();
    expect(page.querySelector('app-di-plain-card div')?.getAttribute('data-theme')).toBe('none');
    expect(page.querySelector('app-di-themed-card div')?.getAttribute('data-theme')).toBe('card');
  });
});
