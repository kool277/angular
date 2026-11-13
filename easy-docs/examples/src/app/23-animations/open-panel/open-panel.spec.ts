import {TestBed} from '@angular/core/testing';
import {AnimOpenPanel} from './open-panel';

describe('AnimOpenPanel', () => {
  it('toggles the open class, and the CSS animates the change', async () => {
    const fixture = TestBed.createComponent(AnimOpenPanel);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    const panel = page.querySelector('.panel')!;
    const button = page.querySelector('button')!;
    expect(panel.classList.contains('open')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();
    await fixture.whenStable();
    expect(panel.classList.contains('open')).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});
