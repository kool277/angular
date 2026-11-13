import {TestBed} from '@angular/core/testing';
import {DiLogger} from '../logger/logger';
import {DiCheckoutPage} from './checkout-page';
import {injectPageLogger} from './page-logger';

describe('injectPageLogger', () => {
  it('works in a field initializer and inside runInInjectionContext', async () => {
    const fixture = TestBed.createComponent(DiCheckoutPage);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector<HTMLButtonElement>('.pay')!.click();
    page.querySelector<HTMLButtonElement>('.help')!.click();
    expect(TestBed.inject(DiLogger).lines).toEqual(['[checkout] Paid', '[help] Opened']);
  });

  it('throws a clear error outside an injection context', () => {
    expect(() => injectPageLogger('nowhere')).toThrowError(/NG0203/);
  });
});
