import {TestBed} from '@angular/core/testing';
import {ControlFlowGrade} from './grade';

describe('ControlFlowGrade', () => {
  it('shows the first branch whose condition is true', async () => {
    const fixture = TestBed.createComponent(ControlFlowGrade);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const result = () => page.querySelector('.result')?.textContent;
    const [plus, minus] = Array.from(page.querySelectorAll('button'));

    expect(result()).toBe('You passed.');

    plus.click(); // 80
    plus.click(); // 90
    await fixture.whenStable();
    expect(result()).toBe('Excellent!');

    minus.click(); // 60
    minus.click(); // 30
    await fixture.whenStable();
    expect(result()).toBe('Try again.');
  });
});
