import {isPlatformBrowser} from '@angular/common';
import {PLATFORM_ID, Service, inject} from '@angular/core';

@Service()
export class SsrVisitStorage {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  read(): string | null {
    return this.isBrowser ? localStorage.getItem('lastVisit') : null;
  }

  save(date: string): void {
    if (this.isBrowser) {
      localStorage.setItem('lastVisit', date);
    }
  }
}
