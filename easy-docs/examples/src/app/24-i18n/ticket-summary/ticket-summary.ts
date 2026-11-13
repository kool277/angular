import {Component, input} from '@angular/core';

@Component({
  selector: 'app-i18n-ticket-summary',
  template: `
    <!-- #docregion plural -->
    <p class="count" i18n>
      {count(), plural, =0 {No tickets yet.} =1 {One ticket.} other {{{ count() }} tickets.}}
    </p>
    <!-- #enddocregion plural -->
    <!-- #docregion select -->
    <p class="type" i18n>
      Ticket type: {kind(), select, adult {adult} child {child} other {other}}
    </p>
    <!-- #enddocregion select -->
  `,
})
export class I18nTicketSummary {
  count = input(0);
  kind = input('adult');
}
