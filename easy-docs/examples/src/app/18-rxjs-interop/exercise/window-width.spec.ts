import {TestBed} from '@angular/core/testing';
import {RxWindowWidth} from './window-width';

describe('RxWindowWidth', () => {
  const realWidth = window.innerWidth;
  afterEach(() => (window.innerWidth = realWidth));

  it('follows the width of the window', async () => {
    window.innerWidth = 1024;
    const fixture = TestBed.createComponent(RxWindowWidth);
    await fixture.whenStable();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.textContent).toContain('1024 pixels');
    expect(page.textContent).not.toContain('Small screen');

    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    await fixture.whenStable();

    expect(page.textContent).toContain('500 pixels');
    expect(page.textContent).toContain('Small screen layout');
  });

  it('stops listening when it is destroyed', () => {
    const removeListener = vi.spyOn(window, 'removeEventListener');
    const fixture = TestBed.createComponent(RxWindowWidth);
    fixture.destroy();
    expect(removeListener).toHaveBeenCalledWith('resize', expect.any(Function), undefined);
    removeListener.mockRestore();
  });
});
