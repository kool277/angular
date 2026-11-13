import {Component} from '@angular/core';

@Component({
  selector: 'app-ssr-comments',
  template: `<p>12 comments</p>`,
})
export class SsrComments {}

@Component({
  selector: 'app-ssr-related',
  template: `<p>Related articles</p>`,
})
export class SsrRelated {}

@Component({
  selector: 'app-ssr-news-page',
  imports: [SsrComments, SsrRelated],
  template: `
    <h1>City opens a new park</h1>
    <!-- #docregion hydrate -->
    @defer (on viewport; hydrate on viewport) {
      <app-ssr-comments />
    } @placeholder {
      <p>Comments</p>
    }
    <!-- #enddocregion hydrate -->

    <!-- #docregion plain -->
    @defer (on viewport) {
      <app-ssr-related />
    } @placeholder {
      <p>More articles</p>
    }
    <!-- #enddocregion plain -->
  `,
})
export class SsrNewsPage {}
