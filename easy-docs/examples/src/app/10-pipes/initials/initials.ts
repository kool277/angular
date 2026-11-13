// A plain function: you can use it in templates (through the pipe) and in TypeScript code.
export function toInitials(fullName: string, maxLetters = 2): string {
  return fullName
    .split(' ')
    .filter((word) => word !== '')
    .map((word) => word[0].toUpperCase())
    .slice(0, maxLetters)
    .join('');
}
