// #docregion class
import {AnimationCallbackEvent, Component, signal} from '@angular/core';

export interface Toast {
  id: number;
  text: string;
}

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.html',
  styleUrl: './toast-list.css',
})
export class AnimToastList {
  toasts = signal<Toast[]>([]);
  private nextId = 1;

  add(text: string) {
    this.toasts.update((list) => [...list, {id: this.nextId++, text}]);
  }

  close(id: number) {
    this.toasts.update((list) => list.filter((toast) => toast.id !== id));
  }

  // #docregion slide-away
  slideAway(event: AnimationCallbackEvent) {
    const animation = event.target.animate(
      [
        {opacity: 1, transform: 'translateX(0)'},
        {opacity: 0, transform: 'translateX(100%)'},
      ],
      {duration: 250, easing: 'ease-in'},
    );
    animation.finished.then(() => event.animationComplete());
  }
  // #enddocregion slide-away
}
// #enddocregion class
