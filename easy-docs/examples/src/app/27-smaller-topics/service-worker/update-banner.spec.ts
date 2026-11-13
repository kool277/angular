import {TestBed} from '@angular/core/testing';
import {SwUpdate} from '@angular/service-worker';
import {serviceWorkerConfig} from './sw.config';
import {SwUpdateBanner} from './update-banner';

describe('SwUpdateBanner', () => {
  it('knows that the service worker is off in development mode', async () => {
    TestBed.configureTestingModule({providers: serviceWorkerConfig.providers});
    expect(TestBed.inject(SwUpdate).isEnabled).toBe(false);

    const fixture = TestBed.createComponent(SwUpdateBanner);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.off')).not.toBeNull();
  });
});
