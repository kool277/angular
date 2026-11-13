import {TestBed} from '@angular/core/testing';
import {CompVoteButton} from './vote-button';

describe('CompVoteButton', () => {
  it('uses the inherited field and method', async () => {
    const fixture = TestBed.createComponent(CompVoteButton);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    host.querySelector('button')!.click();
    await fixture.whenStable();

    expect(fixture.componentInstance.clicks).toBe(1);
  });

  it('uses its own version of the overridden method', async () => {
    const fixture = TestBed.createComponent(CompVoteButton);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    host.querySelector('button')!.click();
    host.querySelector('button')!.click();
    await fixture.whenStable();

    expect(host.querySelector('p')?.textContent).toBe('2 votes');
  });
});
