import {TestBed} from '@angular/core/testing';
import {LifePriceTagDemo} from './price-tag';

describe('LifePriceTagHook and LifePriceTag', () => {
  it('show the same trend arrow', async () => {
    const fixture = TestBed.createComponent(LifePriceTagDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const texts = () => Array.from(page.querySelectorAll('span')).map((s) => s.textContent?.trim());
    expect(texts()).toEqual(['10 €', '10 €']);

    page.querySelectorAll('button')[0].click();
    await fixture.whenStable();
    expect(texts()).toEqual(['11 € ▲', '11 € ▲']);

    page.querySelectorAll('button')[1].click();
    await fixture.whenStable();
    expect(texts()).toEqual(['10 € ▼', '10 € ▼']);
  });
});
