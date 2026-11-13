import {TestBed} from '@angular/core/testing';
import {DirIconButtonDemo} from './icon-button';

describe('DirIconButton', () => {
  it('gets title and aria-label from the host directive input "hint"', async () => {
    const fixture = TestBed.createComponent(DirIconButtonDemo);
    await fixture.whenStable();
    const button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    expect(button.textContent).toBe('🗑');
    expect(button.getAttribute('title')).toBe('Delete');
    expect(button.getAttribute('aria-label')).toBe('Delete');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('gets the pressed class and the pressed output from the other host directive', async () => {
    const fixture = TestBed.createComponent(DirIconButtonDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const button = page.querySelector('button')!;

    button.dispatchEvent(new Event('pointerdown'));
    await fixture.whenStable();
    expect(button.classList).toContain('pressed');

    button.dispatchEvent(new Event('pointerup'));
    await fixture.whenStable();
    expect(button.classList).not.toContain('pressed');
    expect(page.querySelector('p')?.textContent).toBe('Deleted.');
  });
});
