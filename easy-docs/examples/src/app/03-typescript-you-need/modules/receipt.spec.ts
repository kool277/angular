import {memberPrice} from './prices';
import {receiptLine} from './receipt';

describe('import and export', () => {
  it('uses exported functions from another file', () => {
    expect(receiptLine('Tea', 10)).toBe('Tea: 11.2 (tax 12%)');
  });

  it('can call an exported function that uses a private helper', () => {
    expect(memberPrice(10)).toBe(10.08);
  });
});
