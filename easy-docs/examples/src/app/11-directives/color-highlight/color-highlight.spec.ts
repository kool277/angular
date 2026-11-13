import {TestBed} from '@angular/core/testing';
import {DirColorHighlightDemo} from './color-highlight';

describe('DirColorHighlight', () => {
  async function hoverAll() {
    const fixture = TestBed.createComponent(DirColorHighlightDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const lines = Array.from(page.querySelectorAll('p'));
    lines.forEach((line) => line.dispatchEvent(new MouseEvent('mouseenter')));
    await fixture.whenStable();
    return {fixture, page, lines};
  }

  it('uses the bound color, then defaultColor, then yellow', async () => {
    const {lines} = await hoverAll();
    expect(lines.map((line) => line.style.backgroundColor)).toEqual([
      'lightgreen',
      'lightblue',
      'yellow',
    ]);
  });

  it('follows changes of the bound value', async () => {
    const {fixture, page, lines} = await hoverAll();
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(lines[0].style.backgroundColor).toBe('pink');
  });
});
