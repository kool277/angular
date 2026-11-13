import {TestBed} from '@angular/core/testing';
import {SignalsCounter} from './counter';

describe('SignalsCounter', () => {
  it('updates the page when the buttons change the signal', async () => {
    const fixture = TestBed.createComponent(SignalsCounter);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const [plus, reset] = Array.from(page.querySelectorAll('button'));

    plus.click();
    plus.click();
    await fixture.whenStable();
    expect(page.querySelector('p')?.textContent).toBe('Count: 2');

    reset.click();
    await fixture.whenStable();
    expect(page.querySelector('p')?.textContent).toBe('Count: 0');
  });

  // #docregion no-event
  it('updates the page even when the change does not come from an event', async () => {
    const fixture = TestBed.createComponent(SignalsCounter);
    await fixture.whenStable();

    fixture.componentInstance.count.set(41);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('p')?.textContent).toBe('Count: 41');
  });
  // #enddocregion no-event
});
