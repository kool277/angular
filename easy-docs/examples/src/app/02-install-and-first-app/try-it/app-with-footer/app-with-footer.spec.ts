import {TestBed} from '@angular/core/testing';
import {FirstAppWithFooter} from './app-with-footer';

describe('FirstAppWithFooter', () => {
  it('should show the footer as the last part of the page', async () => {
    const fixture = TestBed.createComponent(FirstAppWithFooter);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.lastElementChild?.tagName).toBe('APP-FOOTER');
    expect(compiled.querySelector('footer')?.textContent).toBe('Made by Amina in 2026');
  });
});
