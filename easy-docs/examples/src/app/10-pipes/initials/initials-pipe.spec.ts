import {TestBed} from '@angular/core/testing';
import {toInitials} from './initials';
import {InitialsPipe} from './initials-pipe';
import {PipesInitialsDemo} from './initials-demo';

describe('InitialsPipe', () => {
  it('is a class with a transform method', () => {
    const pipe = new InitialsPipe();
    expect(pipe.transform('Timur Malik')).toBe('TM');
    expect(pipe.transform('a b c d', 3)).toBe('ABC');
  });

  it('shares its logic with a plain function', () => {
    expect(toInitials('  Nodira   Begim ')).toBe('NB');
  });

  it('works in a template, with and without a parameter', async () => {
    const fixture = TestBed.createComponent(PipesInitialsDemo);
    await fixture.whenStable();
    const lines = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('p')).map(
      (p) => p.textContent,
    );
    expect(lines).toEqual(['AK', 'AIS']);
  });
});
