import {TestBed} from '@angular/core/testing';
import {SecCommentPreview} from './comment-preview';

describe('SecCommentPreview', () => {
  afterEach(() => vi.restoreAllMocks());

  it('shows interpolated HTML as plain text', async () => {
    const fixture = TestBed.createComponent(SecCommentPreview);
    await fixture.whenStable();
    const asText = (fixture.nativeElement as HTMLElement).querySelector('.as-text')!;
    expect(asText.textContent).toBe('<b>Great</b> museum!<script>alert(1)</script>');
    expect(asText.querySelector('b')).toBeNull();
  });

  it('keeps <b> but removes <script> in [innerHTML]', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const fixture = TestBed.createComponent(SecCommentPreview);
    await fixture.whenStable();
    const asHtml = (fixture.nativeElement as HTMLElement).querySelector('.as-html')!;
    expect(asHtml.innerHTML).toBe('<b>Great</b> museum!');
    expect(asHtml.querySelector('script')).toBeNull();
  });

  it('makes a javascript: URL harmless', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const fixture = TestBed.createComponent(SecCommentPreview);
    await fixture.whenStable();
    const link = (fixture.nativeElement as HTMLElement).querySelector('a')!;
    expect(link.getAttribute('href')).toBe('unsafe:javascript:alert(1)');
  });

  it('warns in development mode when it changes a value', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const fixture = TestBed.createComponent(SecCommentPreview);
    await fixture.whenStable();
    expect(warn).toHaveBeenCalledWith(
      'WARNING: sanitizing HTML stripped some content, see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss',
    );
    expect(warn).toHaveBeenCalledWith(
      'WARNING: sanitizing unsafe URL value javascript:alert(1) (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss)',
    );
  });
});
