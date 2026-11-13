import {TestBed} from '@angular/core/testing';
import {TplCharCounter} from './char-counter';

describe('TplCharCounter', () => {
  async function type(text: string) {
    const fixture = TestBed.createComponent(TplCharCounter);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const box = page.querySelector('textarea')!;

    box.value = text;
    box.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    return page.querySelector('.count')!;
  }

  it('counts the characters', async () => {
    const count = await type('Salom!');
    expect(count.textContent).toBe('6 / 20');
    expect(count.classList).not.toContain('too-long');
  });

  it('marks a text that is too long', async () => {
    const count = await type('This message is far too long.');
    expect(count.textContent).toBe('29 / 20');
    expect(count.classList).toContain('too-long');
  });
});
