import {Component} from '@angular/core';

@Component({
  selector: 'app-i18n-opening-hours',
  template: `
    <h2 i18n="@@openingTitle">Opening hours</h2>
    <p i18n="@@openingDays">Open every day from {{ from }} to {{ to }}.</p>
  `,
})
export class I18nOpeningHours {
  from = '9:00';
  to = '18:00';
}

// #docregion translations
export const uzbekTranslations: Record<string, string> = {
  openingTitle: 'Ish vaqti',
  openingDays: 'Har kuni {$INTERPOLATION} dan {$INTERPOLATION_1} gacha ochiq.',
};
// #enddocregion translations
