import {TestBed} from '@angular/core/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {AnimLegacyList} from './legacy-list';

describe('AnimLegacyList (older @angular/animations code)', () => {
  it('shows all items after the staggered animation', async () => {
    TestBed.configureTestingModule({providers: [provideNoopAnimations()]});
    const fixture = TestBed.createComponent(AnimLegacyList);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('li').length).toBe(3);
  });
});
