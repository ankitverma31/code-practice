const memoize = function (fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    const computed = fn(...arguments);
    cache[key] = computed;
    return computed;
  };
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(100); // slow
console.log(a);
let b = memoizedFactorial(100); // faster
console.log(b);
