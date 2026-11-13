// #docregion inferred
export let visitors = 0; // TypeScript infers: number
export const siteName = 'My Shop'; // TypeScript infers: 'My Shop'

export function addVisitor() {
  visitors = visitors + 1;
  return visitors; // the return type is inferred: number
}
// #enddocregion inferred

// #docregion annotate
export function average(values: number[]) {
  let sum = 0;
  for (const value of values) {
    sum = sum + value;
  }
  return sum / values.length;
}
// #enddocregion annotate
