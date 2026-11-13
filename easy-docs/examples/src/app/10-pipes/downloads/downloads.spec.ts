import {TestBed} from '@angular/core/testing';
import {PipesDownloads} from './downloads';
import {FileSizePipe} from './file-size-pipe';

describe('PipesDownloads', () => {
  it('formats every column with a pipe', async () => {
    const fixture = TestBed.createComponent(PipesDownloads);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const rows = Array.from(page.querySelectorAll('tr'))
      .slice(1)
      .map((tr) => Array.from(tr.querySelectorAll('td')).map((td) => td.textContent));

    expect(rows).toEqual([
      ['Holiday Photos', '3.3 MB', '2 Nov, 14:05', '100%'],
      ['Lesson Video', '1.2 GB', '12 Nov, 08:00', '42%'],
      ['Notes', '812 B', '13 Nov, 19:45', '0%'],
    ]);
    expect(page.querySelector('p')?.textContent).toBe('Total: 1.2 GB');
  });

  it('FileSizePipe uses the parameter for the number of digits', () => {
    const pipe = new FileSizePipe();
    expect(pipe.transform(1536)).toBe('1.5 KB');
    expect(pipe.transform(1_600_000, 2)).toBe('1.53 MB');
  });
});
