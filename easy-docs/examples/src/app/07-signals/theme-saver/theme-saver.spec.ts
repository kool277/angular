import {TestBed} from '@angular/core/testing';
import {SignalsThemeSaver} from './theme-saver';

describe('SignalsThemeSaver', () => {
  it('runs the effect once at the start and again when a tracked signal changes', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    const fixture = TestBed.createComponent(SignalsThemeSaver);
    await fixture.whenStable();
    expect(localStorage.getItem('theme')).toBe('light');
    expect(log).toHaveBeenCalledTimes(1);

    const [dark, , logOut] = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button'),
    );
    dark.click();
    await fixture.whenStable();
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(log).toHaveBeenLastCalledWith('Saved theme "dark" for Bobur');

    // `userName` is read with untracked(), so changing it does not run the effect.
    logOut.click();
    await fixture.whenStable();
    expect(log).toHaveBeenCalledTimes(2);
    expect((fixture.nativeElement as HTMLElement).querySelector('p')?.textContent).toBe(
      'Hello, Guest. Theme: dark',
    );
    log.mockRestore();
  });
});
