import {TestBed} from '@angular/core/testing';
import {I18nLocalePrices} from './locale-prices';
import {uzbekLocaleConfig} from './locale.config';

// Some locales use special spaces (non-breaking spaces). This turns them into normal spaces.
function textOf(page: HTMLElement, selector: string) {
  return page.querySelector(selector)?.textContent?.replace(/\s/g, ' ');
}

describe('I18nLocalePrices', () => {
  it('uses en-US when nobody provides LOCALE_ID', async () => {
    const fixture = TestBed.createComponent(I18nLocalePrices);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(textOf(page, '.locale')).toBe('Locale: en-US');
    expect(textOf(page, '.number')).toBe('1,234,567.5');
    expect(textOf(page, '.price')).toBe('UZS45,000');
    expect(textOf(page, '.date')).toBe('March 21, 2026');
  });

  it('formats for Uzbek when LOCALE_ID is uz', async () => {
    TestBed.configureTestingModule({providers: uzbekLocaleConfig.providers});
    const fixture = TestBed.createComponent(I18nLocalePrices);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(textOf(page, '.locale')).toBe('Locale: uz');
    expect(textOf(page, '.number')).toBe('1 234 567,5');
    expect(textOf(page, '.price')).toBe('45 000 soʻm');
    expect(textOf(page, '.date')).toBe('21-mart, 2026');
    // The last parameter of the pipe wins over LOCALE_ID.
    expect(textOf(page, '.price-us')).toBe('UZS45,000');
  });
});
