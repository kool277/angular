// #docregion find
export interface Person {
  name: string;
  address?: {city: string};
}

export const people: Person[] = [{name: 'Amina', address: {city: 'Bukhara'}}, {name: 'Bekzod'}];

export function findPerson(name: string): Person | undefined {
  return people.find((person) => person.name === name);
}
// #enddocregion find

// #docregion check
export function cityOf(name: string): string {
  const person = findPerson(name);
  if (person === undefined) {
    return 'unknown person';
  }
  // Here TypeScript knows: person is a Person.
  return person.address?.city ?? 'no city';
}
// #enddocregion check

// #docregion short
export function cityOrNothing(name: string): string | undefined {
  return findPerson(name)?.address?.city;
}
// #enddocregion short

// #docregion assertion
export function aminasCity(): string {
  // We know that Amina is in the list and has an address, so we say so with `!`.
  return findPerson('Amina')!.address!.city;
}
// #enddocregion assertion
