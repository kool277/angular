import {renderRecipePage} from './render-recipe-page';

describe('SsrRecipePage on the server', () => {
  it('waits for the HTTP answer before it sends the page', async () => {
    const html = await renderRecipePage();
    expect(html).toContain('<h1>Plov</h1>');
    expect(html).toContain('Ready in 90 minutes.');
    expect(html).not.toContain('Loading…');
  });

  it('sends hydration data with the page', async () => {
    const html = await renderRecipePage();
    expect(html).toContain('<script id="ng-state" type="application/json">');
  });
});
