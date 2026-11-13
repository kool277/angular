import {TestBed} from '@angular/core/testing';
import {InputsLikeDemo} from './like-button';

describe('InputsLikeButton', () => {
  it('shows the label and the state given by the parent', async () => {
    const fixture = TestBed.createComponent(InputsLikeDemo);
    await fixture.whenStable();
    const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('button');
    expect(buttons[0].textContent?.trim()).toBe('♥ Plov recipe');
    expect(buttons[1].textContent?.trim()).toBe('♡ Somsa recipe');
  });

  it('writes a click back to the parent signal', async () => {
    const fixture = TestBed.createComponent(InputsLikeDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelectorAll('button')[1].click();
    await fixture.whenStable();
    expect(fixture.componentInstance.likesSomsa()).toBe(true);
    expect(page.querySelector('p')?.textContent).toBe('You like 2 recipes.');
  });
});
