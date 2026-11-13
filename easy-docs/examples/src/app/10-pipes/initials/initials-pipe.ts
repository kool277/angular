import {Pipe, PipeTransform} from '@angular/core';
import {toInitials} from './initials';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(fullName: string, maxLetters = 2): string {
    return toInitials(fullName, maxLetters);
  }
}
