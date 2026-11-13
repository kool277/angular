import {TestBed} from '@angular/core/testing';
import {ModulesNewBadge} from './new-badge';

describe('ModulesNewBadge (the standalone version)', () => {
  it('shows the same badge without an NgModule', async () => {
    const fixture = TestBed.createComponent(ModulesNewBadge);
    fixture.componentRef.setInput('label', 'new');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('.badge')?.textContent).toBe(
      'NEW!',
    );
  });
});
