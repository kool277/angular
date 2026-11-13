import {inject, SecurityContext, Service} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Service()
export class SecHtmlCleaner {
  private sanitizer = inject(DomSanitizer);

  clean(html: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
  }
}
