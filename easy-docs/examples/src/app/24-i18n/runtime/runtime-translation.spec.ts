import {TestBed} from '@angular/core/testing';
import {clearTranslations, loadTranslations} from '@angular/localize';
import {I18nOpeningHours, uzbekTranslations} from './runtime-translation';

describe('I18nOpeningHours with translations loaded at run time', () => {
  afterEach(() => clearTranslations());

  it('shows the Uzbek text', async () => {
    loadTranslations(uzbekTranslations);
    const fixture = TestBed.createComponent(I18nOpeningHours);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h2')?.textContent).toBe('Ish vaqti');
    expect(page.querySelector('p')?.textContent).toBe('Har kuni 9:00 dan 18:00 gacha ochiq.');
  });
});
