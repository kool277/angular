import {Component, Injector, inject, runInInjectionContext} from '@angular/core';
import {injectPageLogger} from './page-logger';

@Component({
  selector: 'app-di-checkout-page',
  template: `
    <button type="button" class="pay" (click)="pay()">Pay</button>
    <button type="button" class="help" (click)="openHelp()">Help</button>
  `,
})
export class DiCheckoutPage {
  private readonly log = injectPageLogger('checkout');
  private readonly injector = inject(Injector);

  pay(): void {
    this.log('Paid');
  }

  openHelp(): void {
    runInInjectionContext(this.injector, () => {
      const helpLog = injectPageLogger('help');
      helpLog('Opened');
    });
  }
}
