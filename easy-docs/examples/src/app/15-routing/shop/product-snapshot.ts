import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `<p>Product {{ id }}, sorted by {{ sort }}</p>`,
})
export class RoutingProductSnapshot {
  private readonly route = inject(ActivatedRoute);

  // Read once, when the component is created.
  readonly id = this.route.snapshot.paramMap.get('id');
  readonly sort = this.route.snapshot.queryParamMap.get('sort') ?? 'nothing';
}
