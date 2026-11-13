import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {HttpSession} from './session';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = inject(HttpSession).token();
  if (!token) {
    return next(request);
  }
  const withToken = request.clone({
    setHeaders: {Authorization: `Bearer ${token}`},
  });
  return next(withToken);
};
