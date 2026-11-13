import {Component, computed, input, signal, viewChildren} from '@angular/core';

@Component({
  selector: 'app-proj-vote',
  template: `
    {{ name() }}: {{ votes() }}
    <button type="button" (click)="votes.set(votes() + 1)">+1</button>
  `,
})
export class ProjVote {
  readonly name = input.required<string>();
  readonly votes = signal(0);
}

@Component({
  selector: 'app-proj-poll',
  imports: [ProjVote],
  template: `
    @for (dish of dishes(); track dish) {
      <p><app-proj-vote [name]="dish" /></p>
    }
    <button type="button" (click)="dishes.set([...dishes(), 'Manti'])">Add Manti</button>
    <p class="total">{{ options().length }} dishes, {{ total() }} votes</p>
  `,
})
export class ProjPoll {
  readonly dishes = signal(['Plov', 'Lagman']);
  private readonly options = viewChildren(ProjVote);
  protected readonly total = computed(() =>
    this.options().reduce((sum, option) => sum + option.votes(), 0),
  );
}
