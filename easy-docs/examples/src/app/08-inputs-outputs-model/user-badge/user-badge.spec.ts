import {TestBed} from '@angular/core/testing';
import {InputsUserBadge, InputsUserBadgeDemo} from './user-badge';

describe('InputsUserBadge', () => {
  it('gets its data from the parent template', async () => {
    const fixture = TestBed.createComponent(InputsUserBadgeDemo);
    await fixture.whenStable();
    const lines = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('p')).map(
      (p) => p.textContent,
    );
    // The second badge did not set `role`, so it uses the default value.
    expect(lines).toEqual(['Aziza (admin)', 'Timur (guest)']);
  });

  // #docregion set-input
  it('can be tested alone with setInput', async () => {
    const fixture = TestBed.createComponent(InputsUserBadge);
    fixture.componentRef.setInput('name', 'Malika');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent).toBe('Malika (guest)');
  });
  // #enddocregion set-input
});
