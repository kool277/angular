import {BootstrapContext, bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, renderApplication} from '@angular/platform-server';
import {SsrWelcome} from './welcome';

function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(SsrWelcome, {providers: [provideServerRendering()]}, context);
}

export function renderWelcomePage(): Promise<string> {
  return renderApplication(bootstrap, {
    document: '<html><head></head><body><app-ssr-welcome></app-ssr-welcome></body></html>',
    url: '/',
  });
}
