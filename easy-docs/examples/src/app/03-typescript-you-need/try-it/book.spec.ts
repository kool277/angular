import {Book, fullTitle, lastItem, shelf} from './book';

describe('the book exercise', () => {
  it('adds the subtitle when there is one', () => {
    expect(fullTitle(shelf[0])).toBe('Learning Angular');
    expect(fullTitle(shelf[1])).toBe('TypeScript: The good parts');
  });

  it('returns the last item of any array', () => {
    expect(lastItem(shelf)?.author).toBe('B. Usmonov');
    expect(lastItem([1, 2, 3])).toBe(3);
    expect(lastItem<string>([])).toBeUndefined();
    expectTypeOf(lastItem(shelf)).toEqualTypeOf<Book | undefined>();
  });
});
