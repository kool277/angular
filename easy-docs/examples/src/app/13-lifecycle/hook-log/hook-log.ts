import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  afterEveryRender,
  afterNextRender,
  input,
  signal,
} from '@angular/core';

export const hookLog: string[] = [];

@Component({
  selector: 'app-life-hook-log',
  template: `<p>{{ label() }}</p>`,
})
export class LifeHookLog
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  readonly label = input('');

  constructor() {
    hookLog.push('constructor');
    afterNextRender(() => hookLog.push('afterNextRender'));
    afterEveryRender(() => hookLog.push('afterEveryRender'));
  }

  ngOnChanges(): void {
    hookLog.push('ngOnChanges');
  }
  ngOnInit(): void {
    hookLog.push('ngOnInit');
  }
  ngDoCheck(): void {
    hookLog.push('ngDoCheck');
  }
  ngAfterContentInit(): void {
    hookLog.push('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    hookLog.push('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    hookLog.push('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    hookLog.push('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    hookLog.push('ngOnDestroy');
  }
}

@Component({
  selector: 'app-life-hook-log-demo',
  imports: [LifeHookLog],
  template: `
    @if (shown()) {
      <app-life-hook-log [label]="label()" />
    }
  `,
})
export class LifeHookLogDemo {
  readonly shown = signal(true);
  readonly label = signal('first');
}
