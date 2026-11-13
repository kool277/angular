import {TestBed} from '@angular/core/testing';
import {IntroHello} from './hello';

describe('IntroHello', () => {
  it('shows a heading with a greeting', async () => {
    const fixture = TestBed.createComponent(IntroHello);
    await fixture.whenStable();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toBe('Hello, Angular!');
  });
});
