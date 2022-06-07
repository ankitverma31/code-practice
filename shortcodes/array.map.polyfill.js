// Problem Statement: Polyfill for Array.map

const arr = [1, 2, 3, 4, 5];

// const square = arr.map((x) => Math.pow(x,2));
// console.log(square);

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(cb(this[index], index, this));
  }
  return result;
};

const square = arr.myMap((x) => Math.pow(x, 2));
console.log(square);
