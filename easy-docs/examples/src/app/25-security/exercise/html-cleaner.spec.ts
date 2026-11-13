import {TestBed} from '@angular/core/testing';
import {SecHtmlCleaner} from './html-cleaner';

describe('SecHtmlCleaner', () => {
  it('keeps safe tags and removes scripts and event handlers', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const cleaner = TestBed.inject(SecHtmlCleaner);

    expect(cleaner.clean('<i>Open</i> daily<script>alert(1)</script>')).toBe('<i>Open</i> daily');
    expect(cleaner.clean('<img src="x.png" onerror="alert(1)">')).toBe('<img src="x.png">');
    vi.restoreAllMocks();
  });
});
