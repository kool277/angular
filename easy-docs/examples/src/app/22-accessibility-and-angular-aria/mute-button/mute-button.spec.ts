import {TestBed} from '@angular/core/testing';
import {A11yPlayerControls} from './mute-button';

describe('A11yPlayerControls', () => {
  it('tells screen readers whether the sound is muted', async () => {
    const fixture = TestBed.createComponent(A11yPlayerControls);
    await fixture.whenStable();
    const mute: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(mute.getAttribute('aria-pressed')).toBe('false');

    mute.click();
    await fixture.whenStable();
    expect(mute.getAttribute('aria-pressed')).toBe('true');
  });

  it('gives the icon button a name', async () => {
    const fixture = TestBed.createComponent(A11yPlayerControls);
    await fixture.whenStable();
    const next: HTMLButtonElement = fixture.nativeElement.querySelectorAll('button')[1];
    expect(next.getAttribute('aria-label')).toBe('Next song');
  });
});
