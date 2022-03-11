// Problem Statement: Search for a substring count in main string
// Complexity: O(N^2)

function searchNaiveString(str, pattern) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] != pattern[j]) {
        break;
      }
      if (j == pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(searchNaiveString("mine life mine rules", "mine"));
