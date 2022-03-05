// Problem Statement: Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time: O(N)
// sameFrequency(182,281) // true
// sameFrequency(3589578, 5879385) // true

function sameFrequency(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();

  if(str1.length !== str2.length) {
      return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for(let key in frequencyCounter1) {
      if(!(key in frequencyCounter2)){
          return false;
      }
      if(frequencyCounter1[key]!=frequencyCounter2[key]){
          return false;
      }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(3589578, 5879385));

