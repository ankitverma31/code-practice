// Problem Statement: Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fibonacci = (n, memo = {}) => {
   if (n in memo) {
     return memo[n];
   }
   if (n <= 2) {
     return 1;
   }
   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
   return memo[n];
 };
 
 console.log(fibonacci(10));
 // fib(4) // 3
 // fib(10) // 55
 // fib(28) // 317811
 // fib(35) // 9227465