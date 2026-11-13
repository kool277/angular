import {TestBed} from '@angular/core/testing';
import {PerfPhotos} from './photos';

describe('PerfPhotos', () => {
  async function images(): Promise<HTMLImageElement[]> {
    const fixture = TestBed.createComponent(PerfPhotos);
    await fixture.whenStable();
    return [...(fixture.nativeElement as HTMLElement).querySelectorAll('img')];
  }

  it('loads the priority image first', async () => {
    const [lake] = await images();
    expect(lake.getAttribute('src')).toBe('/photos/lake.jpg');
    expect(lake.getAttribute('loading')).toBe('eager');
    expect(lake.getAttribute('fetchpriority')).toBe('high');
  });

  it('lets the browser load other images later (lazy)', async () => {
    const [, forest] = await images();
    expect(forest.getAttribute('loading')).toBe('lazy');
    expect(forest.getAttribute('fetchpriority')).toBe('auto');
  });

  it('makes a fill image cover its parent', async () => {
    const [, , sky] = await images();
    expect(sky.style.position).toBe('absolute');
    expect(sky.style.width).toBe('100%');
    expect(sky.style.height).toBe('100%');
  });
});
