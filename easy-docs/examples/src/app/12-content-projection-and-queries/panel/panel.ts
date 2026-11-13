import {Component} from '@angular/core';

// #docregion panel
@Component({
  selector: 'app-proj-panel',
  template: `
    <section>
      <header><ng-content select="[panel-title]" /></header>
      <div class="body"><ng-content /></div>
      <footer>
        <ng-content select="[panel-footer]">No actions.</ng-content>
      </footer>
    </section>
  `,
})
export class ProjPanel {}
// #enddocregion panel

@Component({
  selector: 'app-proj-panel-demo',
  imports: [ProjPanel],
  template: `
    <!-- #docregion usage -->
    <app-proj-panel>
      <h3 panel-title>Today's order</h3>
      <p>2 × green tea</p>
      <p>1 × honey cake</p>
      <button type="button" panel-footer>Pay now</button>
    </app-proj-panel>

    <app-proj-panel>
      <h3 panel-title>Yesterday's order</h3>
      <p>Already paid.</p>
    </app-proj-panel>
    <!-- #enddocregion usage -->

    <!-- #docregion project-as -->
    <app-proj-panel>
      <ng-container ngProjectAs="[panel-title]">
        <h3>Weekly report</h3>
        <small>Monday to Sunday</small>
      </ng-container>
      <p>12 orders.</p>
    </app-proj-panel>
    <!-- #enddocregion project-as -->
  `,
})
export class ProjPanelDemo {}
