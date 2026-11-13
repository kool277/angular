// #docregion imports
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TestingHighlight} from './highlight';
// #enddocregion imports

// #docregion host
@Component({
  imports: [TestingHighlight],
  template: `
    <p appTestingHighlight="lightblue">Blue</p>
    <p appTestingHighlight>Yellow</p>
    <p>Plain</p>
  `,
})
class TestingHighlightHost {}

describe('TestingHighlight', () => {
  it('colors only the elements that have the directive', async () => {
    const fixture = TestBed.createComponent(TestingHighlightHost);
    await fixture.whenStable();

    const highlighted = fixture.debugElement.queryAll(By.directive(TestingHighlight));
    expect(highlighted.length).toBe(2);
    expect(highlighted[0].nativeElement.style.backgroundColor).toBe('lightblue');
    expect(highlighted[1].nativeElement.style.backgroundColor).toBe('yellow');

    const plain = fixture.debugElement.query(By.css('p:not([appTestingHighlight])'));
    expect(plain.nativeElement.style.backgroundColor).toBe('');
  });
});
// #enddocregion host
