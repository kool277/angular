import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {TestBed} from '@angular/core/testing';
import {TestingTwoCounters} from './counter';
import {TestingCounterHarness} from './counter-harness';

describe('TestingCounter with a harness', () => {
  // #docregion use
  it('counts and resets', async () => {
    const fixture = TestBed.createComponent(TestingTwoCounters);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const cups = await loader.getHarness(TestingCounterHarness.with({selector: '#cups'}));
    await cups.increment(3);
    expect(await cups.getCount()).toBe(3);

    await cups.reset();
    expect(await cups.getCount()).toBe(0);
  });

  it('finds every counter on the page', async () => {
    const fixture = TestBed.createComponent(TestingTwoCounters);
    const loader = TestbedHarnessEnvironment.loader(fixture);

    const counters = await loader.getAllHarnesses(TestingCounterHarness);
    await counters[1].increment();

    expect(await counters[0].getCount()).toBe(0);
    expect(await counters[1].getCount()).toBe(1);
  });
  // #enddocregion use
});
