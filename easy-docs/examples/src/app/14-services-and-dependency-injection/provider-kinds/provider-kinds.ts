import {Component, Injectable, InjectionToken, inject} from '@angular/core';

export const SITE_NAME = new InjectionToken<string>('SITE_NAME');
export const GREETING = new InjectionToken<string>('GREETING');

@Injectable({providedIn: 'root'})
export class DiUserStorage {
  read(key: string): string | null {
    return localStorage.getItem(key);
  }
}

@Injectable()
export class DiMemoryUserStorage extends DiUserStorage {
  private readonly data = new Map([['user', 'Aziz']]);

  override read(key: string): string | null {
    return this.data.get(key) ?? null;
  }
}

// #docregion providers
@Component({
  selector: 'app-di-provider-kinds',
  providers: [
    {provide: SITE_NAME, useValue: 'Tasty Recipes'},
    {provide: DiUserStorage, useClass: DiMemoryUserStorage},
    {
      provide: GREETING,
      useFactory: () => {
        const user = inject(DiUserStorage).read('user') ?? 'guest';
        return `Welcome to ${inject(SITE_NAME)}, ${user}!`;
      },
    },
    {provide: DiMemoryUserStorage, useExisting: DiUserStorage},
  ],
  template: `
    <p class="greeting">{{ greeting }}</p>
    <p class="same">Same storage object: {{ sameStorage }}</p>
  `,
})
export class DiProviderKinds {
  protected readonly greeting = inject(GREETING);
  protected readonly sameStorage = inject(DiMemoryUserStorage) === inject(DiUserStorage);
}
// #enddocregion providers
