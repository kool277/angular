import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-i18n-welcome',
  template: `
    <h1 i18n="Title of the home page@@homeTitle">Welcome to Samarkand!</h1>
    <p i18n>Hello, {{ visitor() }}! Your ticket is ready.</p>
    <button i18n-title title="Print your ticket" i18n>Print</button>
    <p class="status">{{ status() }}</p>
  `,
})
export class I18nWelcome {
  visitor = signal('Aziza');
  status = signal($localize`:Status line under the ticket@@ticketStatus:Valid for one day`);
}
