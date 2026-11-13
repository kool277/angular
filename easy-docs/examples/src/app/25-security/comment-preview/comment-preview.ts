import {Component} from '@angular/core';

@Component({
  selector: 'app-comment-preview',
  template: `
    <p class="as-text">{{ comment }}</p>
    <p class="as-html" [innerHTML]="comment"></p>
    <a class="link" [href]="website">Visitor's website</a>
  `,
})
export class SecCommentPreview {
  // Pretend that a visitor typed these values into a form.
  comment = '<b>Great</b> museum!<script>alert(1)</script>';
  website = 'javascript:alert(1)';
}
