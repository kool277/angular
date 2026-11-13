import {TestBed} from '@angular/core/testing';
import {AnimFadeNote} from './fade-note';

describe('AnimFadeNote', () => {
  it('adds the note on the first click and removes it on the second', async () => {
    const fixture = TestBed.createComponent(AnimFadeNote);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    expect(page.querySelector('.note')).toBeNull();

    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('.note')?.textContent).toContain('9:00');

    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('.note')).toBeNull();
  });

  it('leaves no animation class behind in a test', async () => {
    const fixture = TestBed.createComponent(AnimFadeNote);
    fixture.componentInstance.shown.set(true);
    await fixture.whenStable();
    const note = fixture.nativeElement.querySelector('.note') as HTMLElement;
    expect(note.classList.contains('fade-in')).toBe(false);
  });

  it('runs in jsdom, which has no Web Animations API', () => {
    expect(typeof document.documentElement.getAnimations).toBe('undefined');
  });
});
