// #docregion directive
import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appShowFor]',
})
export class DirShowFor {
  private readonly template = inject(TemplateRef);
  private readonly container = inject(ViewContainerRef);
  private shown = false;

  readonly appShowFor = input.required<string[]>();
  readonly appShowForRole = input.required<string>();

  constructor() {
    effect(() => {
      const allowed = this.appShowFor().includes(this.appShowForRole());
      if (allowed && !this.shown) {
        this.container.createEmbeddedView(this.template);
        this.shown = true;
      } else if (!allowed && this.shown) {
        this.container.clear();
        this.shown = false;
      }
    });
  }
}
// #enddocregion directive

// #docregion demo
@Component({
  selector: 'app-show-for-demo',
  imports: [DirShowFor],
  template: `
    <!-- #docregion usage -->
    <p>Signed in as: {{ role() }}</p>
    <button type="button" *appShowFor="['admin', 'editor']; role: role()">Edit post</button>
    <button type="button" *appShowFor="['admin']; role: role()">Delete post</button>
    <!-- #enddocregion usage -->
    <!-- #docregion long-form -->
    <ng-template [appShowFor]="['admin']" [appShowForRole]="role()">
      <p class="admin-note">Only admins see this note.</p>
    </ng-template>
    <!-- #enddocregion long-form -->
    <!-- #docregion nested -->
    @if (ready()) {
      <button type="button" *appShowFor="['admin']; role: role()">Publish</button>
    }
    <!-- #enddocregion nested -->
    <button type="button" (click)="role.set('admin')">Become admin</button>
    <button type="button" (click)="role.set('guest')">Become guest</button>
  `,
})
export class DirShowForDemo {
  readonly role = signal('editor');
  readonly ready = signal(true);
}
// #enddocregion demo
