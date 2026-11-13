import {Component, computed, inject, input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

// A YouTube video ID has exactly 11 letters, digits, "-" or "_".
const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

@Component({
  selector: 'app-trusted-video',
  template: `
    @if (videoUrl(); as url) {
      <iframe [src]="url" title="Museum video" width="560" height="315"></iframe>
    } @else {
      <p class="error">This is not a valid video ID.</p>
    }
  `,
})
export class SecTrustedVideo {
  private sanitizer = inject(DomSanitizer);

  videoId = input.required<string>();

  // #docregion trust
  videoUrl = computed<SafeResourceUrl | null>(() => {
    const id = this.videoId();
    if (!VIDEO_ID.test(id)) {
      return null; // never trust a value you have not checked
    }
    // Safe: the host is fixed, and the ID can only contain the characters checked above.
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${id}`,
    );
  });
  // #enddocregion trust
}
