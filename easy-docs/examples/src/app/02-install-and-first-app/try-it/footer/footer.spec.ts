import {TestBed} from '@angular/core/testing';
import {FirstAppFooter} from './footer';

describe('FirstAppFooter', () => {
  it('should show the footer text', async () => {
    const fixture = TestBed.createComponent(FirstAppFooter);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer')?.textContent).toBe('Made by Amina in 2026');
  });
});
