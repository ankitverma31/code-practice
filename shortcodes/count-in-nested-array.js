// Problem Statement: Given a nested array and a callback function, count all the elements that pass the test in the callback and return the count.

function countInArray(arr, cb) {
  let counter = 0;
  function _countInArrayHelper(arr) {
    if (arr.length == 0) {
      return counter;
    }
    let item = arr.pop();
    if (Array.isArray(item)) {
      _countInArrayHelper(item);
    }
    if (cb(item)) {
      counter += 1;
    }
    _countInArrayHelper(arr);
  }
  _countInArrayHelper(arr);
  return counter;
}

const arr = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }]], "bar"]];
const count = countInArray(arr, (e) => typeof e === "number");
console.log(count);
