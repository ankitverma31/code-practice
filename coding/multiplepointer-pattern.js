// Problem Statement: Implement a function called sumZero, which accepts a sorted array, and returns the first pair where sum is zero. There can be negative numbers in the array, but it will always be sorted.
// sumZero([-4,-3,-2,-1,0,2]) // [-2,2]
// Complexity: O(N)

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum  = arr[left] + arr[right];
        if(sum===0){
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,3,4,5]));