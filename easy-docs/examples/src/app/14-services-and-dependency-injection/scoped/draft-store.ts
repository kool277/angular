import {DestroyRef, Service, inject, signal} from '@angular/core';

@Service({autoProvided: false})
export class DiDraftStore {
  static destroyed = 0;
  readonly text = signal('');

  constructor() {
    inject(DestroyRef).onDestroy(() => DiDraftStore.destroyed++);
  }
}
