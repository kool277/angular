import {IMAGE_LOADER, ImageLoaderConfig} from '@angular/common';
import {Provider} from '@angular/core';

/** Asks an image server for the photo at the width the browser needs. */
export function shopImageLoader(config: ImageLoaderConfig): string {
  const width = config.width ? `?w=${config.width}` : '';
  return `https://images.example.com${config.src}${width}`;
}

export const shopImageLoaderProvider: Provider = {
  provide: IMAGE_LOADER,
  useValue: shopImageLoader,
};
