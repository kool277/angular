import {TestBed} from '@angular/core/testing';
import {CompUserBadge} from './user-badge';

describe('CompUserBadge', () => {
  it('renders its template inside the host element', async () => {
    const fixture = TestBed.createComponent(CompUserBadge);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    const badge = host.querySelector('span.badge') as HTMLElement;
    expect(badge.textContent).toBe('Amina K.');
  });

  it('applies its own styles', async () => {
    const fixture = TestBed.createComponent(CompUserBadge);
    await fixture.whenStable();

    const badge = (fixture.nativeElement as HTMLElement).querySelector('span.badge')!;
    expect(getComputedStyle(badge).backgroundColor).toBe('rgb(230, 230, 250)'); // lavender;
  });
});
