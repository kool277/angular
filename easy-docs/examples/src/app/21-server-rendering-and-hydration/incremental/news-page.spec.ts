import {renderOnServer} from '../hydration/render-hydrated';
import {SsrNewsPage} from './news-page';

describe('SsrNewsPage on the server', () => {
  it('renders the content of a block with a hydrate trigger', async () => {
    const html = await renderOnServer(SsrNewsPage, 'app-ssr-news-page');
    expect(html).toContain('<p>12 comments</p>');
    expect(html).not.toContain('<p>Comments</p>');
  });

  it('renders only the placeholder of a block without a hydrate trigger', async () => {
    const html = await renderOnServer(SsrNewsPage, 'app-ssr-news-page');
    expect(html).toContain('<p>More articles</p>');
    expect(html).not.toContain('Related articles');
  });
});
