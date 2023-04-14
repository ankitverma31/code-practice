const flatArr = (arr, maxDepth = 1) => {
  const result = [];
  const flatArrHelper = (arr, currDepth, maxDepth) => {
    for (const item of arr) {
      if (!Array.isArray(item)) {
        result.push(item);
      } else if (currDepth === maxDepth) {
        result.push(item);
      } else {
        flatArrHelper(item, currDepth + 1, maxDepth);
      }
    }
  };
  flatArrHelper(arr, 0, maxDepth);
  return result;
};

// const arr = [1, 2, [3, 4]];
// arr1.flat();
// // [1, 2, 3, 4]

// const arr = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]

// const arr = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]

// const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);

console.log(flatArr(arr, 2));
