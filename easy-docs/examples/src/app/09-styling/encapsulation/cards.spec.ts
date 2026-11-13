import {TestBed} from '@angular/core/testing';
import {StylingEncapsulationDemo} from './cards';

describe('View encapsulation', () => {
  async function setup() {
    const fixture = TestBed.createComponent(StylingEncapsulationDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    return {
      page,
      outside: page.querySelector(':scope > p.label')!,
      emulated: page.querySelector('app-emulated-card p')!,
    };
  }

  // #docregion emulated-test
  it('Emulated: adds a unique attribute so the rule matches only its own elements', async () => {
    const {emulated, outside} = await setup();
    const marker = Array.from(emulated.attributes).find((a) => a.name.startsWith('_ngcontent'));
    expect(marker).toBeDefined();
    expect(outside.hasAttribute(marker!.name)).toBe(false);

    expect(getComputedStyle(emulated).color).toBe('rgb(0, 0, 255)'); // blue
    expect(getComputedStyle(outside).color).not.toBe('rgb(0, 0, 255)');
  });
  // #enddocregion emulated-test

  it('None: the rule becomes global and also matches outside the card', async () => {
    const {outside, page} = await setup();
    expect(getComputedStyle(page.querySelector('app-none-card p')!).fontWeight).toBe('700'); // bold
    expect(getComputedStyle(outside).fontWeight).toBe('700'); // bold
  });

  it('ShadowDom: renders the template inside a shadow root', async () => {
    const {page} = await setup();
    const host = page.querySelector('app-shadow-card')!;
    expect(host.shadowRoot).not.toBeNull();
    expect(host.shadowRoot!.querySelector('p')?.textContent).toBe('Shadow DOM');
    // The paragraph is not a normal child of the host element.
    expect(host.querySelector('p')).toBeNull();
  });
});
