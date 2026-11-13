import {HttpEventType, HttpInterceptorFn} from '@angular/common/http';
import {Service, inject, signal} from '@angular/core';
import {tap} from 'rxjs';

@Service()
export class HttpRequestLog {
  readonly lines = signal<string[]>([]);

  add(line: string): void {
    this.lines.update((lines) => [...lines, line]);
  }
}

export const logInterceptor: HttpInterceptorFn = (request, next) => {
  const log = inject(HttpRequestLog);
  return next(request).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          log.add(`${request.method} ${request.url} → ${event.status}`);
        }
      },
      error: (error) => log.add(`${request.method} ${request.url} → ${error.status}`),
    }),
  );
};
