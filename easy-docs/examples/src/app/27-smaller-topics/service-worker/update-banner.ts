import {Component, DestroyRef, inject, signal} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-update-banner',
  template: `
    @if (!enabled) {
      <p class="off">Offline support is off (development build).</p>
    } @else if (updateReady()) {
      <p class="ready">A new version is ready. <button (click)="reload()">Reload</button></p>
    }
  `,
})
export class SwUpdateBanner {
  private swUpdate = inject(SwUpdate);
  enabled = this.swUpdate.isEnabled;
  updateReady = signal(false);

  constructor() {
    if (this.enabled) {
      const subscription = this.swUpdate.versionUpdates.subscribe((event) => {
        if (event.type === 'VERSION_READY') {
          this.updateReady.set(true);
        }
      });
      inject(DestroyRef).onDestroy(() => subscription.unsubscribe());
    }
  }

  reload() {
    document.location.reload();
  }
}
