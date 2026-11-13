import {TestBed} from '@angular/core/testing';
import {StylingProfileCardDemo} from './profile-card';

describe('StylingProfileCard', () => {
  it('styles the host element with :host and :host(.compact)', async () => {
    const fixture = TestBed.createComponent(StylingProfileCardDemo);
    await fixture.whenStable();
    const [normal, compact] = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('app-profile-card'),
    );

    expect(getComputedStyle(normal).display).toBe('flex');
    expect(getComputedStyle(normal).paddingTop).toBe('16px');
    expect(compact.classList).toContain('compact');
    expect(getComputedStyle(compact).paddingTop).toBe('4px');
  });

  it('passes the accent color to the CSS through a custom property', async () => {
    const fixture = TestBed.createComponent(StylingProfileCardDemo);
    await fixture.whenStable();
    const [normal, compact] = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('app-profile-card'),
    );
    expect(normal.style.getPropertyValue('--accent')).toBe('teal');
    expect(compact.style.getPropertyValue('--accent')).toBe('purple');
    expect(compact.querySelector('.job')).toBeNull();
  });
});
