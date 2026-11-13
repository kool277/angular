import {startElements} from './start-elements';

describe('startElements', () => {
  it('starts Angular without a root component and defines the tag', async () => {
    const app = await startElements();
    expect(customElements.get('museum-greeting')).toBeDefined();
    app.destroy();
  });
});
