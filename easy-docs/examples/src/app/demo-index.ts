import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {chapterDemos} from './demos';

/** The start page of the demo app: one list of demo pages per chapter of the guide. */
@Component({
  selector: 'app-demo-index',
  imports: [RouterLink],
  template: `
    <p>Pick a demo. The chapter in easy-docs/ explains each one.</p>
    @for (chapter of chapters; track chapter.chapter) {
      <h2>{{ chapter.chapter }}</h2>
      <ul>
        @for (demo of chapter.demos; track demo.path) {
          <li>
            <a [routerLink]="demo.path">{{ demo.name }}</a>
          </li>
        }
      </ul>
    }
  `,
})
export class DemoIndex {
  protected readonly chapters = chapterDemos;
}
