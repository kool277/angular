import {TestBed} from '@angular/core/testing';
import {TplProfilePhoto} from './profile-photo';

describe('TplProfilePhoto', () => {
  it('sets DOM properties from fields', async () => {
    const fixture = TestBed.createComponent(TplProfilePhoto);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    const img = page.querySelector('img')!;
    expect(img.getAttribute('src')).toBe('/images/amina.png');
    expect(img.alt).toBe('Photo of Amina');
    expect(page.querySelector('input')!.value).toBe('Amina');
    expect(page.querySelector('input')!.readOnly).toBe(true);
  });

  it('updates the properties when the fields change', async () => {
    const fixture = TestBed.createComponent(TplProfilePhoto);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.querySelector('input')!.readOnly).toBe(false);
    expect(page.querySelector('button')!.disabled).toBe(true);
  });
});
