import {TestBed} from '@angular/core/testing';
import {PerfTriggers} from './triggers';

// #docregion fake
/** jsdom has no IntersectionObserver, which `on viewport` needs. This one never fires. */
class FakeIntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}
// #enddocregion fake

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function loadedNames(element: HTMLElement): string[] {
  return [...element.querySelectorAll('app-perf-loaded-box')].map((box) =>
    box.textContent!.replace('Loaded: ', ''),
  );
}

describe('PerfTriggers', () => {
  // #docregion stub
  beforeEach(() => vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver));
  afterEach(() => vi.unstubAllGlobals());
  // #enddocregion stub

  it('loads each block when its trigger fires', async () => {
    const fixture = TestBed.createComponent(PerfTriggers);
    const element: HTMLElement = fixture.nativeElement;
    await fixture.whenStable();
    await wait(50);
    await fixture.whenStable();
    // `on idle` has fired; the other triggers have not.
    expect(loadedNames(element)).toEqual(['idle']);

    element.querySelector('button')!.dispatchEvent(new Event('mouseover'));
    await fixture.whenStable();
    expect(loadedNames(element)).toContain('hover');

    fixture.componentInstance.showMap.set(true);
    await fixture.whenStable();
    expect(loadedNames(element)).toContain('when');

    [...element.querySelectorAll('button')].find((b) => b.textContent === 'Show more')!.click();
    await fixture.whenStable();
    expect(loadedNames(element)).toContain('interaction');

    // Nothing makes the fake IntersectionObserver fire, and two seconds have not passed yet.
    expect(loadedNames(element)).not.toContain('viewport');
    expect(loadedNames(element)).not.toContain('timer');
    await wait(2000);
    await fixture.whenStable();
    expect(loadedNames(element)).toContain('timer');
  });
});
