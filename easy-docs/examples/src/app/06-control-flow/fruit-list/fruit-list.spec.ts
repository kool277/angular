import {TestBed} from '@angular/core/testing';
import {ControlFlowFruitList} from './fruit-list';

describe('ControlFlowFruitList', () => {
  it('repeats the block once per item and fills the implicit variables', async () => {
    const fixture = TestBed.createComponent(ControlFlowFruitList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const items = () =>
      Array.from(page.querySelectorAll('li')).map((li) =>
        li.textContent?.replace(/\s+/g, ' ').trim(),
      );

    expect(items()).toEqual(['1. Apple (first)', '2. Banana', '3. Cherry (last of 3)']);
    // $odd is true for index 1 only.
    expect(page.querySelectorAll('li.odd').length).toBe(1);
  });

  it('keeps the DOM element of an item that stays in the list (track)', async () => {
    const fixture = TestBed.createComponent(ControlFlowFruitList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const bananaBefore = page.querySelectorAll('li')[1];

    page.querySelector('button')!.click();
    await fixture.whenStable();

    const bananaAfter = page.querySelectorAll('li')[0];
    expect(bananaAfter).toBe(bananaBefore);
    expect(bananaAfter.textContent?.replace(/\s+/g, ' ').trim()).toBe('1. Banana (first)');
  });

  it('shows the @empty block when the list is empty', async () => {
    const fixture = TestBed.createComponent(ControlFlowFruitList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const button = page.querySelector('button')!;
    button.click();
    button.click();
    button.click();
    await fixture.whenStable();
    expect(page.querySelector('li')?.textContent).toBe('No fruit left.');
  });
});
