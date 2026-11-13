import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpTeaShop} from './tea-shop';

const TEAS = [
  {id: 1, name: 'Green tea', price: 4},
  {id: 2, name: 'Black tea', price: 3},
];

describe('HttpTeaShop', () => {
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  async function openShop() {
    const fixture = TestBed.createComponent(HttpTeaShop);
    TestBed.tick();
    httpTesting.expectOne('/http-demo/teas.json').flush(TEAS);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    return {fixture, page};
  }

  it('lists the teas and sends no details request while nothing is selected', async () => {
    const {page} = await openShop();

    expect([...page.querySelectorAll('li')].map((li) => li.textContent?.trim())).toEqual([
      'Green tea',
      'Black tea',
    ]);
    expect(page.querySelector('.details')!.textContent).toContain('Choose a tea.');
    httpTesting.expectNone((request) => request.url.startsWith('/http-demo/teas/'));
  });

  // #docregion details
  it('loads the details of the tea you click', async () => {
    const {fixture, page} = await openShop();

    page.querySelectorAll<HTMLButtonElement>('li button')[1].click();
    // Not whenStable(): it would wait for the open request, which never ends in a test.
    TestBed.tick();
    expect(page.querySelector('.details')!.textContent).toContain('Loading the details…');

    httpTesting.expectOne('/http-demo/teas/2.json').flush(TEAS[1]);
    await fixture.whenStable();

    expect(page.querySelector('h3')!.textContent).toBe('Black tea');
  });
  // #enddocregion details

  // #docregion post
  it('adds a tea with POST and then loads the list again', async () => {
    const {fixture, page} = await openShop();

    page.querySelector('input')!.value = 'Mint tea';
    [...page.querySelectorAll('button')].find((b) => b.textContent === 'Add')!.click();

    const post = httpTesting.expectOne({method: 'POST', url: '/http-demo/teas.json'});
    expect(post.request.body).toEqual({name: 'Mint tea', price: 4});
    post.flush({id: 3, name: 'Mint tea', price: 4});
    TestBed.tick();

    httpTesting
      .expectOne({method: 'GET', url: '/http-demo/teas.json'})
      .flush([...TEAS, {id: 3, name: 'Mint tea', price: 4}]);
    await fixture.whenStable();

    expect(page.querySelector('.message')!.textContent).toBe('Added Mint tea.');
    expect(page.querySelectorAll('li').length).toBe(3);
  });
  // #enddocregion post

  it('shows an error and a "Try again" button when the list fails', async () => {
    const fixture = TestBed.createComponent(HttpTeaShop);
    TestBed.tick();
    httpTesting
      .expectOne('/http-demo/teas.json')
      .flush('', {status: 503, statusText: 'Service Unavailable'});
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('.error')!.textContent).toBe('Could not load the teas.');

    [...page.querySelectorAll('button')].find((b) => b.textContent === 'Try again')!.click();
    TestBed.tick();
    httpTesting.expectOne('/http-demo/teas.json').flush(TEAS);
    await fixture.whenStable();

    expect(page.querySelectorAll('li').length).toBe(2);
  });
});
