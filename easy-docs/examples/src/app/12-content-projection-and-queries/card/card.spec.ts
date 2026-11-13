import {TestBed} from '@angular/core/testing';
import {ProjCardDemo} from './card';

describe('ProjCard', () => {
  it('renders the content from the parent inside its own div', async () => {
    const fixture = TestBed.createComponent(ProjCardDemo);
    await fixture.whenStable();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('app-proj-card .card');
    expect(cards.length).toBe(2);
    expect(cards[0].querySelector('h3')?.textContent).toBe('Plov');
    expect(cards[1].textContent?.trim()).toBe('Any content works: 6 guests are coming.');
  });
});
