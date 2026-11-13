import {TestBed} from '@angular/core/testing';
import {PipesAsyncGreeting} from './async-greeting';

describe('PipesAsyncGreeting', () => {
  it('shows the value of the Promise when it arrives', async () => {
    const fixture = TestBed.createComponent(PipesAsyncGreeting);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('p')?.textContent).toBe('Loading…');

    await fixture.componentInstance.greeting;
    await fixture.whenStable();
    expect(page.querySelector('p')?.textContent).toBe('Hello from the server!');
  });
});
