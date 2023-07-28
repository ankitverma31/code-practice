// Problem Statement: Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr){
    let result = [];
    function flattenHelper(arr){
        if(arr.length == 0) return;
        let x = arr.pop();
        if(Array.isArray(x)) {
            flattenHelper(x);
        } else {
            result.push(x);
        }
        flattenHelper(arr);
    }
    flattenHelper(arr);
    return result;
}
console.log(flatten([1, 2, 3, [4, 5] ]));
//   flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
//   flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
//   flatten([[1],[2],[3]]) // [1,2,3]
//   flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]