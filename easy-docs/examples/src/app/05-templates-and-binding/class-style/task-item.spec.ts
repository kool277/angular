import {TestBed} from '@angular/core/testing';
import {TplTaskItem} from './task-item';

describe('TplTaskItem', () => {
  it('combines static, single and object class bindings', async () => {
    const fixture = TestBed.createComponent(TplTaskItem);
    await fixture.whenStable();

    const task = (fixture.nativeElement as HTMLElement).querySelector('p')!;
    expect(task.classList).toContain('task');
    expect(task.classList).toContain('urgent');
    expect(task.classList).not.toContain('later');
    expect(task.classList).not.toContain('done');
  });

  it('sets style properties with units', async () => {
    const fixture = TestBed.createComponent(TplTaskItem);
    await fixture.whenStable();

    const bar = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.bar')!;
    expect(bar.style.width).toBe('40%');
    expect(bar.style.backgroundColor).toBe('orange');
  });

  it('updates classes and styles after a click', async () => {
    const fixture = TestBed.createComponent(TplTaskItem);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    page.querySelector('button')!.click();
    await fixture.whenStable();

    const task = page.querySelector('p')!;
    expect(task.classList).toContain('done');
    expect(task.classList).not.toContain('urgent');
    expect(page.querySelector<HTMLElement>('.bar')!.style.width).toBe('100%');
  });
});
