import {HttpBackend, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {mergeApplicationConfig} from '@angular/core';
import {BootstrapContext, bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, renderApplication} from '@angular/platform-server';
import {Observable, of} from 'rxjs';
import {recipeAppConfig} from './app.config';
import {SsrRecipePage} from './recipe-page';

/** Stands in for the real API server, so the example works without a network. */
class FakeApi implements HttpBackend {
  handle(request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    return of(new HttpResponse({status: 200, url: request.url, body: {name: 'Plov', minutes: 90}}));
  }
}

const serverConfig = mergeApplicationConfig(recipeAppConfig, {
  providers: [provideServerRendering(), {provide: HttpBackend, useClass: FakeApi}],
});

export function renderRecipePage(): Promise<string> {
  const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(SsrRecipePage, serverConfig, context);
  return renderApplication(bootstrap, {
    document: '<html><head></head><body><app-ssr-recipe-page></app-ssr-recipe-page></body></html>',
    url: '/',
  });
}
