import {TestBed} from '@angular/core/testing';
import {TestingToast} from './toast';

describe('TestingToast', () => {
  // #docregion fake-timers
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('hides the message after 3 seconds', async () => {
    const fixture = TestBed.createComponent(TestingToast);
    const page: HTMLElement = fixture.nativeElement;
    await vi.advanceTimersByTimeAsync(0);

    page.querySelector('button')!.click();
    await vi.advanceTimersByTimeAsync(0);
    expect(page.querySelector('[role=status]')?.textContent).toBe('Saved!');

    await vi.advanceTimersByTimeAsync(2900);
    expect(page.querySelector('[role=status]')).not.toBeNull();

    await vi.advanceTimersByTimeAsync(200);
    expect(page.querySelector('[role=status]')).toBeNull();
  });
  // #enddocregion fake-timers
});
