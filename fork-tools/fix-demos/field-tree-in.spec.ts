// Fix 2 (forms): the `in` operator sees the properties of a signal forms field tree.
import {Injector, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {form} from '@angular/forms/signals';

describe('fix 2: `in` on a FieldTree', () => {
  it('reports the iterator and the child fields', () => {
    const f = form(signal({name: 'Ada', tags: ['a']}), {injector: TestBed.inject(Injector)});
    expect(Symbol.iterator in f).toBe(true); // stock: false
    expect('name' in f).toBe(true); // stock: false
    expect('length' in f).toBe(false); // stock: true
  });
});
