import {Component, linkedSignal, signal} from '@angular/core';

interface Method {
  id: number;
  name: string;
}

@Component({
  selector: 'app-shipping-picker',
  template: `
    @for (option of options(); track option.id) {
      <button type="button" (click)="choose(option)">{{ option.name }}</button>
    }
    <p>Selected: {{ selected().name }}</p>
    <p>Kept selection: {{ kept().name }}</p>
    <button type="button" class="change" (click)="changeCountry()">Change country</button>
  `,
})
export class SignalsShippingPicker {
  readonly options = signal<Method[]>([
    {id: 1, name: 'Post'},
    {id: 2, name: 'Courier'},
    {id: 3, name: 'Pick up'},
  ]);

  // #docregion simple
  // Starts as the first option. You can set it.
  // When `options` changes, it goes back to the first option.
  readonly selected = linkedSignal(() => this.options()[0]);
  // #enddocregion simple

  // #docregion previous
  // Keeps the user's choice when it still exists in the new list.
  readonly kept = linkedSignal<Method[], Method>({
    source: this.options,
    computation: (newOptions, previous) =>
      newOptions.find((option) => option.id === previous?.value.id) ?? newOptions[0],
  });
  // #enddocregion previous

  choose(option: Method) {
    this.selected.set(option);
    this.kept.set(option);
  }

  changeCountry() {
    this.options.set([
      {id: 4, name: 'Drone'},
      {id: 2, name: 'Courier'},
    ]);
  }
}
