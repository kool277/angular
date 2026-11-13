import {Component} from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
    <input type="search" (input)="onInput($event)" (keyup.enter)="search()" />
    <button type="button" (click)="search()">Search</button>
    <a href="/help" (click)="openHelp($event)">Help</a>

    <p class="typed">You typed: {{ query }}</p>
    <p class="searched">Searched for: {{ lastSearch }}</p>
    <p class="help">{{ helpText }}</p>
  `,
})
export class TplSearchBox {
  query = '';
  lastSearch = '';
  helpText = '';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.query = input.value;
  }

  search(): void {
    this.lastSearch = this.query;
  }

  openHelp(event: MouseEvent): void {
    event.preventDefault();
    this.helpText = 'Type a word and press Enter.';
  }
}
