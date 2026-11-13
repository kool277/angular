// #docregion literal-union
export type LoadState = 'loading' | 'ready' | 'error';

export function stateLabel(state: LoadState): string {
  switch (state) {
    case 'loading':
      return 'Please wait…';
    case 'ready':
      return 'Done!';
    case 'error':
      return 'Something went wrong.';
  }
}
// #enddocregion literal-union

// #docregion narrowing
export function formatId(id: string | number): string {
  if (typeof id === 'number') {
    // Here TypeScript knows: id is a number.
    return '#' + id.toFixed(0);
  }
  // Here TypeScript knows: id is a string.
  return '#' + id.toUpperCase();
}
// #enddocregion narrowing
