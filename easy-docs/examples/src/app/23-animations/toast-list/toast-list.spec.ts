import {AnimationCallbackEvent} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {AnimToastList} from './toast-list';

describe('AnimToastList', () => {
  it('adds and closes toasts', async () => {
    const fixture = TestBed.createComponent(AnimToastList);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    page.querySelector('button')!.click();
    page.querySelector('button')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('.toast').length).toBe(2);

    page.querySelector<HTMLButtonElement>('.toast button')!.click();
    await fixture.whenStable();
    expect(page.querySelectorAll('.toast').length).toBe(1);
  });

  it('calls animationComplete() when its own leave animation is finished', async () => {
    const component = TestBed.createComponent(AnimToastList).componentInstance;
    const element = document.createElement('li');
    // jsdom has no element.animate(), so the test gives the element a fake one.
    const animate = vi.fn(() => ({finished: Promise.resolve()}));
    Object.assign(element, {animate});
    const event = {target: element, animationComplete: vi.fn()};

    // The fake event has only the two fields that slideAway() uses. `as unknown as`
    // tells TypeScript to accept it as a full AnimationCallbackEvent.
    component.slideAway(event as unknown as AnimationCallbackEvent);
    // Let the `.then()` callback run: it runs after the current code has finished.
    await Promise.resolve();

    expect(animate).toHaveBeenCalledTimes(1);
    expect(event.animationComplete).toHaveBeenCalledTimes(1);
  });
});
