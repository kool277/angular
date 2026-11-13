import {TestBed} from '@angular/core/testing';
import {TplGreeter} from './greeter';

describe('TplGreeter', () => {
  it('shows a value declared with @let', async () => {
    const fixture = TestBed.createComponent(TplGreeter);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h2')?.textContent).toBe('Amina Karimova');
  });

  it('reads the input element through a template reference variable', async () => {
    const fixture = TestBed.createComponent(TplGreeter);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('input')!.value = 'Bekzod';
    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.querySelector('p')?.textContent).toBe('Nice to meet you, Bekzod!');
  });
});
