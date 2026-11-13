import {HttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {customXsrfConfig} from './xsrf.config';

describe('withXsrfConfiguration()', () => {
  it('uses your own cookie and header names', () => {
    document.cookie = 'MUSEUM-XSRF=abc';
    TestBed.configureTestingModule({
      providers: [...customXsrfConfig.providers, provideHttpClientTesting()],
    });
    TestBed.inject(HttpClient).post('/api/tickets', {}).subscribe();

    const request = TestBed.inject(HttpTestingController).expectOne('/api/tickets');
    expect(request.request.headers.get('X-Museum-Xsrf')).toBe('abc');
    request.flush(null);
    document.cookie = 'MUSEUM-XSRF=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });
});
