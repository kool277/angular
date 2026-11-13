import {Counter} from './counter';

describe('Counter', () => {
  it('creates objects that keep their own data', () => {
    const byOne = new Counter(1);
    const byTen = new Counter(10);

    byOne.increase();
    byTen.increase();
    byTen.increase();

    expect(byOne.count).toBe(1);
    expect(byTen.count).toBe(20);
  });
});
