import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {SecReviewApi} from './review-api';

describe('XSRF protection in HttpClient', () => {
  beforeEach(() => {
    // The server would set this cookie. The test sets it by hand.
    document.cookie = 'XSRF-TOKEN=t0k3n';
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
  });

  afterEach(() => {
    document.cookie = 'XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    TestBed.inject(HttpTestingController).verify();
  });

  it('copies the cookie into the X-XSRF-TOKEN header of a POST', () => {
    TestBed.inject(SecReviewApi).send({stars: 5, text: 'Wonderful'}).subscribe();
    const request = TestBed.inject(HttpTestingController).expectOne('/api/reviews');
    expect(request.request.method).toBe('POST');
    expect(request.request.headers.get('X-XSRF-TOKEN')).toBe('t0k3n');
    request.flush(null);
  });

  it('does not add the header to a GET', () => {
    TestBed.inject(SecReviewApi).list().subscribe();
    const request = TestBed.inject(HttpTestingController).expectOne('/api/reviews');
    expect(request.request.headers.has('X-XSRF-TOKEN')).toBe(false);
    request.flush([]);
  });
});
