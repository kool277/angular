import {TestBed} from '@angular/core/testing';
import {FormsReview} from './review';

describe('FormsReview with a custom control', () => {
  it('writes the chosen star into the model and marks the field touched', async () => {
    const fixture = TestBed.createComponent(FormsReview);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.error')?.textContent).toBe('Choose at least one star.');

    page.querySelectorAll('button')[3].click();
    await fixture.whenStable();

    expect(fixture.componentInstance.reviewModel()).toEqual({stars: 4});
    expect(fixture.componentInstance.reviewForm.stars().touched()).toBe(true);
    expect(page.querySelectorAll('button.on').length).toBe(4);
    expect(page.querySelector('.error')).toBeNull();
  });

  it('shows a new model value', async () => {
    const fixture = TestBed.createComponent(FormsReview);
    await fixture.whenStable();
    fixture.componentInstance.reviewModel.set({stars: 2});
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('button.on').length).toBe(2);
  });
});
