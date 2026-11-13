import {TestBed} from '@angular/core/testing';
import {FormsUsername} from './username';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('FormsUsername', () => {
  async function type(text: string) {
    const fixture = TestBed.createComponent(FormsUsername);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const input = page.querySelector('input')!;
    input.value = text;
    input.dispatchEvent(new Event('input'));
    return {fixture, page};
  }

  it('waits until the user stops typing before it writes the model', async () => {
    const {fixture} = await type('aziza');
    expect(fixture.componentInstance.nameModel().username).toBe('');
    await wait(250);
    expect(fixture.componentInstance.nameModel().username).toBe('aziza');
  });

  it('shows "Checking…" and then the error for a taken name', async () => {
    const {fixture, page} = await type('aziza');
    await wait(230);
    expect(fixture.componentInstance.nameForm.username().pending()).toBe(true);
    expect(page.querySelector('.pending')?.textContent).toBe('Checking…');

    await fixture.whenStable();
    expect(page.querySelector('.error')?.textContent).toBe('This name is already taken.');
    expect(fixture.componentInstance.nameForm().invalid()).toBe(true);
  });

  it('accepts a free name', async () => {
    const {fixture, page} = await type('malika');
    await wait(320);
    await fixture.whenStable();
    expect(page.querySelector('.error')).toBeNull();
    expect(fixture.componentInstance.nameForm().valid()).toBe(true);
  });
});
