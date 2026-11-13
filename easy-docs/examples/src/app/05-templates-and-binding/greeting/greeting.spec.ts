import {TestBed} from '@angular/core/testing';
import {TplGreeting} from './greeting';

describe('TplGreeting', () => {
  it('shows the name and an enabled button at first', async () => {
    const fixture = TestBed.createComponent(TplGreeting);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('p')?.textContent).toBe('Hello, Amina!');
    expect(page.querySelector('button')?.disabled).toBe(false);
  });

  it('changes the name and disables the button after a click', async () => {
    const fixture = TestBed.createComponent(TplGreeting);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.querySelector('p')?.textContent).toBe('Hello, Bekzod!');
    expect(page.querySelector('button')?.disabled).toBe(true);
  });
});
