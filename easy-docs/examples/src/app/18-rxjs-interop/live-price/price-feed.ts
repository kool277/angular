import {Service} from '@angular/core';
import {Observable, map, timer} from 'rxjs';

const BASE_PRICES: Record<number, number> = {1: 4, 2: 3, 3: 5};

/** Pretends to be a live price feed: a new price every second. */
@Service()
export class RxPriceFeed {
  watch(teaId: number): Observable<number> {
    return timer(0, 1000).pipe(map((tick) => BASE_PRICES[teaId] + (tick % 3) / 10));
  }
}
