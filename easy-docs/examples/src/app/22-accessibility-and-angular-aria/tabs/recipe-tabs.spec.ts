import {TestBed} from '@angular/core/testing';
import {A11yRecipeTabs} from './recipe-tabs';

function pressKey(element: Element, key: string): void {
  element.dispatchEvent(new KeyboardEvent('keydown', {key, bubbles: true}));
}

describe('A11yRecipeTabs', () => {
  it('adds the ARIA roles and states', async () => {
    const fixture = TestBed.createComponent(A11yRecipeTabs);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const tabs = element.querySelectorAll('[ngTab]');
    expect(element.querySelector('[ngTabList]')!.getAttribute('role')).toBe('tablist');
    expect(tabs[0].getAttribute('role')).toBe('tab');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('aria-selected')).toBe('false');
    const panel = element.querySelector(`#${tabs[0].getAttribute('aria-controls')}`)!;
    expect(panel.getAttribute('role')).toBe('tabpanel');
    expect(panel.textContent).toContain('Rice, carrots');
  });

  it('selects the next tab with the arrow key', async () => {
    const fixture = TestBed.createComponent(A11yRecipeTabs);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    pressKey(element.querySelector('[ngTab]')!, 'ArrowRight');
    await fixture.whenStable();
    expect(fixture.componentInstance.selectedTab()).toBe('steps');
    expect(element.textContent).toContain('Fry the meat');
  });

  it('selects a tab on click and hides the other panels', async () => {
    const fixture = TestBed.createComponent(A11yRecipeTabs);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    (element.querySelectorAll('[ngTab]')[2] as HTMLElement).click();
    await fixture.whenStable();
    expect(fixture.componentInstance.selectedTab()).toBe('tips');
    const panels = element.querySelectorAll('[ngTabPanel]');
    expect(panels[0].hasAttribute('inert')).toBe(true);
    expect(panels[2].hasAttribute('inert')).toBe(false);
  });
});
