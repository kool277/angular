import {TestBed} from '@angular/core/testing';
import {TplProfileSwitch} from './profile-switch';

describe('TplProfileSwitch', () => {
  it('renders the component chosen in the class', async () => {
    const fixture = TestBed.createComponent(TplProfileSwitch);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('app-basic-view')?.textContent).toContain('Your profile');
    expect(page.querySelector('app-admin-view')).toBeNull();
  });

  it('replaces the component when the field changes', async () => {
    const fixture = TestBed.createComponent(TplProfileSwitch);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.querySelector('app-admin-view')?.textContent).toContain('Admin tools');
    expect(page.querySelector('app-basic-view')).toBeNull();
  });
});
