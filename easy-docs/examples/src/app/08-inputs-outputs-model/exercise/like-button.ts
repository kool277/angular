import {Component, computed, input, model, signal} from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: `
    <button [class.liked]="liked()" (click)="liked.set(!liked())">
      {{ liked() ? '♥' : '♡' }} {{ label() }}
    </button>
  `,
})
export class InputsLikeButton {
  readonly label = input('Like');
  readonly liked = model(false);
}

@Component({
  selector: 'app-like-demo',
  imports: [InputsLikeButton],
  template: `
    <app-like-button label="Plov recipe" [(liked)]="likesPlov" />
    <app-like-button label="Somsa recipe" [(liked)]="likesSomsa" />
    <p>You like {{ count() }} recipes.</p>
  `,
})
export class InputsLikeDemo {
  readonly likesPlov = signal(true);
  readonly likesSomsa = signal(false);
  readonly count = computed(() => Number(this.likesPlov()) + Number(this.likesSomsa()));
}
