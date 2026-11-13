import {TestBed} from '@angular/core/testing';
import {TplScoreTable} from './score-table';

describe('TplScoreTable', () => {
  it('sets HTML attributes', async () => {
    const fixture = TestBed.createComponent(TplScoreTable);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('td')!.getAttribute('colspan')).toBe('2');
    expect(page.querySelector('button')!.getAttribute('aria-label')).toBe('Close the score table');
  });

  it('leaves out an attribute whose value is null', async () => {
    const fixture = TestBed.createComponent(TplScoreTable);
    await fixture.whenStable();

    const button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    expect(button.hasAttribute('title')).toBe(false);
  });
});
