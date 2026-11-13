import {BankAccount, SavingsAccount} from './bank-account';

describe('BankAccount', () => {
  it('changes its private balance only through methods', () => {
    const account = new BankAccount('Amina');
    account.deposit(500);
    account.deposit(250);
    expect(account.describe()).toBe('Amina: 750 UZS');
  });

  it('refuses a negative amount', () => {
    const account = new BankAccount('Amina');
    expect(() => account.deposit(-5)).toThrowError('The amount must be positive.');
  });

  it('lets a subclass reuse and change behavior', () => {
    const savings = new SavingsAccount('Bekzod');
    savings.deposit(100);
    expect(savings.describe()).toBe('Savings of Bekzod: 100 UZS');
    expect(savings.currencyName()).toBe('UZS');
  });
});
