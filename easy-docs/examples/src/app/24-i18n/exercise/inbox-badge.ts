import {Component, input} from '@angular/core';

@Component({
  selector: 'app-inbox-badge',
  template: `
    <p i18n="Message counter in the header@@inboxCount">
      {unread(), plural,
        =0 {No new messages}
        =1 {One new message}
        other {{{ unread() }} new messages}
      }
    </p>
  `,
})
export class I18nInboxBadge {
  unread = input.required<number>();
}
