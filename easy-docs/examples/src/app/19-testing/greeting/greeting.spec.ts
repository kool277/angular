import {TestBed} from '@angular/core/testing';
import {TestingGreeting} from './greeting';

describe('TestingGreeting', () => {
  it('greets the world at first', async () => {
    const fixture = TestBed.createComponent(TestingGreeting);
    await fixture.whenStable();

    const heading: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toBe('Hello, world!');
  });

  it('greets Ada after a click on the button', async () => {
    const fixture = TestBed.createComponent(TestingGreeting);
    await fixture.whenStable();

    // Act
    fixture.nativeElement.querySelector('button').click();
    // Wait
    await fixture.whenStable();
    // Assert
    expect(fixture.nativeElement.querySelector('h1').textContent).toBe('Hello, Ada!');
  });
});
