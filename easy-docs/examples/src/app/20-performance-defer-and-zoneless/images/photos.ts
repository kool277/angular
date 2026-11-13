import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-perf-photos',
  imports: [NgOptimizedImage],
  template: `
    <!-- #docregion template -->
    <img
      ngSrc="/photos/lake.jpg"
      width="1200"
      height="600"
      priority
      alt="A lake in the mountains"
    />

    <img ngSrc="/photos/forest.jpg" width="400" height="300" alt="A path through a forest" />

    <div class="banner">
      <img ngSrc="/photos/sky.jpg" fill alt="" />
    </div>
    <!-- #enddocregion template -->
  `,
  styles: `
    .banner {
      position: relative;
      height: 200px;
    }
    .banner img {
      object-fit: cover;
    }
  `,
})
export class PerfPhotos {}
