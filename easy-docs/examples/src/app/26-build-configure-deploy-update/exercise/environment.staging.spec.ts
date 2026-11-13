import {environment as production} from '../environments/environment';
import {environment as staging} from './environment.staging';

describe('staging environment', () => {
  it('has the same keys as the base file, with staging values', () => {
    expect(Object.keys(staging).sort()).toEqual(Object.keys(production).sort());
    expect(staging.apiUrl).toBe('https://staging-api.silkroad-museum.example');
  });
});
