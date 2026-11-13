import {Pipe, PipeTransform} from '@angular/core';

const UNITS = ['B', 'KB', 'MB', 'GB'];

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(bytes: number, digits = 1): string {
    let size = bytes;
    let unit = 0;
    while (size >= 1024 && unit < UNITS.length - 1) {
      size = size / 1024;
      unit = unit + 1;
    }
    // toFixed rounds; Number() removes zeros at the end ("3.0" becomes 3).
    return `${Number(size.toFixed(digits))} ${UNITS[unit]}`;
  }
}
