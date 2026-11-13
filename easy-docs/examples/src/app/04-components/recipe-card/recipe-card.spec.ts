import {TestBed} from '@angular/core/testing';
import {CompRecipeCard} from './recipe-card';

describe('CompRecipeCard', () => {
  it('uses the template from recipe-card.html', async () => {
    const fixture = TestBed.createComponent(CompRecipeCard);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h2')?.textContent).toBe('Plov');
    expect(host.querySelector('p')?.textContent).toBe('Ready in 90 minutes.');
  });

  it('uses the styles from recipe-card.css', async () => {
    const fixture = TestBed.createComponent(CompRecipeCard);
    await fixture.whenStable();

    const heading = (fixture.nativeElement as HTMLElement).querySelector('h2')!;
    expect(getComputedStyle(heading).color).toBe('rgb(0, 100, 0)'); // darkgreen;
  });
});
