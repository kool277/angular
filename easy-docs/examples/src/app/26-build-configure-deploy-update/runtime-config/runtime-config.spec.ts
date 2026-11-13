import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {ApplicationInitStatus} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {BuildConfigStore, runtimeConfigProviders} from './runtime-config';

describe('runtime configuration', () => {
  it('loads /config.json before the app starts', async () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), runtimeConfigProviders],
    });
    // Creating the test environment starts the app initializers.
    const initStatus = TestBed.inject(ApplicationInitStatus);
    expect(initStatus.done).toBe(false);

    TestBed.inject(HttpTestingController)
      .expectOne('/config.json')
      .flush({apiUrl: 'https://api.example'});
    await initStatus.donePromise;

    expect(initStatus.done).toBe(true);
    expect(TestBed.inject(BuildConfigStore).config()).toEqual({apiUrl: 'https://api.example'});
  });
});
