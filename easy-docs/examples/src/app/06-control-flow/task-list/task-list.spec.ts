import {TestBed} from '@angular/core/testing';
import {ControlFlowTaskList} from './task-list';

describe('ControlFlowTaskList', () => {
  async function setup() {
    const fixture = TestBed.createComponent(ControlFlowTaskList);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    // For each row: [the status text, the button text].
    const rows = () =>
      Array.from(page.querySelectorAll('li')).map((li) => [
        li.querySelector('span')?.textContent ?? li.textContent?.trim(),
        li.querySelector('button')?.textContent,
      ]);
    return {fixture, page, rows};
  }

  it('shows each task with its status and the @let count', async () => {
    const {page, rows} = await setup();
    expect(page.querySelector('h2')?.textContent).toBe('My tasks: 1 of 3 done');
    expect(rows()).toEqual([
      ['done', 'Remove'],
      ['in progress', 'Next step'],
      ['to do', 'Next step'],
    ]);
    expect(page.querySelectorAll('li')[0].textContent).toContain('Buy bread:');
  });

  it('adds a task and moves it through its steps', async () => {
    const {fixture, page, rows} = await setup();
    const input = page.querySelector('input')!;
    input.value = 'Read chapter 7';
    page.querySelector<HTMLButtonElement>('button.add')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('li')[3].textContent).toContain('Read chapter 7:');
    expect(rows()[3]).toEqual(['to do', 'Next step']);
    expect(input.value).toBe('');

    page.querySelectorAll('li')[3].querySelector('button')!.click();
    await fixture.whenStable();
    expect(rows()[3]).toEqual(['in progress', 'Next step']);
  });

  it('shows the @empty text and no party message when every task is removed', async () => {
    const {fixture, page, rows} = await setup();
    const component = fixture.componentInstance;
    // Finish every task by clicking "Next step" until only "Remove" buttons are left.
    for (let i = 0; i < 2; i++) {
      for (const button of Array.from(page.querySelectorAll('li button'))) {
        if (button.textContent === 'Next step') (button as HTMLButtonElement).click();
      }
      await fixture.whenStable();
    }
    expect(component.doneCount()).toBe(3);
    expect(page.querySelector('.party')?.textContent).toBe('All done. Well done!');

    for (const button of Array.from(page.querySelectorAll('li button'))) {
      (button as HTMLButtonElement).click();
    }
    await fixture.whenStable();
    expect(rows()).toEqual([['Nothing to do. Add a task above.', undefined]]);
    expect(page.querySelector('.party')).toBeNull();
  });
});
