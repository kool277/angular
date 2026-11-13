import {TestBed} from '@angular/core/testing';
import {DirHighlightDemo} from './highlight';

describe('DirHighlight', () => {
  it('colors only the element under the mouse', async () => {
    const fixture = TestBed.createComponent(DirHighlightDemo);
    await fixture.whenStable();
    const lines = (fixture.nativeElement as HTMLElement).querySelectorAll('p');

    lines[0].dispatchEvent(new MouseEvent('mouseenter'));
    await fixture.whenStable();
    expect(lines[0].style.backgroundColor).toBe('yellow');
    expect(lines[1].style.backgroundColor).toBe('');

    lines[0].dispatchEvent(new MouseEvent('mouseleave'));
    await fixture.whenStable();
    expect(lines[0].style.backgroundColor).toBe('');
  });

  it('does nothing to elements without the attribute', async () => {
    const fixture = TestBed.createComponent(DirHighlightDemo);
    await fixture.whenStable();
    const plain = (fixture.nativeElement as HTMLElement).querySelectorAll('p')[2];
    plain.dispatchEvent(new MouseEvent('mouseenter'));
    await fixture.whenStable();
    expect(plain.style.backgroundColor).toBe('');
  });
});
