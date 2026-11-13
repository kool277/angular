import {TestBed} from '@angular/core/testing';
import {TplAddressList} from './address-list';

describe('TplAddressList', () => {
  it('renders the children of ng-container without an extra element', async () => {
    const fixture = TestBed.createComponent(TplAddressList);
    await fixture.whenStable();

    const list = (fixture.nativeElement as HTMLElement).querySelector('ul')!;
    const tags = Array.from(list.children, (child) => child.tagName);
    expect(tags).toEqual(['LI', 'LI']);
  });

  it('renders the template fragment once per outlet, with its own context', async () => {
    const fixture = TestBed.createComponent(TplAddressList);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    const addresses = Array.from(page.querySelectorAll('.address'), (p) => p.textContent);
    expect(addresses).toEqual([
      'Amir Temur 1, Tashkent (Tasty Ltd.)',
      'Lyabi-Hauz 5, Bukhara (Tasty Ltd.)',
    ]);
  });
});
