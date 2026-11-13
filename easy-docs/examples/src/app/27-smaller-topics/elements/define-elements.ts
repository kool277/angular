import {Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {ElementsGreetingCard} from './greeting-card';

export function defineGreetingElement(injector: Injector) {
  if (!customElements.get('museum-greeting')) {
    const GreetingElement = createCustomElement(ElementsGreetingCard, {injector});
    customElements.define('museum-greeting', GreetingElement);
  }
}
