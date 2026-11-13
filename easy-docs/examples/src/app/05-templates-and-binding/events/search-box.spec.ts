import {TestBed} from '@angular/core/testing';
import {TplSearchBox} from './search-box';

describe('TplSearchBox', () => {
  async function setup() {
    const fixture = TestBed.createComponent(TplSearchBox);
    await fixture.whenStable();
    return {fixture, page: fixture.nativeElement as HTMLElement};
  }

  it('reads the typed text from $event', async () => {
    const {fixture, page} = await setup();
    const input = page.querySelector('input')!;

    input.value = 'plov';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(page.querySelector('.typed')?.textContent).toBe('You typed: plov');
  });

  it('searches when the user presses Enter', async () => {
    const {fixture, page} = await setup();
    const input = page.querySelector('input')!;

    input.value = 'manti';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new KeyboardEvent('keyup', {key: 'Enter'}));
    await fixture.whenStable();

    expect(page.querySelector('.searched')?.textContent).toBe('Searched for: manti');
  });

  it('does not search on other keys', async () => {
    const {fixture, page} = await setup();
    const input = page.querySelector('input')!;

    input.value = 'somsa';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new KeyboardEvent('keyup', {key: 'a'}));
    await fixture.whenStable();

    expect(page.querySelector('.searched')?.textContent).toBe('Searched for: ');
  });

  it('stops the link from navigating', async () => {
    const {fixture, page} = await setup();
    const click = new MouseEvent('click', {cancelable: true});

    page.querySelector('a')!.dispatchEvent(click);
    await fixture.whenStable();

    expect(click.defaultPrevented).toBe(true);
    expect(page.querySelector('.help')?.textContent).toBe('Type a word and press Enter.');
  });
});
