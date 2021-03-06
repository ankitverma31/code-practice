// Problem Statement: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// Complexity: O(N)

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let count = 1;
    for(var i = 1; i < arr.length; i++){
        if(arr[i-1] !== arr[i]){
            count++;
        }
    }
    return count;
}



const t0 = performance.now();
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
const t1 = performance.now();
console.log(`Call to countUniqueValues took ${(t1 - t0)/1000} seconds.`);

