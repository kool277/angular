import {TestBed} from '@angular/core/testing';
import {ProjExpandableDemo} from './expandable';

describe('ProjExpandable', () => {
  it('shows a button only when the content has an appMore part', async () => {
    const fixture = TestBed.createComponent(ProjExpandableDemo);
    await fixture.whenStable();
    const [long, short] = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('app-proj-expandable'),
    );
    expect(long.querySelector('button')?.textContent?.trim()).toBe('Read more');
    expect(short.querySelector('button')).toBeNull();
  });

  it('opens and closes the extra part', async () => {
    const fixture = TestBed.createComponent(ProjExpandableDemo);
    await fixture.whenStable();
    const long = (fixture.nativeElement as HTMLElement).querySelector('app-proj-expandable')!;
    const extra = long.querySelector('div')!;
    expect(extra.hidden).toBe(true);

    long.querySelector('button')!.click();
    await fixture.whenStable();
    expect(extra.hidden).toBe(false);
    expect(long.querySelector('button')?.textContent?.trim()).toBe('Read less');
  });
});
