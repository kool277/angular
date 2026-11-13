import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {firstValueFrom} from 'rxjs';
import {HttpTeaApi} from './tea-api';

describe('HttpTeaApi', () => {
  let api: HttpTeaApi;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    api = TestBed.inject(HttpTeaApi);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  // #docregion get
  it('loads the teas with a GET request', async () => {
    const teas = firstValueFrom(api.getTeas());

    const request = httpTesting.expectOne('/http-demo/teas.json');
    expect(request.request.method).toBe('GET');
    request.flush([{id: 1, name: 'Green tea', price: 4}]);

    expect(await teas).toEqual([{id: 1, name: 'Green tea', price: 4}]);
  });
  // #enddocregion get

  it('sends nothing until someone subscribes', () => {
    api.getTeas();
    httpTesting.expectNone('/http-demo/teas.json');
  });

  it('sends a new request for every subscription', () => {
    const teas$ = api.getTeas();
    teas$.subscribe();
    teas$.subscribe();
    expect(httpTesting.match('/http-demo/teas.json').length).toBe(2);
  });

  it('puts params into the URL and sends headers', () => {
    api.searchTeas('mint').subscribe();

    const request = httpTesting.expectOne('/http-demo/teas.json?q=mint');
    expect(request.request.params.get('q')).toBe('mint');
    expect(request.request.headers.get('X-Shop')).toBe('tea');
    request.flush([]);
  });

  it('sends the new tea as the body of a POST request', async () => {
    const saved = firstValueFrom(api.addTea({name: 'Oolong', price: 6}));

    const request = httpTesting.expectOne('/http-demo/teas.json');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({name: 'Oolong', price: 6});
    request.flush({id: 4, name: 'Oolong', price: 6});

    expect(await saved).toEqual({id: 4, name: 'Oolong', price: 6});
  });
});
