import {TestBed} from '@angular/core/testing';
import {DiDraftStore} from './draft-store';
import {DiNoteEditorDemo} from './note-editor';

describe('DiNoteEditor with its own DiDraftStore', () => {
  it('gives each editor its own store', async () => {
    const fixture = TestBed.createComponent(DiNoteEditorDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const [first] = Array.from(page.querySelectorAll('textarea'));
    first.value = 'Milk';
    first.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    const counts = Array.from(page.querySelectorAll('small')).map((s) => s.textContent);
    expect(counts).toEqual(['4 characters', '0 characters']);
  });

  it('destroys the store together with its component', async () => {
    DiDraftStore.destroyed = 0;
    const fixture = TestBed.createComponent(DiNoteEditorDemo);
    await fixture.whenStable();
    fixture.componentInstance.showWork.set(false);
    await fixture.whenStable();
    expect(DiDraftStore.destroyed).toBe(1);
  });
});
