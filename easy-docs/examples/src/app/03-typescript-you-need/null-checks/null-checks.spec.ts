import {cityOf, cityOrNothing, findPerson, aminasCity} from './null-checks';

describe('strict null checks', () => {
  it('types the result of find as possibly undefined', () => {
    expectTypeOf(findPerson).returns.toEqualTypeOf<
      {name: string; address?: {city: string}} | undefined
    >();
    expect(findPerson('Nobody')).toBeUndefined();
  });

  it('handles every case', () => {
    expect(cityOf('Amina')).toBe('Bukhara');
    expect(cityOf('Bekzod')).toBe('no city');
    expect(cityOf('Nobody')).toBe('unknown person');
  });

  it('stops at the first missing value with ?.', () => {
    expect(cityOrNothing('Amina')).toBe('Bukhara');
    expect(cityOrNothing('Bekzod')).toBeUndefined();
    expect(cityOrNothing('Nobody')).toBeUndefined();
  });

  it('trusts the ! operator', () => {
    expect(aminasCity()).toBe('Bukhara');
  });
});
