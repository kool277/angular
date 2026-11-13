import {Pipe, PipeTransform} from '@angular/core';

// #docregion pure
@Pipe({
  name: 'joinNames',
})
export class JoinNamesPipe implements PipeTransform {
  transform(names: string[]): string {
    return names.join(', ');
  }
}
// #enddocregion pure

// #docregion impure
@Pipe({
  name: 'joinNamesImpure',
  pure: false,
})
export class JoinNamesImpurePipe implements PipeTransform {
  transform(names: string[]): string {
    return names.join(', ');
  }
}
// #enddocregion impure
