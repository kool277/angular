import {Pipe, PipeTransform} from '@angular/core';

/** 'ada lovelace' → 'AL' */
@Pipe({name: 'initials'})
export class TestingInitialsPipe implements PipeTransform {
  transform(name: string): string {
    return name
      .split(' ')
      .filter((part) => part !== '')
      .map((part) => part[0].toUpperCase())
      .join('');
  }
}
