// Problem Statement: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Complexity: Time: O(N)
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, k) {
  if (arr.length == 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum / 2 == k) {
      return true;
    } else if (sum / 2 > k) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 2, 12, 19], 8));
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
