import {assertInInjectionContext, inject} from '@angular/core';
import {DiLogger} from '../logger/logger';

export function injectPageLogger(page: string): (message: string) => void {
  assertInInjectionContext(injectPageLogger);
  const logger = inject(DiLogger);
  return (message) => logger.log(`[${page}] ${message}`);
}
