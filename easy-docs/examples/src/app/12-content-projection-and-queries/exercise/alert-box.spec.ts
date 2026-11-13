import {TestBed} from '@angular/core/testing';
import {ProjAlertDemo} from './alert-box';

describe('ProjAlertBox', () => {
  it('puts title, icon and text into their slots, with a fallback icon', async () => {
    const fixture = TestBed.createComponent(ProjAlertDemo);
    await fixture.whenStable();
    const [first, second] = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('.alert'),
    );
    expect(first.querySelector('.icon')?.textContent).toBe('ℹ');
    expect(first.querySelector('strong')?.textContent).toBe('Road closed');
    expect(first.querySelector('.text')?.textContent?.trim()).toBe('Take the bus number 51 today.');

    expect(second.querySelector('.icon')?.textContent).toBe('⚠');
    expect(second.querySelector('strong')?.textContent).toBe('Storm warning');
  });
});
