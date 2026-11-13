import {Component} from '@angular/core';
import {ProjTab, ProjTabs} from './tabs';
import {ProjRecipeStep} from './recipe-step';

@Component({
  selector: 'app-proj-recipe-tabs',
  imports: [ProjTabs, ProjTab, ProjRecipeStep],
  template: `
    <app-proj-tabs>
      <ng-template appTab="Ingredients">
        <ul>
          <li>Rice</li>
          <li>Carrots</li>
        </ul>
      </ng-template>
      <ng-template appTab="Steps">
        <app-proj-recipe-step text="Fry the meat." />
        <app-proj-recipe-step text="Add carrots and rice." />
      </ng-template>
    </app-proj-tabs>
  `,
})
export class ProjRecipeTabs {}
