import {TestBed} from '@angular/core/testing';
import {DiLogger, DiOrderService} from './logger';

describe('DiOrderService', () => {
  it('uses the one DiLogger of the app', () => {
    TestBed.inject(DiOrderService).placeOrder('Plov');
    expect(TestBed.inject(DiLogger).lines).toEqual(['Order placed: Plov']);
  });
});
