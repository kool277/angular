import {TestBed} from '@angular/core/testing';
import {CompMapPanel} from './map-panel';

describe('CompMapPanel', () => {
  it('keeps an unknown custom element in the page', async () => {
    const fixture = TestBed.createComponent(CompMapPanel);
    await fixture.whenStable();

    const map = (fixture.nativeElement as HTMLElement).querySelector('city-map');
    expect(map?.getAttribute('city')).toBe('Samarkand');
  });
});
