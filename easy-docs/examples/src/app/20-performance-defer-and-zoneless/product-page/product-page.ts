import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';
import {shopImageLoaderProvider} from './image-loader';
import {PerfReviews} from './reviews';
import {PerfSizeGuide} from './size-guide';

@Component({
  selector: 'app-perf-product-page',
  imports: [NgOptimizedImage, PerfReviews, PerfSizeGuide],
  providers: [shopImageLoaderProvider],
  templateUrl: './product-page.html',
})
export class PerfProductPage {}
