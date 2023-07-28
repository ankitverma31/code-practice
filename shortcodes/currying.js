// Problem Statement: Advanced Currying

const curry = (fn) => {
  return function curried(...args) {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  };
};

const totalNum = (a, b, c) => a + b + c;

const curriedTotal = curry(totalNum);
console.log(curriedTotal(10)(20)(30));
console.log(curriedTotal(10, 20, 30));
console.log(curriedTotal(10, 20)(30));
