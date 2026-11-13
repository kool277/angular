import {TestBed} from '@angular/core/testing';
import {TplInterpolation} from './interpolation';

describe('TplInterpolation', () => {
  async function render() {
    const fixture = TestBed.createComponent(TplInterpolation);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    return (selector: string) => page.querySelector(selector)?.textContent;
  }

  it('shows fields, calculations and method results', async () => {
    const text = await render();
    expect(text('.name')).toBe('Amina Karimova');
    expect(text('.total')).toBe('Total: 36000 UZS');
    expect(text('.initials')).toBe('Initials: AK');
  });

  it('shows undefined as nothing and an array as a list with commas', async () => {
    const text = await render();
    expect(text('.nickname')).toBe('Nickname: ');
    expect(text('.tags')).toBe('Tags: new,popular');
  });
});
