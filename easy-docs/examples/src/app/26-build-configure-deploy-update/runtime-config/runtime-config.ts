import {HttpClient} from '@angular/common/http';
import {inject, provideAppInitializer, Service, signal} from '@angular/core';
import {firstValueFrom} from 'rxjs';

export interface RuntimeConfig {
  apiUrl: string;
}

@Service()
export class BuildConfigStore {
  private http = inject(HttpClient);
  readonly config = signal<RuntimeConfig | null>(null);

  async load() {
    const config = await firstValueFrom(this.http.get<RuntimeConfig>('/config.json'));
    this.config.set(config);
  }
}

// #docregion initializer
export const runtimeConfigProviders = [
  provideAppInitializer(() => inject(BuildConfigStore).load()),
];
// #enddocregion initializer
