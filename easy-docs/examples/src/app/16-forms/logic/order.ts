import {Component, signal} from '@angular/core';
import {disabled, form, FormField, hidden, readonly, required} from '@angular/forms/signals';

@Component({
  selector: 'app-forms-order',
  imports: [FormField],
  template: `
    <label>Order number <input [formField]="orderForm.orderId" /></label>

    <label><input type="checkbox" [formField]="orderForm.isGift" /> This is a gift</label>
    <!-- #docregion hidden -->
    @if (!orderForm.giftMessage().hidden()) {
      <label>Gift message <input [formField]="orderForm.giftMessage" /></label>
    }
    <!-- #enddocregion hidden -->

    <label>Total <input type="number" [formField]="orderForm.total" /></label>
    <label>Coupon <input [formField]="orderForm.coupon" /></label>
    @for (reason of orderForm.coupon().disabledReasons(); track $index) {
      <p class="reason">{{ reason.message }}</p>
    }

    <button [disabled]="orderForm().invalid()">Order</button>
  `,
})
export class FormsOrder {
  readonly orderModel = signal({
    orderId: 'A-1024',
    isGift: false,
    giftMessage: '',
    total: 5,
    coupon: '',
  });

  // #docregion schema
  readonly orderForm = form(this.orderModel, (path) => {
    readonly(path.orderId);

    hidden(path.giftMessage, {when: ({valueOf}) => !valueOf(path.isGift)});
    required(path.giftMessage);

    disabled(path.coupon, {
      when: ({valueOf}) => (valueOf(path.total) < 10 ? 'Coupons start at 10 €.' : false),
    });
  });
  // #enddocregion schema
}
