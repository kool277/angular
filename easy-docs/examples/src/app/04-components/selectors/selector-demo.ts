import {Component} from '@angular/core';
import {CompDeleteButton} from './delete-button';

@Component({
  selector: 'app-selector-demo',
  imports: [CompDeleteButton],
  template: `
    <button type="button" app-delete-button aria-label="Delete the photo"></button>
    <button type="button">A normal button</button>
  `,
})
export class CompSelectorDemo {}
