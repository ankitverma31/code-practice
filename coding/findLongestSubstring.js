// Problem Statement: Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
  let start = 0;
  let maxLen = 0;
  let map = {};
  if (str.length === 0) {
    return 0;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map[char]) {
      start = Math.max(start, map[char]);
    }
    map[char] = i + 1;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}

console.log(findLongestSubstring("rithmschool"));
