// #docregion optional-property
export interface User {
  name: string;
  nickname?: string;
}

export function displayName(user: User): string {
  return user.nickname ?? user.name;
}
// #enddocregion optional-property

// #docregion optional-parameter
export function welcome(name: string, greeting?: string): string {
  return `${greeting ?? 'Hello'}, ${name}!`;
}

export function repeat(text: string, times = 2): string {
  return text.repeat(times);
}
// #enddocregion optional-parameter
