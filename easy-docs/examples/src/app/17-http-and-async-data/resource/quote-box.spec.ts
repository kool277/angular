import {TestBed} from '@angular/core/testing';
import {HttpQuoteBox} from './quote-box';

describe('HttpQuoteBox', () => {
  function setup() {
    const fixture = TestBed.createComponent(HttpQuoteBox);
    const page: HTMLElement = fixture.nativeElement;
    const status = () => page.querySelector('.status')!.textContent;
    const button = (text: string) =>
      [...page.querySelectorAll('button')].find((b) => b.textContent === text)!;
    return {fixture, page, status, button};
  }

  it('goes from "loading" to "resolved"', async () => {
    const {fixture, page, status} = setup();
    TestBed.tick();
    expect(status()).toBe('Status: loading');
    expect(page.textContent).toContain('Loading…');

    await fixture.whenStable();

    expect(status()).toBe('Status: resolved');
    expect(page.querySelector('blockquote')!.textContent).toBe('Tea is liquid wisdom.');
  });

  it('loads again when the params signal changes', async () => {
    const {fixture, page, button} = setup();
    await fixture.whenStable();

    button('Next quote').click();
    await fixture.whenStable();

    expect(page.querySelector('blockquote')!.textContent).toBe(
      'Where there is tea, there is hope.',
    );
  });

  it('keeps the old value while it reloads', async () => {
    const {fixture, page, status, button} = setup();
    await fixture.whenStable();

    button('Reload').click();
    TestBed.tick();
    expect(status()).toBe('Status: reloading');
    expect(page.querySelector('blockquote')!.textContent).toBe('Tea is liquid wisdom.');

    await fixture.whenStable();
    expect(status()).toBe('Status: resolved');
  });

  it('shows the error when the loader fails', async () => {
    const {fixture, page, status, button} = setup();
    await fixture.whenStable();

    for (let i = 0; i < 3; i++) {
      button('Next quote').click();
      await fixture.whenStable();
    }

    expect(status()).toBe('Status: error');
    expect(page.querySelector('.error')!.textContent).toBe('There is no quote number 4.');
    expect(page.querySelector('blockquote')).toBeNull();
  });
});
