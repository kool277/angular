import {TestBed} from '@angular/core/testing';
import {ProjOldSearchBox} from './old-search-box';

describe('ProjOldSearchBox', () => {
  it('works like the viewChild version, but the field is not a signal', async () => {
    const fixture = TestBed.createComponent(ProjOldSearchBox);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance.box.nativeElement).toBe(page.querySelector('input'));
    page.querySelector('button')!.click();
    expect(document.activeElement).toBe(page.querySelector('input'));
  });
});
