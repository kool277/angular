import {TestBed} from '@angular/core/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {AnimOpenCloseLegacy} from './open-close-legacy';

describe('AnimOpenCloseLegacy (older @angular/animations code)', () => {
  it('sets the styles of the state', async () => {
    TestBed.configureTestingModule({providers: [provideNoopAnimations()]});
    const fixture = TestBed.createComponent(AnimOpenCloseLegacy);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    const box = page.querySelector('.box') as HTMLElement;
    expect(box.style.height).toBe('120px');

    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(box.style.height).toBe('40px');
    expect(box.style.opacity).toBe('0.5');
  });
});
