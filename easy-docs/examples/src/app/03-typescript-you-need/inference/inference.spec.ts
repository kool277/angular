import {addVisitor, average, siteName, visitors} from './inference';

describe('type inference', () => {
  it('infers number for a let that starts with a number', () => {
    expectTypeOf(visitors).toEqualTypeOf<number>();
    expect(addVisitor()).toBe(1);
  });

  it('infers the exact text for a const string', () => {
    expectTypeOf<typeof siteName>().toEqualTypeOf<'My Shop'>();
  });

  it('infers the return type of a function', () => {
    expectTypeOf(addVisitor).returns.toEqualTypeOf<number>();
    expectTypeOf(average).returns.toEqualTypeOf<number>();
    expect(average([2, 4, 6])).toBe(4);
  });
});
