import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user-badge',
  template: `<p>{{ name() }} ({{ role() }})</p>`,
})
export class InputsUserBadge {
  readonly name = input.required<string>();
  readonly role = input('guest');
}

@Component({
  selector: 'app-user-badge-demo',
  imports: [InputsUserBadge],
  template: `
    <app-user-badge name="Aziza" role="admin" />
    <app-user-badge [name]="visitor" />
  `,
})
export class InputsUserBadgeDemo {
  visitor = 'Timur';
}
