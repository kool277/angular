import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RxTeaSearch} from './tea-search';

describe('RxTeaSearch', () => {
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
    vi.useRealTimers();
  });

  async function type(input: HTMLInputElement, text: string) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
    await vi.advanceTimersByTimeAsync(100);
  }

  it('waits until typing stops and sends one request', async () => {
    const fixture = TestBed.createComponent(RxTeaSearch);
    await vi.advanceTimersByTimeAsync(300);
    httpTesting.expectOne('/http-demo/teas.json?q=').flush([]);

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    await type(input, 'm');
    await type(input, 'mi');
    await type(input, 'mint');
    httpTesting.expectNone(() => true);

    await vi.advanceTimersByTimeAsync(300);
    httpTesting.expectOne('/http-demo/teas.json?q=mint').flush([{id: 3, name: 'Mint tea'}]);
    await vi.advanceTimersByTimeAsync(0);

    expect(fixture.nativeElement.querySelector('li').textContent).toBe('Mint tea');
  });

  it('cancels the old request when a new search starts', async () => {
    const fixture = TestBed.createComponent(RxTeaSearch);
    await vi.advanceTimersByTimeAsync(300);
    const first = httpTesting.expectOne('/http-demo/teas.json?q=');

    await type(fixture.nativeElement.querySelector('input'), 'green');
    await vi.advanceTimersByTimeAsync(300);

    expect(first.cancelled).toBe(true);
    httpTesting.expectOne('/http-demo/teas.json?q=green').flush([]);
  });
});
