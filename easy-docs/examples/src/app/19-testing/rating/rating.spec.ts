// #docregion imports
import {Component, inputBinding, outputBinding, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TestingRating} from './rating';
// #enddocregion imports

describe('TestingRating', () => {
  // #docregion set-input
  it('shows the stars from the input', async () => {
    const fixture = TestBed.createComponent(TestingRating);
    fixture.componentRef.setInput('stars', 3);
    await fixture.whenStable();

    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('p')!.textContent).toBe('Rating: 3 of 5');
    const stars = [...page.querySelectorAll('button')].map((b) => b.textContent!.trim());
    expect(stars).toEqual(['★', '★', '★', '☆', '☆']);
  });
  // #enddocregion set-input

  // #docregion output
  it('emits the clicked star', async () => {
    const fixture = TestBed.createComponent(TestingRating);
    fixture.componentRef.setInput('stars', 1);
    await fixture.whenStable();

    const emitted: number[] = [];
    fixture.componentInstance.rated.subscribe((value) => emitted.push(value));
    fixture.nativeElement.querySelector('[aria-label="4 stars"]').click();

    expect(emitted).toEqual([4]);
  });
  // #enddocregion output

  // #docregion bindings
  it('works with bindings, like in a parent template', async () => {
    const stars = signal(2);
    const onRated = vi.fn();
    const fixture = TestBed.createComponent(TestingRating, {
      bindings: [inputBinding('stars', stars), outputBinding('rated', onRated)],
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Rating: 2 of 5');

    stars.set(5);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Rating: 5 of 5');

    fixture.nativeElement.querySelector('[aria-label="1 stars"]').click();
    expect(onRated).toHaveBeenCalledWith(1);
  });
  // #enddocregion bindings
});

// #docregion host
@Component({
  imports: [TestingRating],
  template: `<app-testing-rating
    label="Green tea"
    [stars]="stars()"
    (rated)="stars.set($event)"
  />`,
})
class TestingRatingHost {
  readonly stars = signal(1);
}

describe('TestingRating inside a test host', () => {
  it('lets the parent change the stars', async () => {
    const fixture = TestBed.createComponent(TestingRatingHost);
    await fixture.whenStable();

    fixture.nativeElement.querySelector('[aria-label="4 stars"]').click();
    await fixture.whenStable();

    expect(fixture.componentInstance.stars()).toBe(4);
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Green tea: 4 of 5');
  });
});
// #enddocregion host
