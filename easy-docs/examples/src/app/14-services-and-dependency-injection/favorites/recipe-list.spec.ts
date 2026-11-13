import {TestBed} from '@angular/core/testing';
import {DiRecipeList} from './recipe-list';
import {STORAGE} from './storage';

describe('DiRecipeList with DiFavoritesStore', () => {
  let saved: Map<string, string>;

  beforeEach(() => {
    saved = new Map([['favorite-recipes', '[2]']]);
    const fakeStorage = {
      getItem: (key: string) => saved.get(key) ?? null,
      setItem: (key: string, value: string) => saved.set(key, value),
    };
    TestBed.configureTestingModule({
      providers: [{provide: STORAGE, useValue: fakeStorage}],
    });
  });

  it('starts with the favorites that were saved before', async () => {
    const fixture = TestBed.createComponent(DiRecipeList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('span')?.textContent).toBe('♥ 1');
    const hearts = Array.from(page.querySelectorAll('li button')).map((b) => b.textContent?.trim());
    expect(hearts).toEqual(['♡', '♥', '♡']);
  });

  it('saves a new favorite and updates the counter', async () => {
    const fixture = TestBed.createComponent(DiRecipeList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector<HTMLButtonElement>('li button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('span')?.textContent).toBe('♥ 2');
    expect(saved.get('favorite-recipes')).toBe('[2,1]');
  });
});
