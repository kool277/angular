import {HttpErrorResponse, httpResource} from '@angular/common/http';
import {Component, inject, signal} from '@angular/core';
import {HttpTeaApi} from '../client/tea-api';
import {Tea} from '../tea';

@Component({
  selector: 'app-http-tea-shop',
  templateUrl: './tea-shop.html',
  styleUrl: './tea-shop.css',
})
export class HttpTeaShop {
  private readonly api = inject(HttpTeaApi);

  // #docregion resources
  // The list: loaded once, loaded again by reload().
  protected readonly teas = httpResource<Tea[]>(() => '/http-demo/teas.json', {
    defaultValue: [],
  });

  // The details: no request while nothing is selected.
  protected readonly selectedId = signal<number | undefined>(undefined);
  protected readonly selected = httpResource<Tea>(() => {
    const id = this.selectedId();
    return id === undefined ? undefined : `/http-demo/teas/${id}.json`;
  });
  // #enddocregion resources

  protected readonly message = signal('');

  // #docregion add
  add(name: string): void {
    this.api.addTea({name, price: 4}).subscribe({
      next: (tea) => {
        this.message.set(`Added ${tea.name}.`);
        this.teas.reload();
      },
      error: (error: HttpErrorResponse) => {
        this.message.set(`Could not add the tea (error ${error.status}).`);
      },
    });
  }
  // #enddocregion add
}
