import {TestBed} from '@angular/core/testing';
import {StylingNoticeDemo} from './notice';

describe('StylingNotice', () => {
  it('styles only the elements of its own template', async () => {
    const fixture = TestBed.createComponent(StylingNoticeDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const [inside, outside] = Array.from(page.querySelectorAll('p'));
    const host = page.querySelector('app-notice')!;

    const darkred = 'rgb(139, 0, 0)';
    expect(getComputedStyle(inside).color).toBe(darkred);
    expect(getComputedStyle(outside).color).not.toBe(darkred);
    // :host styles the <app-notice> element itself.
    expect(getComputedStyle(host).display).toBe('block');
  });
});
