import {HttpClient} from '@angular/common/http';
import {Service, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {NewTea, Tea} from '../tea';

@Service()
export class HttpTeaApi {
  private readonly http = inject(HttpClient);

  // #docregion get
  getTeas(): Observable<Tea[]> {
    return this.http.get<Tea[]>('/http-demo/teas.json');
  }
  // #enddocregion get

  getTea(id: number): Observable<Tea> {
    return this.http.get<Tea>(`/http-demo/teas/${id}.json`);
  }

  // #docregion options
  searchTeas(text: string): Observable<Tea[]> {
    return this.http.get<Tea[]>('/http-demo/teas.json', {
      params: {q: text},
      headers: {'X-Shop': 'tea'},
      timeout: 5000,
    });
  }
  // #enddocregion options

  // #docregion post
  addTea(tea: NewTea): Observable<Tea> {
    return this.http.post<Tea>('/http-demo/teas.json', tea);
  }
  // #enddocregion post
}
