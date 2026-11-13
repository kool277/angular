import {Component, injectAsync, signal} from '@angular/core';

@Component({
  selector: 'app-di-report',
  template: `
    <button type="button" (click)="export()">Export as CSV</button>
    <pre>{{ csv() }}</pre>
  `,
})
export class DiReport {
  private readonly exporter = injectAsync(() =>
    import('./report-exporter').then((m) => m.DiReportExporter),
  );
  protected readonly csv = signal('');

  async export(): Promise<void> {
    const exporter = await this.exporter();
    this.csv.set(
      exporter.toCsv([
        ['dish', 'orders'],
        ['plov', '12'],
      ]),
    );
  }
}
