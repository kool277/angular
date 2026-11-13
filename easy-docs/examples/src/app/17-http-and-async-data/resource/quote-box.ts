import {Component, resource, signal} from '@angular/core';
import {loadQuote} from './quote-server';

@Component({
  selector: 'app-http-quote-box',
  template: `
    <p class="status">Status: {{ quote.status() }}</p>

    @if (quote.isLoading()) {
      <p>Loading…</p>
    }
    @if (quote.error(); as error) {
      <p class="error">{{ error.message }}</p>
    } @else if (quote.hasValue()) {
      <blockquote>{{ quote.value() }}</blockquote>
    }

    <button type="button" (click)="index.set(index() + 1)">Next quote</button>
    <button type="button" (click)="quote.reload()">Reload</button>
  `,
})
export class HttpQuoteBox {
  protected readonly index = signal(0);

  // #docregion resource
  protected readonly quote = resource({
    params: () => this.index(),
    loader: ({params, abortSignal}) => loadQuote(params, abortSignal),
  });
  // #enddocregion resource
}
