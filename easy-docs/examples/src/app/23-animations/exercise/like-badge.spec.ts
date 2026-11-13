import {TestBed} from '@angular/core/testing';
import {AnimLikeBadge} from './like-badge';

describe('AnimLikeBadge', () => {
  it('shows the badge after a like and removes it after an unlike', async () => {
    const fixture = TestBed.createComponent(AnimLikeBadge);
    const page = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    const button = page.querySelector('button')!;

    button.click();
    await fixture.whenStable();
    expect(page.querySelector('.badge')?.textContent).toContain('Liked');
    expect(button.textContent).toBe('Unlike');

    button.click();
    await fixture.whenStable();
    expect(page.querySelector('.badge')).toBeNull();
  });
});
