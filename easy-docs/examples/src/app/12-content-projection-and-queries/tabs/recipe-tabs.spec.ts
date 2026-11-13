import {TestBed} from '@angular/core/testing';
import {ProjRecipeStep} from './recipe-step';
import {ProjRecipeTabs} from './recipe-tabs';

describe('ProjTabs', () => {
  it('shows one button per tab and the first tab content', async () => {
    const fixture = TestBed.createComponent(ProjRecipeTabs);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const buttons = Array.from(page.querySelectorAll('[role=tab]'));
    expect(buttons.map((b) => b.textContent?.trim())).toEqual(['Ingredients', 'Steps']);
    expect(buttons[0].getAttribute('aria-selected')).toBe('true');
    expect(page.querySelector('[role=tabpanel]')?.textContent).toContain('Carrots');
  });

  it('creates the content of a tab only when it is selected', async () => {
    ProjRecipeStep.created = 0;
    const fixture = TestBed.createComponent(ProjRecipeTabs);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(ProjRecipeStep.created).toBe(0);

    page.querySelectorAll<HTMLButtonElement>('[role=tab]')[1].click();
    await fixture.whenStable();
    expect(ProjRecipeStep.created).toBe(2);
    expect(page.querySelectorAll('[role=tabpanel] p').length).toBe(2);
    expect(page.querySelector('[role=tabpanel] ul')).toBeNull();
  });
});
