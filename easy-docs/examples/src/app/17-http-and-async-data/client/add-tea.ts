import {HttpErrorResponse} from '@angular/common/http';
import {Component, inject, signal} from '@angular/core';
import {HttpTeaApi} from './tea-api';

@Component({
  selector: 'app-http-add-tea',
  template: `
    <input #name placeholder="Tea name" />
    <button type="button" (click)="save(name.value)">Save</button>
    <p>{{ message() }}</p>
  `,
})
export class HttpAddTea {
  private readonly api = inject(HttpTeaApi);
  protected readonly message = signal('');

  // #docregion save
  save(name: string): void {
    this.message.set('Saving…');
    this.api.addTea({name, price: 4}).subscribe({
      next: (tea) => this.message.set(`Saved ${tea.name} with id ${tea.id}.`),
      error: (error: HttpErrorResponse) => this.message.set(this.describe(error)),
    });
  }

  private describe(error: HttpErrorResponse): string {
    if (error.status === 0) {
      return 'No connection to the server. Try again later.';
    }
    if (error.status === 400) {
      return 'The server did not accept this tea.';
    }
    return `The server answered with error ${error.status}.`;
  }
  // #enddocregion save
}
