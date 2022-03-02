// Problem Statement: 
// Write a funciton called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be same
// Complexity: O(N)

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) { // O(N)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) { // O(N)
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) { // O(N)
    if(!(key ** 2 in frequencyCounter2)){ // O(1)
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}

console.log(same([1,2,1,5],[1,25,1,4]));