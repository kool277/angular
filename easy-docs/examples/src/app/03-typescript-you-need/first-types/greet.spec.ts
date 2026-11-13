import {greet} from './greet';

describe('greet', () => {
  it('returns a greeting for the given name', () => {
    expect(greet('Amina')).toBe('Hello, Amina!');
  });

  it('accepts only a string and returns a string', () => {
    expectTypeOf(greet).parameter(0).toEqualTypeOf<string>();
    expectTypeOf(greet).returns.toEqualTypeOf<string>();
  });
});
