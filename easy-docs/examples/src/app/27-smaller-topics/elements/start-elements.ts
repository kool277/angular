import {createApplication} from '@angular/platform-browser';
import {defineGreetingElement} from './define-elements';

/** In a page that only needs the custom elements, main.ts calls this function. */
export async function startElements() {
  const app = await createApplication();
  defineGreetingElement(app.injector);
  return app;
}
