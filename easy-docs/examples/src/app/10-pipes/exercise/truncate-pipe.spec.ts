import {TestBed} from '@angular/core/testing';
import {PipesNewsList} from './news-list';
import {TruncatePipe} from './truncate-pipe';

describe('TruncatePipe', () => {
  it('keeps short text and cuts long text', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('Short')).toBe('Short');
    expect(pipe.transform('This sentence is much too long')).toBe('This sentence is muc…');
    expect(pipe.transform('Hello world', 6)).toBe('Hello…');
  });

  it('cuts the titles in the news list', async () => {
    const fixture = TestBed.createComponent(PipesNewsList);
    await fixture.whenStable();
    const items = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('li')).map(
      (li) => li.textContent,
    );
    expect(items).toEqual(['Snow in Bukhara', 'New metro line…', 'Plov festival']);
  });
});
