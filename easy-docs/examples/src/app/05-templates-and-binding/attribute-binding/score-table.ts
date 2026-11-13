import {Component} from '@angular/core';

@Component({
  selector: 'app-score-table',
  template: `
    <table>
      <tr>
        <!-- #docregion colspan -->
        <td [attr.colspan]="columns">Final scores</td>
        <!-- #enddocregion colspan -->
      </tr>
      <tr>
        <td>Amina</td>
        <td>42</td>
      </tr>
    </table>
    <button type="button" [aria-label]="closeLabel" [attr.title]="tooltip">✖</button>
  `,
})
export class TplScoreTable {
  columns = 2;
  closeLabel = 'Close the score table';
  tooltip: string | null = null;
}
