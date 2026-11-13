import {Component, Directive, computed, contentChild, signal} from '@angular/core';

@Directive({selector: '[appMore]'})
export class ProjMore {}

// #docregion expandable
@Component({
  selector: 'app-proj-expandable',
  template: `
    <ng-content />
    <div [hidden]="!open()">
      <ng-content select="[appMore]" />
    </div>
    @if (hasMore()) {
      <button type="button" (click)="open.set(!open())">
        {{ open() ? 'Read less' : 'Read more' }}
      </button>
    }
  `,
})
export class ProjExpandable {
  private readonly more = contentChild(ProjMore);
  protected readonly hasMore = computed(() => this.more() !== undefined);
  protected readonly open = signal(false);
}
// #enddocregion expandable

@Component({
  selector: 'app-proj-expandable-demo',
  imports: [ProjExpandable, ProjMore],
  template: `
    <!-- #docregion usage -->
    <app-proj-expandable>
      <p>Samarkand is one of the oldest cities in Central Asia.</p>
      <p appMore>Its Registan square has three madrasahs.</p>
    </app-proj-expandable>

    <app-proj-expandable>
      <p>Short news: the museum opens at 9.</p>
    </app-proj-expandable>
    <!-- #enddocregion usage -->
  `,
})
export class ProjExpandableDemo {}
