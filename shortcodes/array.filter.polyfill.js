// Problem Statement: Array filter polyfill

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = arr.filter((x) => x % 2 == 0);
// console.log(evenNumbers);

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

const evenNumbers = arr.myFilter((x) => x % 2 == 0);
console.log(evenNumbers);
