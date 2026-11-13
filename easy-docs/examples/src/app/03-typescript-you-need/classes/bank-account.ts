// #docregion account
export class BankAccount {
  readonly owner: string;
  private balance = 0;
  protected readonly currency = 'UZS';

  constructor(owner: string) {
    this.owner = owner;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('The amount must be positive.');
    }
    this.balance = this.balance + amount;
  }

  describe(): string {
    return `${this.owner}: ${this.balance} ${this.currency}`;
  }
}
// #enddocregion account

// #docregion extends
export class SavingsAccount extends BankAccount {
  override describe(): string {
    return `Savings of ${super.describe()}`;
  }

  currencyName(): string {
    return this.currency; // allowed: protected members are visible in subclasses
  }
}
// #enddocregion extends
