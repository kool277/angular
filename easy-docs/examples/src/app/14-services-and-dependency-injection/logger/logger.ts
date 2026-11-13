import {Injectable, Service, inject} from '@angular/core';

// #docregion injectable
@Injectable({providedIn: 'root'})
export class DiLogger {
  readonly lines: string[] = [];

  log(message: string): void {
    this.lines.push(message);
  }
}
// #enddocregion injectable

// #docregion service-uses-service
@Service()
export class DiOrderService {
  private readonly logger = inject(DiLogger);

  placeOrder(item: string): void {
    this.logger.log(`Order placed: ${item}`);
  }
}
// #enddocregion service-uses-service
