import {TestBed} from '@angular/core/testing';
import {TplExpressions} from './expressions';

describe('TplExpressions', () => {
  it('evaluates JavaScript-like expressions', async () => {
    const fixture = TestBed.createComponent(TplExpressions);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const text = (selector: string) => page.querySelector(selector)?.textContent;

    expect(text('.ternary')).toBe('Busy week');
    expect(text('.nullish')).toBe('Room: not set yet');
    expect(text('.optional')).toBe('Teacher: unknown');
    expect(text('.template-string')).toBe('3 lessons');
    expect(text('.arrow')).toBe('Done: 2');
  });

  it('runs several statements in an event listener', async () => {
    const fixture = TestBed.createComponent(TplExpressions);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    await fixture.whenStable();

    expect(page.querySelector('.nullish')?.textContent).toBe('Room: B12');
    expect(fixture.componentInstance.checks).toBe(1);
  });
});
