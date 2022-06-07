// Problem Statement: Chop array into chunks of given length

const chop = (arr, len) => {
  const output = [];
  let i = 0;
  while (i < arr.length) {
    output.push(arr.slice(i, i + len));
    i = i + len;
  }
  return output;
};

console.log(chop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
