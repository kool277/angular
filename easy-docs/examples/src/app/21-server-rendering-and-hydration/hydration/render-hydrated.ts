import {Type} from '@angular/core';
import {BootstrapContext, bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, renderApplication} from '@angular/platform-server';
import {ssrAppConfig} from './app.config';

/** Renders a component on the "server", with or without the hydration providers. */
export function renderOnServer(component: Type<unknown>, selector: string, hydration = true) {
  const providers = [provideServerRendering(), ...(hydration ? ssrAppConfig.providers : [])];
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(component, {providers}, context);
  return renderApplication(bootstrap, {
    document: `<html><head></head><body><${selector}></${selector}></body></html>`,
    url: '/',
  });
}
