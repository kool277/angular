import {TestBed} from '@angular/core/testing';
import {DirShowForDemo} from './show-for';

describe('DirShowFor', () => {
  function buttonTexts(page: HTMLElement): string[] {
    return Array.from(page.querySelectorAll('button')).map((b) => b.textContent!.trim());
  }

  it('renders the template only for allowed roles', async () => {
    const fixture = TestBed.createComponent(DirShowForDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(buttonTexts(page)).toEqual(['Edit post', 'Become admin', 'Become guest']);
    expect(page.querySelector('.admin-note')).toBeNull();
  });

  it('adds and removes elements when the role changes', async () => {
    const fixture = TestBed.createComponent(DirShowForDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    fixture.componentInstance.role.set('admin');
    await fixture.whenStable();
    expect(buttonTexts(page)).toEqual([
      'Edit post',
      'Delete post',
      'Publish',
      'Become admin',
      'Become guest',
    ]);
    expect(page.querySelector('.admin-note')?.textContent).toBe('Only admins see this note.');

    fixture.componentInstance.role.set('guest');
    await fixture.whenStable();
    expect(buttonTexts(page)).toEqual(['Become admin', 'Become guest']);
    expect(page.querySelector('.admin-note')).toBeNull();
  });
});
