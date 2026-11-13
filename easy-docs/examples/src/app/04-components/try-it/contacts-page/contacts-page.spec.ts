import {TestBed} from '@angular/core/testing';
import {CompContactsPage} from './contacts-page';

describe('CompContactsPage', () => {
  it('shows two contact cards with a class on each host element', async () => {
    const fixture = TestBed.createComponent(CompContactsPage);
    await fixture.whenStable();

    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('app-contact-card');
    expect(cards.length).toBe(2);
    expect(cards[0].classList).toContain('card');
    expect(cards[0].querySelector('h3')?.textContent).toBe('Bekzod Usmonov');
    expect(cards[1].querySelector('p')?.textContent).toBe('📞 +998 90 123 45 67');
  });
});
