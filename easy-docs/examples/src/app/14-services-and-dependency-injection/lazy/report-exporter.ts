import {Service} from '@angular/core';

@Service()
export class DiReportExporter {
  toCsv(rows: string[][]): string {
    return rows.map((row) => row.join(',')).join('\n');
  }
}
