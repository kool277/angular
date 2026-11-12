// Fix 1 (compiler): `&` selectors nested in `:host` must not get the `_ngcontent` attribute.
//
// The Angular CLI flattens nested CSS before the ahead-of-time compiler scopes it, so an app
// built by the CLI does not hit this bug. It shows when Angular's compiler scopes nested CSS
// itself, for example for a component compiled just in time (JIT), as below, or in other build
// setups that keep CSS nesting.
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';

// Calling the decorator as a function keeps the CLI from compiling this component ahead of
// time; Angular compiles it in the browser (JIT) when the test creates it.
const Avatar = Component({
  selector: 'app-avatar',
  host: {class: 'md'},
  template: '',
  styles: `
    :host {
      display: block;
      &.md {
        width: 70px;
      }
    }
  `,
})(class {});

describe('fix 1: & nested in :host', () => {
  it('keeps `&.md` unscoped so that it matches the host element', async () => {
    const fixture = TestBed.createComponent(Avatar);
    await fixture.whenStable();
    const css = Array.from(document.querySelectorAll('style'))
      .map((style) => style.textContent ?? '')
      .join('\n');
    expect(css).toContain('&.md');
    // Stock 22.2.x emits `&.md[_ngcontent-...]`, which never matches the host element.
    expect(css).not.toMatch(/&\.md\[_ngcontent/);
  });
});
