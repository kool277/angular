import {Component, DestroyRef, effect, inject, input, signal} from '@angular/core';

@Component({
  selector: 'app-life-page-title',
  template: `<h1>{{ title() }}</h1>`,
})
export class LifePageTitle {
  readonly title = input.required<string>();

  constructor() {
    const oldTitle = document.title;
    effect(() => {
      document.title = this.title();
    });
    inject(DestroyRef).onDestroy(() => {
      document.title = oldTitle;
    });
  }
}

@Component({
  selector: 'app-life-page-title-demo',
  imports: [LifePageTitle],
  template: `
    <button type="button" (click)="open.set(!open())">Open or close the inbox</button>
    @if (open()) {
      <app-life-page-title [title]="'Inbox (' + unread() + ')'" />
    }
  `,
})
export class LifePageTitleDemo {
  readonly open = signal(true);
  readonly unread = signal(3);
}
