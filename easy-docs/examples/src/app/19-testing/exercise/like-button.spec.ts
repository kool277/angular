import {TestBed} from '@angular/core/testing';
import {TestingLikeButton} from './like-button';

describe('TestingLikeButton', () => {
  async function setup(limit?: number) {
    const fixture = TestBed.createComponent(TestingLikeButton);
    if (limit !== undefined) {
      fixture.componentRef.setInput('limit', limit);
    }
    await fixture.whenStable();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    return {fixture, button};
  }

  it('starts with 0 likes', async () => {
    const {button} = await setup();
    expect(button.textContent!.trim()).toBe('Like (0)');
  });

  it('counts clicks and emits the new number', async () => {
    const {fixture, button} = await setup();
    const emitted = vi.fn();
    fixture.componentInstance.liked.subscribe(emitted);

    button.click();
    button.click();
    await fixture.whenStable();

    expect(button.textContent!.trim()).toBe('Like (2)');
    expect(emitted).toHaveBeenNthCalledWith(1, 1);
    expect(emitted).toHaveBeenNthCalledWith(2, 2);
  });

  it('is disabled when the limit is reached', async () => {
    const {fixture, button} = await setup(1);

    button.click();
    await fixture.whenStable();

    expect(button.disabled).toBe(true);
  });

  it('shows the label input', async () => {
    const {fixture, button} = await setup();
    fixture.componentRef.setInput('label', 'Love it');
    await fixture.whenStable();
    expect(button.textContent!.trim()).toBe('Love it (0)');
  });
});
