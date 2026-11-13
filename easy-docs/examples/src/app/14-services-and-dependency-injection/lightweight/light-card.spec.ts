import {TestBed} from '@angular/core/testing';
import {DiLightCardDemo} from './light-card';

describe('DiLightCard with a lightweight token', () => {
  it('finds the header through the small abstract class', async () => {
    const fixture = TestBed.createComponent(DiLightCardDemo);
    await fixture.whenStable();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('app-di-light-card');
    expect(cards[0].querySelector('h3')?.textContent).toBe('Plov');
    expect(cards[0].querySelectorAll('h3').length).toBe(1);
    expect(cards[1].querySelector('h3')?.textContent).toBe('Untitled');
  });
});
