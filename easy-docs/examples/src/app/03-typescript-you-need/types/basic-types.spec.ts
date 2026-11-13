import {city, describeWeather, languages, logWeather, temperature} from './basic-types';

describe('basic types', () => {
  it('describes the weather', () => {
    expect(describeWeather(city, temperature)).toBe('Tashkent: 21.5 °C');
  });

  it('has an array of strings', () => {
    expectTypeOf(languages).toEqualTypeOf<string[]>();
    expect(languages.length).toBe(3);
  });

  it('returns nothing from a void function', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    expect(logWeather('Samarkand')).toBeUndefined();
    expect(log).toHaveBeenCalledWith('Weather report for Samarkand');
    log.mockRestore();
  });
});
