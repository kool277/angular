import {Point, Product, bread, findProduct, tea, totalPrice} from './product';

describe('interfaces and type aliases', () => {
  it('adds up the prices of products', () => {
    expect(totalPrice([tea, bread])).toBe(4.5);
  });

  it('finds a product by id', () => {
    expect(findProduct([tea, bread], 2)?.name).toBe('Bread');
  });

  it('describes the shape of an object', () => {
    const corner: Point = {x: 0, y: 10};
    expect(corner.y).toBe(10);
    expectTypeOf(tea).toEqualTypeOf<Product>();
    expectTypeOf(findProduct).returns.toEqualTypeOf<Product | undefined>();
  });
});
