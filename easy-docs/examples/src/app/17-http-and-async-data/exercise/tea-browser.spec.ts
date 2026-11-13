import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpTeaBrowser} from './tea-browser';

describe('HttpTeaBrowser', () => {
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  function button(page: HTMLElement, text: string): HTMLButtonElement {
    return [...page.querySelectorAll('button')].find((b) => b.textContent === text)!;
  }

  it('loads the next tea and shows an error for a missing one', async () => {
    const fixture = TestBed.createComponent(HttpTeaBrowser);
    const page: HTMLElement = fixture.nativeElement;
    TestBed.tick();
    httpTesting.expectOne('/http-demo/teas/1.json').flush({id: 1, name: 'Green tea', price: 4});
    await fixture.whenStable();
    expect(page.querySelector('h2')!.textContent).toBe('Green tea');

    button(page, 'Next').click();
    TestBed.tick();
    httpTesting
      .expectOne('/http-demo/teas/2.json')
      .flush('', {status: 404, statusText: 'Not Found'});
    await fixture.whenStable();
    expect(page.textContent).toContain('There is no tea number 2.');

    button(page, 'Retry').click();
    TestBed.tick();
    httpTesting.expectOne('/http-demo/teas/2.json').flush({id: 2, name: 'Black tea', price: 3});
    await fixture.whenStable();
    expect(page.querySelector('h2')!.textContent).toBe('Black tea');
  });
});
