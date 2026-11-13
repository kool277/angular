import {TestBed} from '@angular/core/testing';
import {ModulesBadgePage} from './badge-page';

describe('ModulesBadgePage', () => {
  it('uses a component that an NgModule declares and exports', async () => {
    const fixture = TestBed.createComponent(ModulesBadgePage);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.badge')?.textContent).toBe(
      'NEW!',
    );
  });
});
