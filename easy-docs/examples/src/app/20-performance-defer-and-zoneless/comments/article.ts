import {Component} from '@angular/core';
import {PerfComments} from './comments';

@Component({
  selector: 'app-perf-article',
  imports: [PerfComments],
  template: `
    <h2>How plants drink water</h2>
    <p>Roots take water from the soil and send it up to the leaves.</p>

    @defer (on interaction) {
      <app-perf-comments />
    } @placeholder {
      <button type="button">Show comments</button>
    } @loading {
      <p>Loading comments…</p>
    }
  `,
})
export class PerfArticle {}
