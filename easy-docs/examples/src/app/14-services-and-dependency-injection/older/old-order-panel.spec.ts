import {TestBed} from '@angular/core/testing';
import {DiLogger} from '../logger/logger';
import {DiOldOrderPanel} from './old-order-panel';

describe('DiOldOrderPanel', () => {
  it('gets its services through constructor parameters', async () => {
    const fixture = TestBed.createComponent(DiOldOrderPanel);
    await fixture.whenStable();
    (fixture.nativeElement as HTMLElement).querySelector('button')!.click();
    expect(TestBed.inject(DiLogger).lines).toEqual(['Order placed: Plov', 'Button clicked']);
  });
});
