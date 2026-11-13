import {Component} from '@angular/core';
import {TruncatePipe} from './truncate-pipe';

@Component({
  selector: 'app-news-list',
  imports: [TruncatePipe],
  template: `
    <ul>
      @for (title of titles; track title) {
        <li>{{ title | truncate: 15 }}</li>
      }
    </ul>
  `,
})
export class PipesNewsList {
  titles = ['Snow in Bukhara', 'New metro line opens next spring', 'Plov festival'];
}
