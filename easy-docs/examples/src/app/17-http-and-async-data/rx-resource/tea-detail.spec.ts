import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {HttpRxTeaDetail} from './tea-detail';

describe('HttpRxTeaDetail', () => {
  it('loads the tea whose id is the input', async () => {
    TestBed.configureTestingModule({providers: [provideHttpClientTesting()]});
    const httpTesting = TestBed.inject(HttpTestingController);
    const fixture = TestBed.createComponent(HttpRxTeaDetail);
    fixture.componentRef.setInput('id', 2);
    TestBed.tick();

    httpTesting.expectOne('/http-demo/teas/2.json').flush({id: 2, name: 'Black tea', price: 3});
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('h2').textContent).toBe('Black tea');
    httpTesting.verify();
  });
});
