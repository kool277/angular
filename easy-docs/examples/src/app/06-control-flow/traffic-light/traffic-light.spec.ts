import {TestBed} from '@angular/core/testing';
import {ControlFlowTrafficLight} from './traffic-light';

describe('ControlFlowTrafficLight', () => {
  it('shows only the @case that equals the value', async () => {
    const fixture = TestBed.createComponent(ControlFlowTrafficLight);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const text = () => page.querySelector('p')?.textContent;
    const button = page.querySelector('button')!;

    expect(text()).toBe('Stop.');
    button.click();
    await fixture.whenStable();
    expect(text()).toBe('Go!');
    button.click();
    await fixture.whenStable();
    expect(text()).toBe('Get ready.');
    expect(page.querySelectorAll('p').length).toBe(1);
  });
});
