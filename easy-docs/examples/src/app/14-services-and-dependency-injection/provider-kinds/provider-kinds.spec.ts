import {TestBed} from '@angular/core/testing';
import {DiProviderKinds} from './provider-kinds';

describe('DiProviderKinds', () => {
  it('builds the greeting from useValue, useClass and useFactory', async () => {
    const fixture = TestBed.createComponent(DiProviderKinds);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.greeting')?.textContent).toBe('Welcome to Tasty Recipes, Aziz!');
  });

  it('gives the same object for a useExisting alias', async () => {
    const fixture = TestBed.createComponent(DiProviderKinds);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.same')?.textContent).toBe('Same storage object: true');
  });
});
