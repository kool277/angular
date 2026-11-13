import {TestBed} from '@angular/core/testing';
import {CompRecipePage} from './recipe-page';

describe('CompRecipePage', () => {
  it('creates one recipe card for each matching element', async () => {
    const fixture = TestBed.createComponent(CompRecipePage);
    await fixture.whenStable();

    const hosts = (fixture.nativeElement as HTMLElement).querySelectorAll('app-recipe-card');
    expect(hosts.length).toBe(2);
  });

  it('renders each card inside its host element', async () => {
    const fixture = TestBed.createComponent(CompRecipePage);
    await fixture.whenStable();

    const firstHost = (fixture.nativeElement as HTMLElement).querySelector('app-recipe-card')!;
    expect(firstHost.querySelector('article h2')?.textContent).toBe('Plov');
  });
});
