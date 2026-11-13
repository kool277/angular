import {TestBed} from '@angular/core/testing';
import {A11yFaq} from './faq';

describe('A11yFaq', () => {
  it('opens one panel at a time', async () => {
    const fixture = TestBed.createComponent(A11yFaq);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const [delivery, returns] = element.querySelectorAll('button');
    expect(delivery.getAttribute('aria-expanded')).toBe('true');
    expect(returns.getAttribute('aria-expanded')).toBe('false');
    expect(element.textContent).toContain('Two to four days.');
    expect(element.textContent).not.toContain('within 30 days');

    returns.click();
    await fixture.whenStable();
    expect(returns.getAttribute('aria-expanded')).toBe('true');
    expect(delivery.getAttribute('aria-expanded')).toBe('false');
    expect(element.textContent).toContain('Yes, within 30 days.');
  });

  it('links each button to its panel', async () => {
    const fixture = TestBed.createComponent(A11yFaq);
    await fixture.whenStable();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const panel = document.getElementById(button.getAttribute('aria-controls')!);
    expect(panel?.getAttribute('role')).toBe('region');
    expect(panel?.getAttribute('aria-labelledby')).toBe(button.id);
  });
});
