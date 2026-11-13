import {DeferBlockBehavior, DeferBlockState, TestBed} from '@angular/core/testing';
import {PerfProfileCard} from './profile-card';

describe('PerfProfileCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({deferBlockBehavior: DeferBlockBehavior.Manual});
  });

  it('can show each state of the @defer block', async () => {
    const fixture = TestBed.createComponent(PerfProfileCard);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Profile');

    const [deferBlock] = await fixture.getDeferBlocks();
    await deferBlock.render(DeferBlockState.Loading);
    expect(element.textContent).toContain('Loading the profile…');

    await deferBlock.render(DeferBlockState.Complete);
    expect(element.textContent).toContain('Aziz has written 12 recipes.');
  });

  it('shows the @error block when loading fails', async () => {
    const fixture = TestBed.createComponent(PerfProfileCard);
    await fixture.whenStable();
    const [deferBlock] = await fixture.getDeferBlocks();
    await deferBlock.render(DeferBlockState.Error);
    expect(fixture.nativeElement.textContent).toContain('The profile could not be loaded.');
  });
});
