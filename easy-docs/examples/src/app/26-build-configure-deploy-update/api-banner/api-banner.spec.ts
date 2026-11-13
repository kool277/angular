import {TestBed} from '@angular/core/testing';
import {environment} from '../environments/environment';
import {BuildApiBanner} from './api-banner';

describe('BuildApiBanner', () => {
  it('shows the API URL from the environment file', async () => {
    const fixture = TestBed.createComponent(BuildApiBanner);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    // `environment` is the file that this build uses: in a project with
    // file replacements, `ng test` uses the development file.
    expect(page.querySelector('.api')?.textContent).toBe(`Data comes from ${environment.apiUrl}`);
  });

  it('knows that tests run in development mode', async () => {
    const fixture = TestBed.createComponent(BuildApiBanner);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.dev')).not.toBeNull();
  });
});
