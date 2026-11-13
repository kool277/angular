import {Component} from '@angular/core';
import {InitialsPipe} from './initials-pipe';

@Component({
  selector: 'app-initials-demo',
  imports: [InitialsPipe],
  template: `
    <p>{{ 'aziza karimova' | initials }}</p>
    <p>{{ 'Ali ibn Sino Buxoriy' | initials: 3 }}</p>
  `,
})
export class PipesInitialsDemo {}
