import {TestBed} from '@angular/core/testing';
import {LifeHookLogDemo, hookLog} from './hook-log';

describe('LifeHookLog', () => {
  beforeEach(() => {
    hookLog.length = 0;
  });

  it('runs these hooks when the component is created', async () => {
    const fixture = TestBed.createComponent(LifeHookLogDemo);
    await fixture.whenStable();
    expect(hookLog).toEqual([
      'constructor',
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'afterNextRender',
      'afterEveryRender',
    ]);
  });

  it('runs these hooks when an input changes', async () => {
    const fixture = TestBed.createComponent(LifeHookLogDemo);
    await fixture.whenStable();
    hookLog.length = 0;

    fixture.componentInstance.label.set('second');
    await fixture.whenStable();
    expect(hookLog).toEqual([
      'ngOnChanges',
      'ngDoCheck',
      'ngAfterContentChecked',
      'ngAfterViewChecked',
      'afterEveryRender',
    ]);
  });

  it('runs ngOnDestroy when @if removes the component', async () => {
    const fixture = TestBed.createComponent(LifeHookLogDemo);
    await fixture.whenStable();
    hookLog.length = 0;

    fixture.componentInstance.shown.set(false);
    await fixture.whenStable();
    expect(hookLog).toEqual(['ngOnDestroy']);
  });
});
