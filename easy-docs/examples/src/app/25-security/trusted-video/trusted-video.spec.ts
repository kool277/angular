import {TestBed} from '@angular/core/testing';
import {SecTrustedVideo} from './trusted-video';

describe('SecTrustedVideo', () => {
  it('embeds a video with a checked ID', async () => {
    const fixture = TestBed.createComponent(SecTrustedVideo);
    fixture.componentRef.setInput('videoId', 'dQw4w9WgXcQ');
    await fixture.whenStable();
    const iframe = (fixture.nativeElement as HTMLElement).querySelector('iframe')!;
    expect(iframe.src).toBe('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ');
  });

  it('refuses an ID that could change the URL', async () => {
    const fixture = TestBed.createComponent(SecTrustedVideo);
    fixture.componentRef.setInput('videoId', '../../evil.example/x');
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('iframe')).toBeNull();
    expect(page.querySelector('.error')?.textContent).toContain('not a valid');
  });
});
