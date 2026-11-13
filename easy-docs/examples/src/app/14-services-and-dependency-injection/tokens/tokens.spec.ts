import {TestBed} from '@angular/core/testing';
import {DiSettingsView} from './settings-view';
import {shopConfig} from './shop-config';
import {API_URL} from './tokens';

describe('InjectionToken', () => {
  it('uses the factory when nobody provides the token', async () => {
    const fixture = TestBed.createComponent(DiSettingsView);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent).toBe('Prices in UZS, 10 per page');
  });

  it('uses the values from the app configuration', async () => {
    TestBed.configureTestingModule({providers: shopConfig.providers});
    const fixture = TestBed.createComponent(DiSettingsView);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent).toBe('Prices in EUR, 20 per page');
    expect(TestBed.inject(API_URL)).toBe('https://api.example.com');
  });
});
