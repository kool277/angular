import {TestBed} from '@angular/core/testing';
import {InputsTodoPage} from './todo-page';

describe('InputsTodoPage', () => {
  async function setup() {
    const fixture = TestBed.createComponent(InputsTodoPage);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const titles = () =>
      Array.from(page.querySelectorAll('li')).map((li) =>
        li.textContent?.replace(/\s+/g, ' ').trim(),
      );
    const summary = () => page.querySelector('p')?.textContent;
    const filterButton = (name: string) =>
      Array.from(page.querySelectorAll<HTMLButtonElement>('app-todo-filter button')).find(
        (b) => b.textContent?.trim() === name,
      )!;
    return {fixture, page, titles, summary, filterButton};
  }

  it('passes each todo down to a child with an input', async () => {
    const {titles, summary} = await setup();
    expect(titles()).toEqual([
      'Water the plants Delete',
      'Pay the bills Delete',
      'Read chapter 8 Delete',
    ]);
    expect(summary()).toBe('Showing 3 of 3 (all)');
  });

  it('gets the filter back from the child through the model', async () => {
    const {fixture, titles, summary, filterButton} = await setup();
    filterButton('done').click();
    await fixture.whenStable();
    expect(fixture.componentInstance.filter()).toBe('done');
    expect(titles()).toEqual(['Pay the bills Delete']);
    expect(summary()).toBe('Showing 1 of 3 (done)');
  });

  it('handles the outputs of the child', async () => {
    const {fixture, page, summary, filterButton} = await setup();
    // Tick "Water the plants": the child emits `toggled` with id 1.
    page.querySelector<HTMLInputElement>('input[type=checkbox]')!.click();
    await fixture.whenStable();
    filterButton('open').click();
    await fixture.whenStable();
    expect(summary()).toBe('Showing 1 of 3 (open)');

    // Delete "Read chapter 8": the child emits `removed` with id 3.
    page.querySelector<HTMLButtonElement>('app-todo-item button')!.click();
    await fixture.whenStable();
    expect(summary()).toBe('Showing 0 of 2 (open)');
    expect(page.querySelector('li')?.textContent).toBe('No tasks here.');
  });
});
