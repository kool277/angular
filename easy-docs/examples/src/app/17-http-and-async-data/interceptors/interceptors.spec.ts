import {HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {authInterceptor} from './auth-interceptor';
import {HttpRequestLog, logInterceptor} from './request-log';
import {HttpSession} from './session';

describe('interceptors', () => {
  let http: HttpClient;
  let httpTesting: HttpTestingController;

  // #docregion setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor, logInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    http = TestBed.inject(HttpClient);
    httpTesting = TestBed.inject(HttpTestingController);
  });
  // #enddocregion setup

  afterEach(() => httpTesting.verify());

  // #docregion auth
  it('adds the token to every request', () => {
    TestBed.inject(HttpSession).token.set('abc123');

    http.get('/api/orders').subscribe();

    const request = httpTesting.expectOne('/api/orders');
    expect(request.request.headers.get('Authorization')).toBe('Bearer abc123');
    request.flush([]);
  });
  // #enddocregion auth

  it('sends no Authorization header without a token', () => {
    http.get('/api/orders').subscribe();

    const request = httpTesting.expectOne('/api/orders');
    expect(request.request.headers.has('Authorization')).toBe(false);
    request.flush([]);
  });

  it('logs the status of every response', () => {
    http.get('/api/orders').subscribe();
    http.get('/api/missing').subscribe({error: () => {}});

    httpTesting.expectOne('/api/orders').flush([]);
    httpTesting.expectOne('/api/missing').flush('', {status: 404, statusText: 'Not Found'});

    expect(TestBed.inject(HttpRequestLog).lines()).toEqual([
      'GET /api/orders → 200',
      'GET /api/missing → 404',
    ]);
  });
});
