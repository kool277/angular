import {CSP_NONCE} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {SecCspBadge} from './csp-nonce';

describe('CSP_NONCE', () => {
  it('puts the nonce on the <style> elements that Angular adds', async () => {
    TestBed.configureTestingModule({
      providers: [{provide: CSP_NONCE, useValue: 'r4nd0mV4lue'}],
    });
    const fixture = TestBed.createComponent(SecCspBadge);
    await fixture.whenStable();

    const style = Array.from(document.head.querySelectorAll('style')).find((element) =>
      element.textContent?.includes('darkgreen'),
    );
    expect(style?.getAttribute('nonce')).toBe('r4nd0mV4lue');
  });
});
