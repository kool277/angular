import {TestBed} from '@angular/core/testing';
import {SignalsMessageBox} from './message-box';

describe('SignalsMessageBox', () => {
  async function type(text: string) {
    const fixture = TestBed.createComponent(SignalsMessageBox);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const box = page.querySelector('textarea')!;
    box.value = text;
    box.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    return page;
  }

  it('counts the characters that are left', async () => {
    const page = await type('Hello');
    expect(page.querySelector('p')?.textContent).toBe('15 characters left');
    expect(page.querySelector('button')?.disabled).toBe(false);
  });

  it('warns and disables the button when the text is too long', async () => {
    const page = await type('This message is far too long');
    expect(page.querySelector('p')?.textContent).toBe('-8 characters left');
    expect(page.querySelector('p')?.classList).toContain('warning');
    expect(page.querySelector('button')?.disabled).toBe(true);
  });
});
