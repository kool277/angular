import {CommonModule} from '@angular/common';
import {Component, Input, NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'shout', standalone: false})
export class ModulesShoutPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase() + '!';
  }
}

@Component({
  selector: 'app-old-badge',
  standalone: false,
  template: `<span class="badge" *ngIf="label">{{ label | shout }}</span>`,
})
export class ModulesOldBadge {
  @Input() label = '';
}

// #docregion module
@NgModule({
  declarations: [ModulesOldBadge, ModulesShoutPipe],
  imports: [CommonModule],
  exports: [ModulesOldBadge],
})
export class ModulesBadgeModule {}
// #enddocregion module
