import {HttpClient} from '@angular/common/http';
import {inject, Service} from '@angular/core';

export interface Review {
  stars: number;
  text: string;
}

@Service()
export class SecReviewApi {
  private http = inject(HttpClient);

  list() {
    return this.http.get<Review[]>('/api/reviews');
  }

  send(review: Review) {
    return this.http.post<void>('/api/reviews', review);
  }
}
