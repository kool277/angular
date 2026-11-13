import {TestBed} from '@angular/core/testing';
import {FirstAppFinished} from './finished-app';

describe('FirstAppFinished', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAppFinished],
    }).compileComponents();
  });

  // #docregion title-test
  it('should render title', async () => {
    const fixture = TestBed.createComponent(FirstAppFinished);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Amina');
  });
  // #enddocregion title-test

  it('should show the Welcome component inside the page', async () => {
    const fixture = TestBed.createComponent(FirstAppFinished);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-welcome')?.textContent).toContain('Welcome!');
  });
});
