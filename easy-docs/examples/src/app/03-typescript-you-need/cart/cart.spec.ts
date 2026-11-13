import {Cart} from './cart';

describe('Cart', () => {
  it('starts empty', () => {
    const cart = new Cart();
    expect(cart.state()).toBe('empty');
    expect(cart.total()).toBe(0);
  });

  it('adds items and adds up the prices', () => {
    const cart = new Cart();
    cart.add(1, 'Green tea', 3);
    cart.add(2, 'Bread', 1.5, 2);
    cart.add(1, 'Green tea', 3);

    expect(cart.itemNames()).toEqual(['Green tea', 'Bread']);
    expect(cart.find(1)?.quantity).toBe(2);
    expect(cart.total()).toBe(9);
    expect(cart.state()).toBe('filled');
  });

  it('has an optional note per item', () => {
    const cart = new Cart();
    cart.add(1, 'Green tea', 3);
    expect(cart.noteFor(1)).toBe('no note');
    cart.setNote(1, 'no sugar');
    expect(cart.noteFor(1)).toBe('no sugar');
    expect(cart.noteFor(99)).toBe('no note');
  });

  it('remembers that it was ordered', () => {
    const cart = new Cart();
    cart.add(1, 'Green tea', 3);
    cart.order();
    expect(cart.state()).toBe('ordered');
  });
});
