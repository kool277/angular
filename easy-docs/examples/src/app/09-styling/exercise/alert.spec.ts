import {TestBed} from '@angular/core/testing';
import {StylingAlertDemo} from './alert';

describe('StylingAlert', () => {
  it('uses :host for the box and :host(.danger) for the red variant', async () => {
    const fixture = TestBed.createComponent(StylingAlertDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const [info, danger] = Array.from(page.querySelectorAll('app-alert'));

    expect(getComputedStyle(info).display).toBe('block');
    expect(getComputedStyle(info).backgroundColor).toBe('rgb(173, 216, 230)'); // lightblue
    expect(getComputedStyle(danger).backgroundColor).toBe('rgb(255, 192, 203)'); // pink
  });

  it('keeps its strong rule inside the component', async () => {
    const fixture = TestBed.createComponent(StylingAlertDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const insideTitle = page.querySelector('app-alert strong')!;
    const outside = page.querySelector(':scope > strong')!;
    expect(getComputedStyle(insideTitle).textTransform).toBe('uppercase');
    expect(getComputedStyle(outside).textTransform).not.toBe('uppercase');
  });
});
