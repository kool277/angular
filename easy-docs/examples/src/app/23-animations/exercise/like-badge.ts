import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-like-badge',
  template: `
    <button (click)="liked.set(!liked())">{{ liked() ? 'Unlike' : 'Like' }}</button>
    @if (liked()) {
      <span class="badge" animate.enter="pop-in" animate.leave="pop-out">♥ Liked</span>
    }
  `,
  styles: `
    .badge {
      display: inline-block;
      margin-left: 8px;
    }
    .pop-in {
      animation: pop 200ms ease-out;
    }
    .pop-out {
      animation: pop 200ms ease-in reverse;
    }
    @keyframes pop {
      from {
        opacity: 0;
        transform: scale(0.5);
      }
    }
  `,
})
export class AnimLikeBadge {
  liked = signal(false);
}
