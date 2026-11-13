import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpTeaList} from './tea-list';

describe('HttpTeaList', () => {
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  // #docregion success
  it('shows "Loading…" and then the teas from the server', async () => {
    const fixture = TestBed.createComponent(HttpTeaList);
    TestBed.tick();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.textContent).toContain('Loading…');

    const request = httpTesting.expectOne('/http-demo/teas.json');
    expect(request.request.method).toBe('GET');
    request.flush([
      {id: 1, name: 'Green tea', price: 4},
      {id: 2, name: 'Black tea', price: 3},
    ]);
    await fixture.whenStable();

    const items = page.querySelectorAll('li');
    expect(items.length).toBe(2);
    expect(items[0].textContent).toBe('Green tea');
  });
  // #enddocregion success

  it('shows a message when the server answers with an error', async () => {
    const fixture = TestBed.createComponent(HttpTeaList);
    TestBed.tick();
    httpTesting
      .expectOne('/http-demo/teas.json')
      .flush('Server is down', {status: 500, statusText: 'Internal Server Error'});
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Could not load the teas.');
  });
});
