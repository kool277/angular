import {TestBed} from '@angular/core/testing';
import {CompInfoNote} from './info-note';

describe('CompInfoNote', () => {
  it('adds a class and a role to its host element', async () => {
    const fixture = TestBed.createComponent(CompInfoNote);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList).toContain('note');
    expect(host.getAttribute('role')).toBe('note');
  });

  it('styles the host element with :host', async () => {
    const fixture = TestBed.createComponent(CompInfoNote);
    await fixture.whenStable();

    expect(getComputedStyle(fixture.nativeElement).display).toBe('block');
  });
});
