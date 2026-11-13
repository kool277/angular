import {TestBed} from '@angular/core/testing';
import {DirSpoilerDemo} from './spoiler';

describe('DirSpoiler', () => {
  it('blurs the text until the user clicks it', async () => {
    const fixture = TestBed.createComponent(DirSpoilerDemo);
    await fixture.whenStable();
    const text = (fixture.nativeElement as HTMLElement).querySelector('p')!;
    expect(text.style.filter).toBe('blur(4px)');
    expect(text.title).toBe('Click to show');

    text.click();
    await fixture.whenStable();
    expect(text.style.filter).toBe('');
    expect(text.hasAttribute('title')).toBe(false);
  });
});
