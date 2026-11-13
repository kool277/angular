import {computed, signal} from '@angular/core';

describe('signal and computed outside a component', () => {
  // #docregion basics
  it('reads, sets and updates a signal', () => {
    const name = signal('Aziz');
    expect(name()).toBe('Aziz'); // read: call the signal

    name.set('Malika'); // replace the value
    expect(name()).toBe('Malika');

    name.update((old) => old.toUpperCase()); // new value from the old one
    expect(name()).toBe('MALIKA');
  });
  // #enddocregion basics

  // #docregion lazy
  it('runs a computed only when needed and remembers the result', () => {
    const price = signal(10);
    let runs = 0;
    const withTax = computed(() => {
      runs = runs + 1;
      return price() * 1.2;
    });

    expect(runs).toBe(0); // not run yet: nobody asked for the value

    expect(withTax()).toBe(12);
    expect(withTax()).toBe(12);
    expect(runs).toBe(1); // the second read used the remembered value

    price.set(20);
    expect(runs).toBe(1); // still lazy: it runs on the next read
    expect(withTax()).toBe(24);
    expect(runs).toBe(2);
  });
  // #enddocregion lazy

  // #docregion dynamic
  it('depends only on the signals it read the last time', () => {
    const showCount = signal(false);
    const count = signal(0);
    let runs = 0;
    const message = computed(() => {
      runs = runs + 1;
      return showCount() ? `The count is ${count()}.` : 'Nothing to see.';
    });

    expect(message()).toBe('Nothing to see.');
    count.set(5); // `count` was not read, so this does not matter
    expect(message()).toBe('Nothing to see.');
    expect(runs).toBe(1);

    showCount.set(true);
    expect(message()).toBe('The count is 5.');
    expect(runs).toBe(2);
  });
  // #enddocregion dynamic
});
