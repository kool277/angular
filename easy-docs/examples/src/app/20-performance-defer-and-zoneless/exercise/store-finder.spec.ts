import {TestBed} from '@angular/core/testing';
import {PerfStoreFinder} from './store-finder';

describe('PerfStoreFinder', () => {
  it('shows the placeholder until the button is clicked, then the map', async () => {
    const fixture = TestBed.createComponent(PerfStoreFinder);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('The map appears here.');
    expect(element.querySelector('app-perf-store-map')).toBeNull();

    element.querySelector('button')!.click();
    await fixture.whenStable();
    expect(element.querySelector('app-perf-store-map')?.textContent).toBe(
      'Map: 3 stores near you.',
    );
  });
});
