import {TestBed} from '@angular/core/testing';
import {ControlFlowAlias} from './alias';

describe('ControlFlowAlias', () => {
  it('saves the condition value in a name with "as"', async () => {
    const fixture = TestBed.createComponent(ControlFlowAlias);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent?.trim()).toBe(
      'Aziza lives in Samarkand.',
    );
  });
});
