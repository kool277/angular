import {BaseHarnessFilters, ComponentHarness, HarnessPredicate} from '@angular/cdk/testing';

export class TestingCounterHarness extends ComponentHarness {
  // The harness finds components by this CSS selector.
  static hostSelector = 'app-testing-counter';

  // Lets tests pick one counter, for example with { selector: '#cups' }.
  static with(options: BaseHarnessFilters = {}): HarnessPredicate<TestingCounterHarness> {
    return new HarnessPredicate(TestingCounterHarness, options);
  }

  private readonly countElement = this.locatorFor('.count');
  private readonly plusButton = this.locatorFor('button.plus');
  private readonly resetButton = this.locatorFor('button.reset');

  async getCount(): Promise<number> {
    return Number(await (await this.countElement()).text());
  }

  async increment(times = 1): Promise<void> {
    const button = await this.plusButton();
    for (let i = 0; i < times; i++) {
      await button.click();
    }
  }

  async reset(): Promise<void> {
    await (await this.resetButton()).click();
  }
}
