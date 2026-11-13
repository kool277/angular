import {User, displayName, repeat, welcome} from './user';

describe('optional properties and parameters', () => {
  it('uses the nickname when there is one', () => {
    const user: User = {name: 'Amina Karimova', nickname: 'Ami'};
    expect(displayName(user)).toBe('Ami');
  });

  it('falls back to the name without a nickname', () => {
    expect(displayName({name: 'Bekzod'})).toBe('Bekzod');
  });

  it('has an optional greeting', () => {
    expect(welcome('Amina')).toBe('Hello, Amina!');
    expect(welcome('Amina', 'Salom')).toBe('Salom, Amina!');
  });

  it('uses a default value for a missing parameter', () => {
    expect(repeat('ha')).toBe('haha');
    expect(repeat('ha', 3)).toBe('hahaha');
  });

  it('types an optional property as possibly undefined', () => {
    expectTypeOf<User['nickname']>().toEqualTypeOf<string | undefined>();
  });
});
