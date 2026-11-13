import {TestBed} from '@angular/core/testing';
import {InputsOldPanelDemo} from './old-panel';

describe('InputsOldPanel', () => {
  it('works with the same template syntax as input() and output()', async () => {
    const fixture = TestBed.createComponent(InputsOldPanelDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h3')?.textContent).toBe('News');

    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelector('app-old-panel')).toBeNull();
  });
});
