import {TestBed} from '@angular/core/testing';
import {PerfPlainTimer, PerfSignalTimer} from './timers';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('zoneless change detection', () => {
  it('does not see a plain field that changes in a timer', async () => {
    const fixture = TestBed.createComponent(PerfPlainTimer);
    await fixture.whenStable();
    await wait(400);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toBe('Waiting…');
  });

  it('updates the page when a signal changes in a timer', async () => {
    const fixture = TestBed.createComponent(PerfSignalTimer);
    await fixture.whenStable();
    await wait(400);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toBe('Done');
  });
});
