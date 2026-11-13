import {TestBed} from '@angular/core/testing';
import {I18nWelcome} from './welcome';

describe('I18nWelcome', () => {
  it('shows the source texts when no translation is loaded', async () => {
    const fixture = TestBed.createComponent(I18nWelcome);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toBe('Welcome to Samarkand!');
    expect(page.querySelector('p')?.textContent).toBe('Hello, Aziza! Your ticket is ready.');
    expect(page.querySelector('button')?.title).toBe('Print your ticket');
    expect(page.querySelector('.status')?.textContent).toBe('Valid for one day');
  });

  it('leaves no i18n attribute in the page', async () => {
    const fixture = TestBed.createComponent(I18nWelcome);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('[i18n]')).toBeNull();
    expect(page.querySelector('[i18n-title]')).toBeNull();
  });
});
