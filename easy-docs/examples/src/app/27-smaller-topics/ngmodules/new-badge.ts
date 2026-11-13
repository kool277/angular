import {Component, input, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'shout'})
export class ModulesShoutPipeStandalone implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase() + '!';
  }
}

@Component({
  selector: 'app-new-badge',
  imports: [ModulesShoutPipeStandalone],
  template: `
    @if (label()) {
      <span class="badge">{{ label() | shout }}</span>
    }
  `,
})
export class ModulesNewBadge {
  label = input('');
}
