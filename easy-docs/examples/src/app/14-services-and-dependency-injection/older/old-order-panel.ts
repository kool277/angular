import {Component, Optional} from '@angular/core';
import {DiLogger, DiOrderService} from '../logger/logger';

// Older style. New code uses inject() instead of constructor parameters.
@Component({
  selector: 'app-di-old-order-panel',
  template: `<button type="button" (click)="order()">Order plov</button>`,
})
export class DiOldOrderPanel {
  constructor(
    private orders: DiOrderService,
    @Optional() private logger: DiLogger | null,
  ) {}

  order(): void {
    this.orders.placeOrder('Plov');
    this.logger?.log('Button clicked');
  }
}
