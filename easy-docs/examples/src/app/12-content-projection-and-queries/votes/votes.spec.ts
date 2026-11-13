import {TestBed} from '@angular/core/testing';
import {ProjPoll} from './votes';

describe('ProjPoll', () => {
  it('sums the votes of all children found by viewChildren', async () => {
    const fixture = TestBed.createComponent(ProjPoll);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const total = () => page.querySelector('.total')!.textContent;
    expect(total()).toBe('2 dishes, 0 votes');

    const plus = page.querySelectorAll<HTMLButtonElement>('app-proj-vote button');
    plus[0].click();
    plus[1].click();
    plus[1].click();
    await fixture.whenStable();
    expect(total()).toBe('2 dishes, 3 votes');
  });

  it('updates the query when @for adds a child', async () => {
    const fixture = TestBed.createComponent(ProjPoll);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    fixture.componentInstance.dishes.set(['Plov', 'Lagman', 'Manti']);
    await fixture.whenStable();
    expect(page.querySelector('.total')!.textContent).toBe('3 dishes, 0 votes');
  });
});
