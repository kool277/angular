import {TestBed} from '@angular/core/testing';
import {InputsStarRatingDemo} from './star-rating';

describe('InputsStarRating', () => {
  it('sends the clicked star to the parent with an output', async () => {
    const fixture = TestBed.createComponent(InputsStarRatingDemo);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('p')?.textContent).toBe('Please rate this book.');

    page.querySelectorAll('button')[3].click();
    await fixture.whenStable();
    expect(page.querySelector('p')?.textContent).toBe('Thank you for 4 stars!');
  });
});
