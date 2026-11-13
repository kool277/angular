import {TestBed} from '@angular/core/testing';
import {IntroGreetingCard} from './greeting-card';

describe('IntroGreetingCard', () => {
  it('shows a heading with a name and a paragraph', async () => {
    const fixture = TestBed.createComponent(IntroGreetingCard);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toBe('Hello, Amina!');
    expect(page.querySelector('p')?.textContent).toBe('I am learning Angular.');
  });
});
