import {TestBed} from '@angular/core/testing';
import {TplToggleChip} from './toggle-chip';

describe('TplToggleChip', () => {
  it('binds attributes and classes on its host element', async () => {
    const fixture = TestBed.createComponent(TplToggleChip);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    expect(host.getAttribute('role')).toBe('switch');
    expect(host.getAttribute('aria-checked')).toBe('false');
    expect(host.classList).not.toContain('on');
  });

  it('listens to clicks and the Enter key on its host element', async () => {
    const fixture = TestBed.createComponent(TplToggleChip);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    host.click();
    await fixture.whenStable();
    expect(host.getAttribute('aria-checked')).toBe('true');
    expect(host.classList).toContain('on');
    expect(host.textContent).toBe('Notifications: on');

    host.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
    await fixture.whenStable();
    expect(host.getAttribute('aria-checked')).toBe('false');
  });
});
