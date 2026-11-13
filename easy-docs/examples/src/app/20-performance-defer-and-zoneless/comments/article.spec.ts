import {TestBed} from '@angular/core/testing';
import {PerfArticle} from './article';

describe('PerfArticle', () => {
  it('shows the button first and the comments after a click', async () => {
    const fixture = TestBed.createComponent(PerfArticle);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('app-perf-comments')).toBeNull();

    element.querySelector('button')!.click();
    await fixture.whenStable();
    expect(element.querySelector('app-perf-comments')?.textContent).toContain('Great article!');
    expect(element.querySelector('button')).toBeNull();
  });
});
