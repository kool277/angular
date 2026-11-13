const QUOTES = [
  'Tea is liquid wisdom.',
  'Where there is tea, there is hope.',
  'A cup of tea makes everything better.',
];

/** Pretends to be a slow server: the quote arrives after 50 ms. */
export function loadQuote(index: number, abortSignal: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (index < QUOTES.length) {
        resolve(QUOTES[index]);
      } else {
        reject(new Error(`There is no quote number ${index + 1}.`));
      }
    }, 50);
    // Stop waiting when the resource does not need this answer anymore.
    abortSignal.addEventListener('abort', () => clearTimeout(timer));
  });
}
