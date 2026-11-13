import {count, firstItem, names, prices, selectedName} from './generics';

describe('generics', () => {
  it('keeps the type of the items', () => {
    const name = firstItem(names);
    const price = firstItem(prices);
    expectTypeOf(name).toEqualTypeOf<string | undefined>();
    expectTypeOf(price).toEqualTypeOf<number | undefined>();
    expect(name).toBe('Amina');
    expect(firstItem([])).toBeUndefined();
  });

  it('creates signals that hold one type of value', () => {
    count.set(5);
    selectedName.set('Bekzod');
    expect(count()).toBe(5);
    expect(selectedName()).toBe('Bekzod');
    expectTypeOf(count()).toEqualTypeOf<number>();
    expectTypeOf(selectedName()).toEqualTypeOf<string | null>();
  });
});
