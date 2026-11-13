// #docregion decorator
export const labels = new Map<Function, string>();

export function Label(text: string) {
  return (target: Function) => {
    labels.set(target, text);
  };
}
// #enddocregion decorator

// #docregion use
@Label('A recipe for pizza')
export class PizzaRecipe {
  minutes = 20;
}
// #enddocregion use
