import {TestBed} from '@angular/core/testing';
import {StylingFooter} from './deep-legacy';

describe('::ng-deep', () => {
  it('reaches into a child component, a normal rule does not', async () => {
    const fixture = TestBed.createComponent(StylingFooter);
    await fixture.whenStable();
    const link = (fixture.nativeElement as HTMLElement).querySelector('a')!;
    // The normal rule `a { color: red }` does not reach the child's <a>.
    expect(getComputedStyle(link).color).not.toBe('rgb(255, 0, 0)');
    // The ::ng-deep rule does.
    expect(getComputedStyle(link).textDecoration).toBe('none');
  });
});
