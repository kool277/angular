import {TestBed} from '@angular/core/testing';
import {IntroLikeButton} from './like-button';

describe('IntroLikeButton', () => {
  it('starts with zero likes', async () => {
    const fixture = TestBed.createComponent(IntroLikeButton);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('p')?.textContent).toBe('0 people like this.');
  });

  // #docregion clicks
  it('updates the page after each click', async () => {
    const fixture = TestBed.createComponent(IntroLikeButton);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.querySelector('p')?.textContent).toBe('2 people like this.');
  });
  // #enddocregion clicks
});
