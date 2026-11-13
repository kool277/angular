import {renderWelcomePage} from './render-welcome';

describe('renderWelcomePage', () => {
  it('turns the component into an HTML string', async () => {
    const html = await renderWelcomePage();
    expect(html).toContain('<h1>Welcome to Tasty Recipes</h1>');
    expect(html).toContain('<p>We have 42 recipes for you.</p>');
  });
});
