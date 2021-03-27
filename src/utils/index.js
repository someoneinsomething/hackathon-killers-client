export function throttle(f, t) {
  let lastCall = null;

  return (args) => {
    const previousCall = lastCall;
    lastCall = Date.now();

    if (previousCall === null || lastCall - previousCall > t) {
      f(args);
    }
  };
}

export const debounce = (f, ms) => {
  let isCooldown = false;

  return function wrapper(...arg) {
    if (isCooldown) return;

    f.apply(this, arg);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };
};
