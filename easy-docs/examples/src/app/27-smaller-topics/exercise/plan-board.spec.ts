import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {TestBed} from '@angular/core/testing';
import {DndPlanBoard} from './plan-board';

describe('DndPlanBoard', () => {
  it('moves an item from Ideas to Today', async () => {
    const fixture = TestBed.createComponent(DndPlanBoard);
    await fixture.whenStable();
    const board = fixture.componentInstance;
    const ideas = {data: board.ideas()};
    const today = {data: board.today()};

    board.drop({
      previousContainer: ideas,
      container: today,
      previousIndex: 1,
      currentIndex: 0,
    } as unknown as CdkDragDrop<string[]>);
    await fixture.whenStable();

    expect(board.ideas()).toEqual(['Registan', 'Ulugh Beg Observatory']);
    expect(board.today()).toEqual(['Paper mill']);
    const lists = (fixture.nativeElement as HTMLElement).querySelectorAll('ul');
    expect(lists[1].textContent).toContain('Paper mill');
  });

  it('reorders inside one list', async () => {
    const fixture = TestBed.createComponent(DndPlanBoard);
    await fixture.whenStable();
    const board = fixture.componentInstance;
    const ideas = {data: board.ideas()};

    board.drop({
      previousContainer: ideas,
      container: ideas,
      previousIndex: 2,
      currentIndex: 0,
    } as unknown as CdkDragDrop<string[]>);

    expect(board.ideas()).toEqual(['Ulugh Beg Observatory', 'Registan', 'Paper mill']);
  });
});
