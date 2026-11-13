import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpAddTea} from './add-tea';

describe('HttpAddTea', () => {
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  async function typeAndSave(name: string) {
    const fixture = TestBed.createComponent(HttpAddTea);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    page.querySelector('input')!.value = name;
    page.querySelector('button')!.click();
    await fixture.whenStable();
    return {fixture, page};
  }

  it('shows the saved tea', async () => {
    const {fixture, page} = await typeAndSave('Oolong');
    expect(page.querySelector('p')!.textContent).toBe('Saving…');

    httpTesting.expectOne('/http-demo/teas.json').flush({id: 4, name: 'Oolong', price: 4});
    await fixture.whenStable();

    expect(page.querySelector('p')!.textContent).toBe('Saved Oolong with id 4.');
  });

  // #docregion errors
  it('explains a server error', async () => {
    const {fixture, page} = await typeAndSave('');

    httpTesting
      .expectOne('/http-demo/teas.json')
      .flush({problem: 'name is empty'}, {status: 400, statusText: 'Bad Request'});
    await fixture.whenStable();

    expect(page.querySelector('p')!.textContent).toBe('The server did not accept this tea.');
  });

  it('explains a network error', async () => {
    const {fixture, page} = await typeAndSave('Oolong');

    httpTesting.expectOne('/http-demo/teas.json').error(new ProgressEvent('network error'));
    await fixture.whenStable();

    expect(page.querySelector('p')!.textContent).toBe(
      'No connection to the server. Try again later.',
    );
  });
  // #enddocregion errors
});
