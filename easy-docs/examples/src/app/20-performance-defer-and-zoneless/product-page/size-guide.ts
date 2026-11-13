import {Component} from '@angular/core';

@Component({
  selector: 'app-perf-size-guide',
  template: `
    <table>
      <thead>
        <tr>
          <th>EU</th>
          <th>US</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>42</td>
          <td>9</td>
        </tr>
        <tr>
          <td>43</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class PerfSizeGuide {}
