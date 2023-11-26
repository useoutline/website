export const TimerUtils = {
  sleep: (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
};
