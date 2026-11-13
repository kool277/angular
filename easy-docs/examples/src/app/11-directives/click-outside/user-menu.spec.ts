import {TestBed} from '@angular/core/testing';
import {DirUserMenu} from './user-menu';

describe('DirUserMenu with DirClickOutside', () => {
  async function openMenu() {
    const fixture = TestBed.createComponent(DirUserMenu);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector<HTMLButtonElement>('.toggle')!.click();
    await fixture.whenStable();
    return {fixture, page};
  }

  it('stays open when the user clicks inside the menu', async () => {
    const {fixture, page} = await openMenu();
    expect(page.querySelectorAll('li').length).toBe(3);
    page.querySelector<HTMLButtonElement>('li button')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('li').length).toBe(3);
  });

  it('closes when the user clicks outside', async () => {
    const {fixture, page} = await openMenu();
    page.querySelector('p')!.click();
    await fixture.whenStable();
    expect(page.querySelector('ul')).toBeNull();
  });
});
