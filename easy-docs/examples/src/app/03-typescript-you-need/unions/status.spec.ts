import {LoadState, formatId, stateLabel} from './status';

describe('union types', () => {
  it('turns each state into a label', () => {
    const states: LoadState[] = ['loading', 'ready', 'error'];
    expect(states.map(stateLabel)).toEqual(['Please wait…', 'Done!', 'Something went wrong.']);
  });

  it('accepts a number or a string', () => {
    expect(formatId(42)).toBe('#42');
    expect(formatId('ab-7')).toBe('#AB-7');
  });

  it('allows only the listed texts', () => {
    expectTypeOf<'ready'>().toExtend<LoadState>();
    expectTypeOf<'done'>().not.toExtend<LoadState>();
  });
});
