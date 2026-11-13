import {Component} from '@angular/core';

@Component({
  selector: 'app-proj-card',
  template: `
    <div class="card">
      <ng-content />
    </div>
  `,
  styles: `
    .card {
      padding: 12px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    }
  `,
})
export class ProjCard {}

@Component({
  selector: 'app-proj-card-demo',
  imports: [ProjCard],
  template: `
    <app-proj-card>
      <h3>Plov</h3>
      <p>Rice, carrots, onions and meat.</p>
    </app-proj-card>
    <app-proj-card>
      <p>Any content works: {{ guests }} guests are coming.</p>
    </app-proj-card>
  `,
})
export class ProjCardDemo {
  guests = 6;
}
