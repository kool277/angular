import {TestBed} from '@angular/core/testing';
import {PipesBuiltIn} from './built-in-pipes';

describe('PipesBuiltIn', () => {
  async function render() {
    const fixture = TestBed.createComponent(PipesBuiltIn);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    return (id: string) => page.querySelector('#' + id)?.textContent;
  }

  it('formats text', async () => {
    const text = await render();
    expect(text('upper')).toBe('BUKHARA');
    expect(text('lower')).toBe('bukhara');
    expect(text('title')).toBe('Silk Road Museum');
  });

  it('formats dates (en-US locale, UTC time zone)', async () => {
    const text = await render();
    expect(text('date-default')).toBe('Mar 21, 2026');
    expect(text('date-format')).toBe('21 March 2026, 09:30');
    expect(text('date-short')).toBe('3/21/26');
  });

  it('formats numbers, percentages and money', async () => {
    const text = await render();
    expect(text('number')).toBe('1,234.568');
    expect(text('number-digits')).toBe('1,234.6');
    expect(text('percent')).toBe('26%');
    expect(text('percent-digits')).toBe('25.6%');
    expect(text('currency')).toBe('€42.00');
    expect(text('currency-code')).toBe('UZS42');
  });

  it('runs chained pipes from left to right', async () => {
    const text = await render();
    expect(text('chain')).toBe('SATURDAY');
  });

  it('shows objects with json and keyvalue', async () => {
    const fixture = TestBed.createComponent(PipesBuiltIn);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(JSON.parse(page.querySelector('#json')!.textContent!)).toEqual({
      visitor: 'Aziz',
      adult: true,
      seat: 12,
    });
    // keyvalue sorts the entries by key.
    expect(Array.from(page.querySelectorAll('li')).map((li) => li.textContent)).toEqual([
      'adult = true',
      'seat = 12',
      'visitor = Aziz',
    ]);
  });
});
