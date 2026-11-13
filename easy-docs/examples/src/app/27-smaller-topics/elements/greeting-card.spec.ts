import {ApplicationRef, Injector} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {defineGreetingElement} from './define-elements';

// A browser can define a tag name only once, and the element keeps the injector it got.
// So this file has one test that uses a single TestBed setup.
describe('museum-greeting custom element', () => {
  it('maps the attribute to the input and the output to a DOM event', async () => {
    defineGreetingElement(TestBed.inject(Injector));
    const element = document.createElement('museum-greeting');
    element.setAttribute('name', 'Aziza');
    document.body.appendChild(element);
    await TestBed.inject(ApplicationRef).whenStable();

    expect(element.querySelector('p')?.textContent).toBe('Welcome, Aziza!');

    const listener = vi.fn();
    element.addEventListener('greeted', (event) => listener((event as CustomEvent).detail));
    element.querySelector('button')!.click();
    expect(listener).toHaveBeenCalledWith('Aziza');

    element.remove();
  });
});
