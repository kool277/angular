import {TestBed} from '@angular/core/testing';
import {TplWhitespace} from './whitespace';

describe('TplWhitespace', () => {
  it('collapses spaces in text to one space', async () => {
    const fixture = TestBed.createComponent(TplWhitespace);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.collapsed')?.textContent).toBe('Hello world');
  });

  it('keeps the space written as &ngsp;', async () => {
    const fixture = TestBed.createComponent(TplWhitespace);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.kept')?.textContent).toBe('Hello world');
  });
});
