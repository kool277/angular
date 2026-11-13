import {TestBed} from '@angular/core/testing';
import {A11yNoteEditor} from './note-editor';

describe('A11yNoteEditor', () => {
  it('is a toolbar that the keyboard reaches with one Tab stop', async () => {
    const fixture = TestBed.createComponent(A11yNoteEditor);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const toolbar = element.querySelector('[ngToolbar]')!;
    const buttons = element.querySelectorAll('button');
    expect(toolbar.getAttribute('role')).toBe('toolbar');
    expect([...buttons].map((b) => b.getAttribute('tabindex'))).toEqual(['0', '-1', '-1']);

    toolbar.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true}));
    await fixture.whenStable();
    expect([...buttons].map((b) => b.getAttribute('tabindex'))).toEqual(['-1', '0', '-1']);
  });

  it('shows whether Bold is on, and formats the text', async () => {
    const fixture = TestBed.createComponent(A11yNoteEditor);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const bold = element.querySelector('button')!;
    expect(bold.getAttribute('aria-pressed')).toBe('false');

    bold.click();
    await fixture.whenStable();
    expect(bold.getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('textarea')!.classList).toContain('bold');
  });

  it('announces that the note was saved', async () => {
    const fixture = TestBed.createComponent(A11yNoteEditor);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    element.querySelectorAll('button')[2].click();
    await fixture.whenStable();
    expect(element.querySelector('[role="status"]')!.textContent).toBe('Note saved.');
  });
});
