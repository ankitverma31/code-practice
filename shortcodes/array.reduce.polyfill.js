// Problem Statement: Array reduce polyfill

const arr = [1, 2, 3, 4, 5];
// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = cb(accumulator, this[index], index, this);
  }
  return accumulator;
};

const initialValue = 0;
const sumWithInitial = arr.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
