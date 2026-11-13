import {booleanAttribute, Component, input} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
  host: {
    '[class.compact]': 'compact()',
    '[style.--accent]': 'accent()',
  },
})
export class StylingProfileCard {
  readonly name = input.required<string>();
  readonly job = input('');
  readonly accent = input('teal');
  readonly compact = input(false, {transform: booleanAttribute});
}

@Component({
  selector: 'app-profile-card-demo',
  imports: [StylingProfileCard],
  template: `
    <app-profile-card name="Dilnoza" job="Designer" />
    <app-profile-card name="Rustam" job="Developer" accent="purple" compact />
  `,
})
export class StylingProfileCardDemo {}
