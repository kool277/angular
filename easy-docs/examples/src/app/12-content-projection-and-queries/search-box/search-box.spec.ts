import {TestBed} from '@angular/core/testing';
import {ProjSearchBox} from './search-box';

describe('ProjSearchBox', () => {
  it('focuses the input found by viewChild', async () => {
    const fixture = TestBed.createComponent(ProjSearchBox);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector('button')!.click();
    expect(document.activeElement).toBe(page.querySelector('input'));
  });
});
