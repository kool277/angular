import {TestBed} from '@angular/core/testing';
import {AnimSlideNote} from './slide-note';

describe('AnimSlideNote', () => {
  it('shows the note after a click', async () => {
    const fixture = TestBed.createComponent(AnimSlideNote);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('.note')?.textContent).toContain('sold out');
  });
});
