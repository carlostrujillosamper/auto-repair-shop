export const promiseDelay = (ms: number): Promise<number> =>
  new Promise((resolve) => setTimeout(resolve, ms));
