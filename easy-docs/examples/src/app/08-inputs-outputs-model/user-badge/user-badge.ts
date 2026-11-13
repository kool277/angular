import {Component, input} from '@angular/core';

@Component({
  selector: 'app-role-badge',
  template: `<p>{{ name() }} ({{ role() }})</p>`,
})
export class InputsUserBadge {
  readonly name = input.required<string>();
  readonly role = input('guest');
}

@Component({
  selector: 'app-role-badge-demo',
  imports: [InputsUserBadge],
  template: `
    <app-role-badge name="Aziza" role="admin" />
    <app-role-badge [name]="visitor" />
  `,
})
export class InputsUserBadgeDemo {
  visitor = 'Timur';
}
