import {TestBed} from '@angular/core/testing';
import {PipesGuestList} from './guest-list';

describe('PipesGuestList', () => {
  it('a pure pipe runs again only when it gets a new value', async () => {
    const fixture = TestBed.createComponent(PipesGuestList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const text = (id: string) => page.querySelector('#' + id)?.textContent;

    page.querySelector<HTMLButtonElement>('#push')!.click();
    await fixture.whenStable();
    expect(text('pure')).toBe('Pure: Aziz, Malika'); // old text: same array
    expect(text('impure')).toBe('Impure: Aziz, Malika, Laylo');

    page.querySelector<HTMLButtonElement>('#copy')!.click();
    await fixture.whenStable();
    expect(text('pure')).toBe('Pure: Aziz, Malika, Laylo, Kamol');
    expect(text('impure')).toBe('Impure: Aziz, Malika, Laylo, Kamol');
  });
});
