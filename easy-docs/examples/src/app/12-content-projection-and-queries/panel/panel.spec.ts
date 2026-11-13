import {TestBed} from '@angular/core/testing';
import {ProjPanelDemo} from './panel';

describe('ProjPanel', () => {
  async function panels() {
    const fixture = TestBed.createComponent(ProjPanelDemo);
    await fixture.whenStable();
    return Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('section'));
  }

  it('puts each piece of content into the matching slot', async () => {
    const [first] = await panels();
    expect(first.querySelector('header')?.textContent).toBe("Today's order");
    expect(first.querySelectorAll('.body p').length).toBe(2);
    expect(first.querySelector('footer button')?.textContent).toBe('Pay now');
  });

  it('shows the fallback content when no footer is given', async () => {
    const [, second] = await panels();
    expect(second.querySelector('footer')?.textContent?.trim()).toBe('No actions.');
  });

  it('uses ngProjectAs to move a group into the title slot', async () => {
    const [, , third] = await panels();
    expect(third.querySelector('header h3')?.textContent).toBe('Weekly report');
    expect(third.querySelector('header small')?.textContent).toBe('Monday to Sunday');
    expect(third.querySelector('.body')?.textContent?.trim()).toBe('12 orders.');
  });
});
