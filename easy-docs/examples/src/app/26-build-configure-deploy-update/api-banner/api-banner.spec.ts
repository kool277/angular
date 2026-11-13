import {TestBed} from '@angular/core/testing';
import {environment} from '../environments/environment';
import {BuildApiBanner} from './api-banner';

describe('BuildApiBanner', () => {
  it('shows the API URL from the environment file', async () => {
    const fixture = TestBed.createComponent(BuildApiBanner);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    // This workspace has no fileReplacements, so the base file is used.
    expect(environment.apiUrl).toBe('https://api.silkroad-museum.example');
    expect(page.querySelector('.api')?.textContent).toBe(
      'Data comes from https://api.silkroad-museum.example',
    );
  });

  it('knows that tests run in development mode', async () => {
    const fixture = TestBed.createComponent(BuildApiBanner);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.dev')).not.toBeNull();
  });
});
