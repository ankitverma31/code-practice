// Problem Statement: Advanced Currying

// The code you provided is a currying function, which transforms a function (fn) into a curried version that collects arguments until it has enough to execute fn. This implementation of currying is based on binding arguments progressively, allowing arguments to be collected one by one, or in groups, until the required number of arguments is reached.

// How It Works
// curry function:

// Takes a function fn as input and returns a new function called curried.
// The purpose of curried is to collect arguments until it has enough to call fn.
// curried function:

// Takes any number of arguments (...args) in each call.
// It checks whether the number of collected arguments (args.length) is equal to the number of parameters fn expects (fn.length).
// If not enough arguments have been provided (fn.length !== args.length), it returns a new curried function with the currently collected arguments bound to it.
// If enough arguments have been provided (fn.length === args.length), it calls fn with all collected arguments.
// curried.bind(null, ...args):

// This part is the key to the recursive currying. The bind method creates a new function with the currently collected arguments pre-filled.
// This bound function can then be called again with additional arguments, collecting them progressively until it has enough to call fn.
// Returning the Result:

// Once the required number of arguments has been collected, fn(...args) is executed, returning the final result of fn with all arguments applied.

const curry = (fn) => {
  return function curried(...args) {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  }
}

const totalNum = (a, b, c) => a + b + c

const curriedTotal = curry(totalNum)
console.log(curriedTotal(10)(20)(30))
console.log(curriedTotal(10, 20, 30))
console.log(curriedTotal(10, 20)(30))

function add(a) {
  return function (b) {
    if (b === undefined) return a // Stop when () is encountered
    return add(a + b) // Continue adding numbers
  }
}

const add = (a) => (b) => b === undefined ? a : add(a + b)

// Usage:
console.log(add(4)(3)()) // Output: 7
console.log(add(1)(2)(3)(4)()) // Output: 10
console.log(add(10)()) // Output: 10
