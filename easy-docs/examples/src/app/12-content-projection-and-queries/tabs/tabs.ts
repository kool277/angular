import {NgTemplateOutlet} from '@angular/common';
import {
  Component,
  Directive,
  TemplateRef,
  computed,
  contentChildren,
  inject,
  input,
  signal,
} from '@angular/core';

// #docregion tab
@Directive({selector: 'ng-template[appTab]'})
export class ProjTab {
  readonly label = input.required<string>({alias: 'appTab'});
  readonly template = inject(TemplateRef);
}
// #enddocregion tab

// #docregion tabs
@Component({
  selector: 'app-proj-tabs',
  imports: [NgTemplateOutlet],
  template: `
    <div role="tablist">
      @for (tab of tabs(); track tab; let i = $index) {
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="i === selected()"
          (click)="selected.set(i)"
        >
          {{ tab.label() }}
        </button>
      }
    </div>
    <div role="tabpanel">
      <ng-container [ngTemplateOutlet]="current()?.template ?? null" />
    </div>
  `,
})
export class ProjTabs {
  protected readonly tabs = contentChildren(ProjTab);
  protected readonly selected = signal(0);
  protected readonly current = computed(() => this.tabs()[this.selected()]);
}
// #enddocregion tabs
