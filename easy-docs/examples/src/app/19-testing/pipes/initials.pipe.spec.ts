import {Component, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TestingInitialsPipe} from './initials.pipe';

// #docregion class
describe('TestingInitialsPipe as a class', () => {
  const pipe = new TestingInitialsPipe();

  it('takes the first letter of every word', () => {
    expect(pipe.transform('ada lovelace')).toBe('AL');
  });

  it('ignores extra spaces', () => {
    expect(pipe.transform('  grace   hopper ')).toBe('GH');
  });
});
// #enddocregion class

// #docregion template
@Component({
  imports: [TestingInitialsPipe],
  template: `<span>{{ name() | initials }}</span>`,
})
class TestingInitialsHost {
  readonly name = signal('alan turing');
}

describe('TestingInitialsPipe in a template', () => {
  it('updates when the value changes', async () => {
    const fixture = TestBed.createComponent(TestingInitialsHost);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toBe('AT');

    fixture.componentInstance.name.set('tim berners lee');
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toBe('TBL');
  });
});
// #enddocregion template
