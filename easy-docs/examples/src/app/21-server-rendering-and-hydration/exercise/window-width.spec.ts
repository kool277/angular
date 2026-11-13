import {TestBed} from '@angular/core/testing';
import {renderOnServer} from '../hydration/render-hydrated';
import {SsrWindowWidth} from './window-width';

describe('SsrWindowWidth', () => {
  it('shows the width in the browser', async () => {
    const fixture = TestBed.createComponent(SsrWindowWidth);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toBe(
      `Your window is ${window.innerWidth} pixels wide.`,
    );
  });

  it('shows the start text on the server', async () => {
    const html = await renderOnServer(SsrWindowWidth, 'app-ssr-window-width');
    expect(html).toContain('<p>Measuring the window…</p>');
  });
});
