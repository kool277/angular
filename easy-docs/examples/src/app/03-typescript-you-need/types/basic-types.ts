// #docregion variables
export const city: string = 'Tashkent';
export const temperature: number = 21.5;
export const isSunny: boolean = true;
export const languages: string[] = ['Uzbek', 'Russian', 'English'];
// #enddocregion variables

// #docregion function
export function describeWeather(place: string, degrees: number): string {
  return `${place}: ${degrees} °C`;
}
// #enddocregion function

// #docregion void
export function logWeather(place: string): void {
  console.log(`Weather report for ${place}`);
}
// #enddocregion void
