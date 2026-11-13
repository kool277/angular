import {TestBed} from '@angular/core/testing';
import {DiReport} from './report';

describe('DiReport', () => {
  it('loads the exporter on the first click and uses it', async () => {
    const fixture = TestBed.createComponent(DiReport);
    await fixture.whenStable();
    await fixture.componentInstance.export();
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('pre')?.textContent).toBe(
      'dish,orders\nplov,12',
    );
  });
});
