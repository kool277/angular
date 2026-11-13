import {PizzaRecipe, labels} from './label';

describe('a class decorator', () => {
  it('attaches extra information to the class', () => {
    expect(labels.get(PizzaRecipe)).toBe('A recipe for pizza');
  });

  it('does not change how the class works', () => {
    expect(new PizzaRecipe().minutes).toBe(20);
  });
});
