import {renderOnServer} from './render-hydrated';
import {SsrLikeButton} from './like-button';

describe('server rendering with hydration', () => {
  it('adds the information that the browser needs to hydrate', async () => {
    const html = await renderOnServer(SsrLikeButton, 'app-ssr-like-button');
    // The page itself:
    expect(html).toContain('Like (0)</button>');
    // Hydration data: an `ngh` attribute and a script with the serialized state.
    expect(html).toContain('ngh="0"');
    expect(html).toContain('<script id="ng-state" type="application/json">');
    // Event replay: the server marks elements with listeners.
    expect(html).toContain('jsaction="click:;"');
  });

  it('adds no hydration data without provideClientHydration()', async () => {
    const html = await renderOnServer(SsrLikeButton, 'app-ssr-like-button', false);
    expect(html).toContain('Like (0)</button>');
    expect(html).not.toContain('ngh=');
    expect(html).not.toContain('jsaction');
  });
});
